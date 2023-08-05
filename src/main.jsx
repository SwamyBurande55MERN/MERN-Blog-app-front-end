// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const rootElement = document.getElementById("root");

// Wrap the rendering inside a try...catch block
try {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
} catch (err) {
  // Handle any errors that occur during rendering
  console.error("Error during rendering:", err);
}
