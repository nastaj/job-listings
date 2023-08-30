function Panel({ selectedFilters, onDelete, onClearFilters }) {
  return (
    <div className=" bg-white w-3/4 flex justify-between px-8 py-4 mb-8 rounded-md shadow-sm">
      <div className="flex gap-8">
        {selectedFilters.map((filter) => {
          return (
            <div className="flex" key={crypto.randomUUID()}>
              <div className="bg-tablets text-primary font-bold py-1 px-2 rounded-sm">
                {filter}
              </div>
              <button
                className="bg-primary px-2 hover:bg-black"
                onClick={() => onDelete(filter)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={onClearFilters}>Clear</button>
    </div>
  );
}

export default Panel;
