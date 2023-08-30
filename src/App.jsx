import { useEffect, useState } from "react";
import HeaderBackground from "./assets/components/HeaderBackground";
import Listings from "./assets/components/Listings";
import Listing from "./assets/components/Listing";
import Panel from "./assets/components/Panel";

function App() {
  const [listings, setListings] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleDelete(filter) {
    setSelectedFilters((selectedFilters) =>
      selectedFilters.filter((prev) => prev !== filter)
    );
  }

  function handleClearFilters() {
    setSelectedFilters([]);
  }

  useEffect(function () {
    async function getListings() {
      try {
        const res = await fetch("src/data.json");
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error(err);
      }
    }
    getListings();
  }, []);

  return (
    <>
      <HeaderBackground />
      <main className="font-sans flex items-center bg-background flex-col">
        {selectedFilters.length > 0 && (
          <Panel
            selectedFilters={selectedFilters}
            onDelete={handleDelete}
            onClearFilters={handleClearFilters}
          />
        )}
        <Listings>
          {listings.map((listing) => (
            <Listing
              key={listing.id}
              listing={listing}
              onSelectedFilters={setSelectedFilters}
            />
          ))}
        </Listings>
      </main>
    </>
  );
}

export default App;
