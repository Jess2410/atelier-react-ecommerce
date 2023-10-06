import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [selectedCategoryContext, setSelectedCategoryContext] =
    useState<string>("coucou");
  return (
    <CategoryContext.Provider
      value={{ selectedCategoryContext, setSelectedCategoryContext }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
