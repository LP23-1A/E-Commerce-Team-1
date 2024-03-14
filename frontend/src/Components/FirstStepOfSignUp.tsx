"use client"
import PineConeSVG from "@/Components/SVG/PineCone";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./UserContext";
import RightArrow from "./SVG/RightArrow";
import LeftArrow from "./SVG/LeftArrow";
import FirstLine from "./FirstLine";

export default function FirstStepOfSignUp({ nextStep }: any) {
    const [buttonActive, setButtonActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");
    const { userDataRef }: any = useContext(UserContext);
    const controlUserForm = (field: string, value: string | number) => {
        userDataRef.current = { ...userDataRef.current, [field]: value };
    };

    useEffect(() => {
        const isActive = inputRef.current?.value !== ""
        setButtonActive(isActive);
    }, [inputRef.current?.value])

    const validInput = () => {
        if (inputRef.current?.value !== "") {
            nextStep()
        } else {
            setError('Please give your Input');
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    };

    useEffect(() => {
        const handleClick = (event: any) => {
            if (event.key === 'Enter') {
                validInput()
            }
        }
        document.addEventListener('keydown', handleClick);
        return () => {
            document.removeEventListener('keydown', handleClick)
        }
    }, [validInput])

    return (
        <>
            <PineConeSVG />
            <FirstLine/>
            <div className="flex justify-center">
                <div className="w-[452px] h-[296px] mt-[220px] p-[20px] text-center">
                    <h3 className="font-bold text-3xl text-black">Information about store</h3>
                    <p className="font-semibold text-base text-black mt-2">what is the name of your store ?</p>
                    <div className="w-[360xp] mt-[20px] h-[88px] flex flex-col gap-4">
                        <input
                            ref={inputRef}
                            onChange={(event) => {
                                controlUserForm('nameOfStore', event.target.value)
                            }}
                            className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg"
                            placeholder="name of store"
                            type="text" />
                        <p className="text-red-400 semibold">{error}</p>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <button className="w-[48px] h-[48px] flex justify-center items-center bg-slate-100 text-black rounded-full text-2xl transition-transform transform active:scale-95 hover:scale-110 hover:bg-black hover:text-white duration-300">                            
                            <LeftArrow />
                        </button>

                        <button
                            onClick={validInput}
                            style={{ background: buttonActive ? "black" : "#D6D8DB", color: buttonActive ? "white" : "#1C2024" }} className="flex justify-end gap-8 flex-row w-[127px] h-[48px] items-center rounded-lg mt-2 p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                            Next
                            <div className="arrow w-[16px] text-lg h-[24px] justify-center items-center flex">
                                <RightArrow />
                            </div>
                        </button>
                    </div>
                    <p className="absolute mt-[450px] ml-[150px] text-slate-400">© 2023 Pinecone</p>
                </div>
            </div>
        </>
    )
};