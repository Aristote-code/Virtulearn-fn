import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContextProvider from "../context/AuthContext";

const title = document.title;
window.addEventListener("blur", () => {
  document.title = "VirtuLearn is here 😏";
});
window.addEventListener("focus", () => {
  document.title = title;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
