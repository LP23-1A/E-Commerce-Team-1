"use client"
import PineConeSVG from "@/components/SvG/PineCone";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import RightArrow from "./SvG/RightArrow";
import LeftArrow from "./SvG/LeftArrow";
import SecondLine from "./SecondLine";

export default function SecondStepOfSignUp({ nextStep, prevStep }: any) {
    const [buttonActive, setButtonActive] = useState(false);
    const [district, setDistrict] = useState("");
    const [khoroo, setKhoroo] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [error, setError] = useState("");
    const { userData, setUserData }: any = useContext(UserContext);
    // console.log(userData, "this is userData");

    const handleFieldChange = (names: string) => (event: any) => {
        const value = event.target.value
        switch (names) {
            case 'phoneNumber':
                setPhoneNumber(parseInt(value))
                break;
            case 'district':
                setDistrict(value)
                break;
            case 'khoroo':
                setKhoroo(value)
                break;
            default:
                break;
        };        
        
        setUserData((preValue: {}) => ({
            ...preValue,
            phoneNumber: phoneNumber,
            district: district,
            khoroo: khoroo
        }))
    }

    useEffect(() => {
        const isActive = district !== "" && khoroo !== "" && phoneNumber !== 0;
        setButtonActive(isActive);
    }, [district, khoroo, phoneNumber])

    const checkEmptyInputs = () => {
        if (district === "" || khoroo === "" || phoneNumber === 0) {
            setError("The forms must be filled");
            setTimeout(() => {
                setError("");
            }, 2000);
        } else {
            nextStep()
        };
    };

    useEffect(() => {
        const handleClick = (event: any) => {
            if (event.key === 'Enter') {
                checkEmptyInputs()
            }
        };
        document.addEventListener('keydown', handleClick);
        return () => {
            document.removeEventListener('keydown', handleClick);
        };
    }, [checkEmptyInputs]);

    return (
        <>
            <PineConeSVG />
            <SecondLine />
            <div className="flex justify-center">
                <div className="w-[452px] h-[296px] mt-[150px]">
                    <h3 className="font-bold text-3xl text-black">Information of Local Region</h3>

                    <div className="flex gap-4 flex-col">
                        <div className="w-[360px]  flex flex-col">
                            <p className="font-semibold text-base text-black ">Phone-Number</p>
                            <input
                                value={phoneNumber}
                                onChange={handleFieldChange('phoneNumber')}
                                className="border w-[454px] mt-[10px] border-solid border-gray-300 bg-slate-100 p-2 rounded-lg"
                                placeholder="Phone Number"
                                type="text"
                            />
                        </div>
                        <div className="w-[360px]  flex flex-col">
                            <p className="font-semibold text-base text-black ">district/District</p>
                            <input
                                value={district}
                                onChange={handleFieldChange('district')}
                                className="border w-[454px] mt-[10px] border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="district/District" type="text" />
                        </div>
                        <div className="w-[360px]  flex flex-col">
                            <p className="font-semibold text-base text-black">khoroo</p>
                            <input
                                value={khoroo}
                                onChange={handleFieldChange('khoroo')}
                                className="border w-[454px] mt-[10px] border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="khoroo" type="text" />
                        </div>
                        <p className="text-red-400 semibold">{error}</p>
                    </div>

                    <div className="flex w-full justify-between mt-8 items-baseline">
                        <button onClick={prevStep} className="w-[48px] flex h-[48px] justify-center items-center text-black bg-slate-100 rounded-full text-2xl transition-transform transform active:scale-95 duration-300 hover:scale-110 hover:bg-black hover:text-white"><LeftArrow /></button>
                        <button
                            onClick={checkEmptyInputs}
                            disabled={!buttonActive}
                            style={{ background: buttonActive ? "black" : "#D6D8DB", color: buttonActive ? "white" : "#1C2024" }} className="flex justify-end gap-8 flex-row w-[127px] h-[48px] items-center rounded-lg mt-2 p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                            Next
                            <div className="arrow w-[16px] text-lg h-[24px] justify-center items-center flex">
                                <RightArrow />
                            </div>
                        </button>
                    </div>
                </div>
                <p className="absolute mt-[900px] ml-[-110px] text-slate-400">© 2023 Pinecone</p>
            </div>
        </>
    )
};