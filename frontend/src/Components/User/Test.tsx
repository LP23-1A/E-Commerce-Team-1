"use client"
import React, { createContext, useState } from "react";

export const foodContext = createContext({
    foodData: [],
    toBasket: (food: any) => { },
    renewFoodData: (food:any) => { }
});

export const GiveFoodData = ({ children }: any) => {
    const [foodData, setFoodData] = useState<any>([]);
    
    const renewFoodData: any = (updatedFoodData: any) => {
        setFoodData(updatedFoodData);
    };

    const toBasket: any = (foodInfo: any) => {
        setFoodData([...foodData, foodInfo])
        // console.log(foodData, 'this is foodData from context');    
    };

    return (
        <foodContext.Provider value={{ foodData, toBasket, renewFoodData }}>
            {children}
        </foodContext.Provider>
    )
};