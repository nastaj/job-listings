import Labels from "./Labels";
import Label from "./Label";

function Listing({ listing, onSelectedFilters }) {
  const tags = [listing.role, listing.level, ...listing.languages];

  return (
    <li
      className={`flex justify-between items-center mb-8 px-8 py-6 bg-white rounded-md shadow-sm ${
        listing.featured ? "border-l-4 border-l-primary" : ""
      }`}
    >
      <div className="grid grid-cols-[6rem_1fr] items-center grid-rows-3 gap-x-4 gap-y-2">
        <img
          className="row-span-3"
          src={listing.logo}
          alt={`${listing.company} logo`}
        />
        <div>
          <span className="inline-block text-primary font-bold mr-3">
            {listing.company}
          </span>
          {listing.new && (
            <span className="inline-block bg-primary rounded-full px-2 py-1 mr-3 text-white uppercase text-sm">
              New!
            </span>
          )}
          {listing.featured && (
            <span className="inline-block bg-black rounded-full px-2 py-1 text-white uppercase text-sm">
              Featured
            </span>
          )}
        </div>
        <span className="text-black font-bold text-xl">{listing.position}</span>
        <ul className="flex">
          <li className="mr-8 text-cyan-light">{listing.postedAt}</li>
          <li className="list-disc mr-8 pl-4 text-cyan-light">
            {listing.contract}
          </li>
          <li className="list-disc pl-4 text-cyan-light">{listing.location}</li>
        </ul>
      </div>
      <div>
        <Labels>
          {tags.map((tag) => (
            <Label
              key={crypto.randomUUID()}
              tag={tag}
              onSelectedFilters={onSelectedFilters}
            />
          ))}
        </Labels>
      </div>
    </li>
  );
}

export default Listing;
