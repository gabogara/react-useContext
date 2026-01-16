import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpert = () => {
  const [categories, setCategories] = useState(["Dragon Ball", "Naruto"]);

  const onHandleCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onNewCategory={onHandleCategory} />
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
};
