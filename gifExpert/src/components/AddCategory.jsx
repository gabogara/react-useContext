import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [input, setInput] = useState("");
  const onHandleChange = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (input.trim().length <= 1) return;
    onNewCategory(input.trim());

    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Categoria"
        value={input}
        onChange={onHandleChange}
      />
    </form>
  );
};
