"use client";
import React, { useRef, createContext } from "react";

interface UserData {
  userName: string;
  email: string;
  nameOfStore: string;
  phoneNumber: number;
  district: string;
  khoroo: string;
  skillInSales: string;
  typeOfProduct: string;
}

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {

  const userDataRef = useRef<UserData>({
    userName: "",
    email: "",
    nameOfStore: "",
    phoneNumber: 0,
    district: "",
    khoroo: "",
    skillInSales: "",
    typeOfProduct: "",
  });
  // console.log(userDataRef.current, "from context");

  return (
    <UserContext.Provider value={{ userDataRef }}>
      {children}
    </UserContext.Provider>
  );

};
