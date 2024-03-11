'use client'
import React, { useState, createContext } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }: any) => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        nameOfStore: "",
        phoneNumber: 0,
        district: "",
        khoroo: "",
        skillInSales: false,
        typeOfProduct: ""
    });

    // console.log(userData, "from context");
    

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
};



