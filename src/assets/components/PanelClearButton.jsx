function PanelClearButton({ onClearFilters }) {
  return (
    <button
      className="text-cyan-dark text-lg font-bold hover:text-primary hover:underline transition-all"
      onClick={onClearFilters}
    >
      Clear
    </button>
  );
}

export default PanelClearButton;
