import PanelLabelButton from "./PanelLabelButton";
import PanelClearButton from "./PanelClearButton";

function Panel({ selectedFilters, onDelete, onClearFilters }) {
  return (
    <>
      <div className="flex gap-8 2xl:gap-4 2xl:flex-wrap">
        {selectedFilters.map((filter) => {
          return (
            <PanelLabelButton
              key={crypto.randomUUID()}
              filter={filter}
              onDelete={onDelete}
            />
          );
        })}
      </div>
      <PanelClearButton onClearFilters={onClearFilters} />
    </>
  );
}

export default Panel;
