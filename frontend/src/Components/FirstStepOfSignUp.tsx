"use client"
import PineConeSVG from "@/Components/SVG/PineCone";
import React, { useState } from "react";
export default function FirstStepOfSignUp() {
    const [buttonActive, setbuttonActive] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (event: any) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.trim() !== "") {
            setbuttonActive(true);
        } else {
            setbuttonActive(false)
        }
    };

    return (
        <div>
            <div className="mt-[14px] ml-[44px]">
                <PineConeSVG />
            </div>
            {/* first Step */}
            <div className="flex justify-center">
                <div className="w-[792px] h-[76px] p-[0, 24px] mt-[117px]">
                    <div className="border border-solid border-grey-300 w-[692px] absolute mt-[16px] ml-[35px] z-[-1]"></div>
                    <ul className="flex flex-row bg-slate-40 justify-between">
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">1</p>
                            <li className="step step-primary">Name of Store</li>
                        </div>
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-gray-300 rounded-full text-black flex justify-center items-center">2</p>
                            <li className="step step-primary">Own Region</li>
                        </div>
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-gray-300 rounded-full text-black flex justify-center items-center">3</p>
                            <li className="step step-primary">Additional Information</li>
                        </div>
                    </ul>
                </div>
            </div>
            {/* information about store */}
            <div className="flex justify-center">
                <div className="w-[452px] h-[296px] mt-[100px]">
                    <h3 className="font-bold text-3xl text-black">Information about store</h3>
                    <p className="font-semibold text-base text-black mt-2">what is the name of your store ?</p>
                    <div className="w-[360xp] mt-10 h-[88px] flex flex-col gap-4">
                        <input value={inputValue} onChange={handleInputValue} className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="name of store" type="text" />
                    </div>
                    <div className="flex justify-between items-baseline">
                        <button className="w-[48px] flex h-[48px] justify-center items-center text-black bg-slate-100 rounded-full text-2xl">&#8592;</button>
                        <button style={{ background: buttonActive ? "black" : "#D6D8DB", color: buttonActive ? "white" : "#1C2024" }} className="flex justify-end gap-8 flex-row w-[127px] h-[48px] items-center rounded-lg mt-2 p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                            Next
                            <div className="arrow w-[24px] text-lg h-[24px] justify-center items-center flex">&#8594;</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};