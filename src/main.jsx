//Main.jsx sets up all the react routes
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* 25) in index.html: <div id="root"></div> you take that box and say: 
  make this the root of my React app (=createRoot)
  Whatever you put in render(...), shows up on the page.
  26) Strictmode is like training wheels for react: catches issues and steers things.
  27) RouterProvider is the brains of the router: it takes the router (createBrowserRouter) 
  and makes it work. Without this, React wouldn’t know how to handle URLs like /about or /projects
*/
