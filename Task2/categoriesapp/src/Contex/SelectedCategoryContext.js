import { useState, useEffect } from "react";
import CategoryContex from "./CetogoryContex";

const SelectedCategoryProvider = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(() =>
    localStorage.getItem("selectedCategory")
  );

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  return (
    <CategoryContex.Provider value={{ selectedCategory, setSelectedCategory }}>
      {props.children}
    </CategoryContex.Provider>
  );
};

export default SelectedCategoryProvider;