import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    // Basic Info
    fullName: "",
    mobile: "",
    email: "",
    role: "",

    // Location Details
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Preferences (for clients)
    preferredLanguage: "",
    frequentlyNeededServices: [],

    // Authentication
    isAuthenticated: false,
    authToken: null,

    mobileOtp: "",
    emailOtp: "",
    agreeToTerms: false,
  });

  const updateUserData = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  const clearUserData = () => {
    setUserData({
      fullName: "",
      mobile: "",
      email: "",
      role: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      preferredLanguage: "",
      frequentlyNeededServices: [],
      isAuthenticated: false,
      authToken: null,
      mobileOtp: "",
      emailOtp: "",
      agreeToTerms: false,
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
