import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifExpert } from "./GifExpert.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GifExpert />
  </StrictMode>
);
