function Label({ tag, onSelectedFilters }) {
  function handleSelect() {
    onSelectedFilters((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  }

  return (
    <li
      className="bg-tablets text-primary font-bold py-1 px-2 rounded-sm cursor-pointer hover:bg-primary hover:text-white"
      onClick={() => handleSelect()}
    >
      {tag}
    </li>
  );
}

export default Label;
