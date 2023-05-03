import { useState, useEffect } from "react";
import CategoryContex from "./CetogoryContex";

const SelectedCategoryProvider = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(() =>
    localStorage.getItem("selectedCategory")
  );
  const [selectedSubCategory, setSelectedsubCategory] = useState(() =>
    localStorage.getItem("selectedSubCategory")
  );

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem("selectedSubCategory",selectedSubCategory);
  }, [selectedSubCategory])

  return (
    <CategoryContex.Provider value={{ selectedCategory, setSelectedCategory ,selectedSubCategory, setSelectedsubCategory }}>
      {props.children}
    </CategoryContex.Provider>
  );
};

export default SelectedCategoryProvider;