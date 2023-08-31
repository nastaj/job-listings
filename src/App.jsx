import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderBackground from "./assets/components/HeaderBackground";
import Listings from "./assets/components/Listings";
import Listing from "./assets/components/Listing";
import Panel from "./assets/components/Panel";
import Footer from "./assets/components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  function handleDelete(filter) {
    setSelectedFilters((selectedFilters) =>
      selectedFilters.filter((selected) => selected !== filter)
    );
  }

  function handleClearFilters() {
    setSelectedFilters([]);
  }

  useEffect(function () {
    async function getListings() {
      try {
        setIsLoading(true);
        const res = await fetch("data.json");
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getListings();
  }, []);

  useEffect(
    function () {
      setFilteredListings(
        listings.filter((listing) => {
          let filterConditions = 0;

          if (selectedFilters.includes(listing.role)) {
            filterConditions++;
          }

          if (selectedFilters.includes(listing.level)) {
            filterConditions++;
          }

          if (
            selectedFilters.some((filter) => listing.languages.includes(filter))
          ) {
            const selectedLanguages = selectedFilters.filter((filter) =>
              listing.languages.includes(filter)
            );

            filterConditions += selectedLanguages.length;
          }

          if (
            selectedFilters.some((filter) => listing.tools.includes(filter))
          ) {
            const selectedTools = selectedFilters.filter((filter) =>
              listing.tools.includes(filter)
            );

            filterConditions += selectedTools.length;
          }

          return filterConditions === selectedFilters.length;
        })
      );
    },
    [selectedFilters, listings]
  );

  return (
    <>
      <HeaderBackground />

      <main className="font-sans flex items-center bg-background flex-col min-h-screen ">
        <section className="min-h-[96px] w-3/4 2xl:w-full 2xl:px-6 -translate-y-1/2">
          <AnimatePresence>
            {selectedFilters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className=" bg-white w-full flex xl:gap-1 justify-between px-12 py-8 rounded-md shadow-sm"
              >
                <Panel
                  selectedFilters={selectedFilters}
                  onDelete={handleDelete}
                  onClearFilters={handleClearFilters}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <Listings selectedFilters={selectedFilters}>
          <AnimatePresence>
            {filteredListings.length > 0 &&
              filteredListings.map((listing) => (
                <motion.li
                  initial={{ opacity: 0, x: 100, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: 100, height: 0 }}
                  key={listing.id}
                >
                  <Listing
                    listing={listing}
                    onSelectedFilters={setSelectedFilters}
                  />
                </motion.li>
              ))}

            {!filteredListings && (
              <p className="text-center text-xl">
                No results. Try changing your filters.
              </p>
            )}

            {isLoading && <p className="text-center text-xl">Loading...</p>}
          </AnimatePresence>
        </Listings>
      </main>

      <Footer />
    </>
  );
}

export default App;
