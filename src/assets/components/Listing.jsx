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
        className={`flex xl:flex-col justify-between items-center xl:items-start xl:gap-4 xl:pt-[2.4rem] px-8 py-6 bg-white rounded-md shadow-sm ${
          listing.featured ? "border-l-4 border-l-primary" : ""
        }`}
      >
        <div className="grid grid-cols-[6rem_1fr] xl:grid-cols-none xl:relative xl:border-b-2 xl:pb-[1rem] xl:w-full items-center grid-rows-3 gap-x-4 gap-y-2 xl:gap-y-4 lg:gap-y-2">
          <img
            className="row-span-3 xl:absolute -top-[4.1rem] xl:h-14"
            src={listing.logo}
            alt={`${listing.company} logo`}
          />
          <div className="flex items-center">
            <span className="inline-block text-primary text-xl font-bold mr-3">
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
          <ul className="flex lg:flex-col lg:list-inside">
            <li className="lg:list-disc lg:pl-2 mr-8 xl:mr-6 text-cyan-light">
              {listing.postedAt}
            </li>
            <li className="list-disc mr-8 xl:mr-6 pl-4 xl:pl-2 text-cyan-light">
              {listing.contract}
            </li>
            <li className="list-disc pl-4 xl:pl-2 text-cyan-light">
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
      <div className="h-8 xl:h-12 invisible">&nbsp;</div>
    </>
  );
}

export default Listing;
