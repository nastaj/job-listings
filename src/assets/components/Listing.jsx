import Labels from "./Labels";
import Label from "./Label";

function Listing({ listing, onSelectedFilters }) {
  const tags = [
    listing.role,
    listing.level,
    ...listing.languages,
    ...listing.tools,
  ];

  return (
    <>
      <div
        className={`flex justify-between items-center px-8 py-6 bg-white rounded-md shadow-sm ${
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
              <span className="inline-block bg-cyan-dark rounded-full px-2 py-1 text-white uppercase text-sm">
                Featured
              </span>
            )}
          </div>
          <span className="text-cyan-dark font-bold text-xl cursor-pointer hover:text-primary transition-all">
            {listing.position}
          </span>
          <ul className="flex">
            <li className="mr-8 text-cyan-light">{listing.postedAt}</li>
            <li className="list-disc mr-8 pl-4 text-cyan-light">
              {listing.contract}
            </li>
            <li className="list-disc pl-4 text-cyan-light">
              {listing.location}
            </li>
          </ul>
        </div>
        <div>
          <Labels>
            {tags.map((tag) => (
              <Label
                key={crypto.randomUUID()}
                tag={tag}
                listing={listing}
                onSelectedFilters={onSelectedFilters}
              />
            ))}
          </Labels>
        </div>
      </div>
      <div className="h-8 invisible">&nbsp;</div>
    </>
  );
}

export default Listing;
