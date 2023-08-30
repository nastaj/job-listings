import { useEffect, useState } from "react";
import Listing from "./Listing";

function Listings() {
  const [listings, setListings] = useState([]);

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
    <ul className="w-3/4">
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ul>
  );
}

export default Listings;
