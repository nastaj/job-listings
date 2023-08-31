import { motion } from "framer-motion";

function Label({ tag, onSelectedFilters }) {
  function handleSelect() {
    onSelectedFilters((prev) => {
      if (prev.includes(tag)) {
        // Filter is already selected, remove it
        return prev.filter((filter) => filter !== tag);
      } else {
        // Filter is not selected, add it
        return [...prev, tag];
      }
    });
  }

  return (
    <motion.li
      className="bg-tablets text-primary font-bold py-1 px-2 rounded-sm cursor-pointer hover:bg-primary hover:text-white transition-all"
      onClick={() => handleSelect()}
    >
      {tag}
    </motion.li>
  );
}

export default Label;
