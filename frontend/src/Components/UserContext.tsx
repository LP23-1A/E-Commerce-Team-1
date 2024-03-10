import React, { useState, createContext } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }: any) => {
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

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider

