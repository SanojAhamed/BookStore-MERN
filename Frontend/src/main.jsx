import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM - A package that provides DOM-specific methods that can be used at the top level of your app.
import App from "./App.jsx"; // App - A component that contains the routes for the application.
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter - A component that uses the HTML5 history API to keep your UI in sync with the URL.
import { SnackbarProvider, enqueueSnackbar } from "notistack";  //  SnackbarProvider - A component that provides the snackbar context to the application.



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
