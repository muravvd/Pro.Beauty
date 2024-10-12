import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./main";
import { QueryClient } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const API_BASE_URL = "https://ideaigi.com";

root.render(<App />);
