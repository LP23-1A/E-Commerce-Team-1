"use client"
import PineConeSVG from "@/components/SVG/PineCone";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function SecondStepOfSignUp({ nextStep, prevStep }: any) {
    const [buttonActive, setButtonActive] = useState(false);
    const [district, setDistrict] = useState("");
    const [khoroo, setKhoroo] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [error, setError] = useState("");
    const { setUserData }: any = useContext(UserContext);

    const handlePhoneNumber = (event: any) => {
        const valueNumber = parseInt(event.target.value)
        setPhoneNumber(valueNumber);

        setUserData((preValue: {}) => ({
            ...preValue,
            phoneNumber: valueNumber
        }));
    };

    const handleDistrict = (event: any) => {
        const valueDistrict = event.target.value
        setDistrict(valueDistrict);

        setUserData((preValue: {}) => ({
            ...preValue,
            district: valueDistrict
        }))
    };


    const checkEmptyInputs = () => {
        if (district === "" || khoroo === "") {
            setError("The forms must be filled");
            setTimeout(() => {
                setError("");
            }, 2000);
        } else {
            nextStep()
        };
    };

    return (
        <>
            <div className="mt-[14px] ml-[44px]">
                <PineConeSVG />
            </div>
            {/* first Step */}
            <div className="flex justify-center">
                <div className="w-[792px] h-[76px] p-[0, 24px] mt-[50px]">
                    <div className="border border-solid border-grey-300 w-[680px] absolute mt-[16px] ml-[39px] z-[-1]"></div>
                    <div className="border border-solid border-black w-[340px] absolute mt-[16px] ml-[39px] z-[-1]"></div>
                    <ul className="flex flex-row bg-slate-40 justify-between">
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">&#x2713;</p>
                            <li className="step step-primary">Name of Store</li>
                        </div>
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">2</p>
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
                <div className="w-[452px] h-[296px] mt-[150px]">
                    <h3 className="font-bold text-3xl text-black">Information of Local Region</h3>
                    {/* take Input */}

                    <div className="flex gap-4 flex-col">
                        {/* PhoneNumber */}
                        <div className="w-[360px]  flex flex-col">
                            <p className="font-semibold text-base text-black ">Phone-Number</p>
                            <input
                                value={phoneNumber}
                                onChange={handlePhoneNumber}
                                className="border w-[454px] mt-[10px] border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="district/District" type="text" />
                        </div>
                        {/* district/District */}
                        <div className="w-[360px]  flex flex-col">
                            <p className="font-semibold text-base text-black ">district/District</p>
                            <input
                                value={district}
                                onChange={handleDistrict}
                                className="border w-[454px] mt-[10px] border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="district/District" type="text" />
                        </div>
                        {/* Khoroo */}
                        <div className="w-[360px]  flex flex-col">
                            <p className="font-semibold text-base text-black">khoroo</p>
                            <input
                                value={khoroo}
                                onChange={(e) => setKhoroo(e.target.value)}
                                className="border w-[454px] mt-[10px] border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="khoroo" type="text" />
                        </div>
                        <p className="text-red-400 semibold">{error}</p>
                    </div>

                    <div className="flex w-full justify-between mt-8 items-baseline">
                        <button onClick={prevStep} className="w-[48px] flex h-[48px] justify-center items-center text-black bg-slate-100 rounded-full text-2xl transition-transform transform active:scale-95 duration-300 hover:scale-110 hover:bg-black hover:text-white">&#8592;</button>
                        <button
                            onClick={checkEmptyInputs}
                            style={{ background: buttonActive ? "black" : "#D6D8DB", color: buttonActive ? "white" : "#1C2024" }} className="flex justify-end gap-8 flex-row w-[127px] h-[48px] items-center rounded-lg mt-2 p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                            Next
                            <button className="arrow w-[24px] text-lg h-[24px] justify-center items-center flex">&#8594;</button>
                        </button>
                    </div>
                </div>
                <p className="absolute mt-[900px] ml-[-110px] text-slate-400">© 2023 Pinecone</p>
            </div>
        </>
    )
};