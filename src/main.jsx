import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext";
import { EmployeeProvider } from "./contexts/EmployeeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <EmployeeProvider>
        
        <App />
      </EmployeeProvider>
    </UserProvider>
  </StrictMode>
);
