import React from "react";
import { createRoot } from "react-dom/client";
import Template, { type DeveloperDarkPortfolioData } from "./template";
import data from "../public/portfolio-data.json";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Template portfolioData={data as DeveloperDarkPortfolioData} />
  </React.StrictMode>,
);