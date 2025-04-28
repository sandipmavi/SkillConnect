import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [userData, setUserData] = useState({
    // Authentication
    isAuthenticated: false,
    authToken: null,

    // Basic Info
    fullName: "",
    mobile: "",
    email: "",
    dob: "",
    gender: "",
    profilePicture: null,
    password: "",
    confirmPassword: "",

    // Location Details
    address: "",
    city: "",
    state: "",
    pincode: "",
    serviceableArea: "",
    serviceRadius: "",

    // Professional Details
    skillCategory: "",
    experience: "",
    certification: null,
    availability: [],
    bio: "",
    portfolio: [],

    // Identity Verification
    aadhaar: "",
    govtId: null,
    selfie: null,
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
      dob: "",
      profilePicture: null,
      password: "",
      confirmPassword: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      serviceableArea: "",
      serviceRadius: "",
      skillCategory: "",
      experience: "",
      certification: null,
      availability: [],
      bio: "",
      portfolio: [],

      aadhaar: "",
      govtId: null,
      selfie: null,
      isAuthenticated: false,
      authToken: null,
    });
  };

  return (
    <EmployeeContext.Provider
      value={{ userData, updateUserData, clearUserData }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployee() {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
