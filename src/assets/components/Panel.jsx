import PanelLabelButton from "./PanelLabelButton";
import PanelClearButton from "./PanelClearButton";

function Panel({ selectedFilters, onDelete, onClearFilters }) {
  return (
    <>
      <div className="flex gap-8">
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
