import 'normalize.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import style from "./App.module.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App className={style}/>
  </StrictMode>
);
