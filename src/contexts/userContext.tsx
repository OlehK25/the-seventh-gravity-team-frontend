"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type UserType = "volunteer" | "organization" | null;

interface UserContextType {
  isLoggedIn: boolean;
  userType: UserType;
  login: (userType: UserType) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userType, setUserType] = useState<UserType>(null);

  const login = (type: UserType) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userType, login }}>
      {children}
    </UserContext.Provider>
  );
};
