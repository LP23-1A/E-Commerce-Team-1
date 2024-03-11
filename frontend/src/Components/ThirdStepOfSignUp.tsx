"use client"
import PineConeSVG from "@/components/SvG/PineCone";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./UserContext";

const backEndOfSignUp = "http://localhost:8000/user/postUser";

export default function ThirdStepOfSignUp({ prevStep }: any) {
    const [buttonActive, setButtonActive] = useState(false);
    const [error, setError] = useState("");
    const { user } = useAuth0();
    // console.log(JSON.stringify(user));
    const { userData, setUserData }: any = useContext(UserContext);
    const [haveSkill, setHaveSkill] = useState('');
    const [productType, setProductType] = useState('');
    // console.log(userData, 'from 3');


    const router = useRouter()

    const manageSkill = (event: any) => {
        const valueSkill = event.target.value
        setHaveSkill(valueSkill)
        console.log(valueSkill, "skill");
        
    };

    const manageProductType = (event: any) => {
        const valueProductType = event.target.value
        setProductType(valueProductType)
        console.log(valueProductType, "type");
        
    }

    const registerClient = async () => {
        if (!haveSkill || !productType) {
            setError("Please choose the given options");
            setTimeout(() => {
                setError("");
            }, 2000);
        } else {
            const response = await axios.post(backEndOfSignUp, {
                userName: user?.name ?? userData?.userName,
                email: user?.email ?? userData?.email,
                khoroo: userData.khoroo,
                district: userData.district,
                phoneNumber: userData.phoneNumber,
                nameOfStore: userData.nameOfStore,
                typeOfProduct: productType,
                skillsInSales: haveSkill,
                createdAt: new Date,
                updatedAt: new Date
            })
            console.log(response, "this is response");

            router.push(`/DashBoard/${response.data.createdUser._id}`)
        }
    };

    return (
        <div>
            <div className="mt-[14px] ml-[44px]">
                <PineConeSVG />
            </div>
            {/* first Step */}
            <div className="flex mt-[50px]  justify-center">
                <div className="w-[792px] h-[76px] p-[0, 24px]">
                    <div className="border border-solid border-grey-300 w-[680px] absolute mt-[16px] ml-[39px] z-[-1]"></div>
                    <div className="border border-solid border-black w-[680px] absolute mt-[16px] ml-[39px] z-[-1]"></div>
                    <ul className="flex flex-row bg-slate-40 justify-between">
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">&#x2713;</p>
                            <li className="step step-primary">Name of Store</li>
                        </div>
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">&#x2713;</p>
                            <li className="step step-primary">Own Region</li>
                        </div>
                        <div className="flex justify-center flex-col items-center gap-[8px]">
                            <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">3</p>
                            <li className="step step-primary">Additional Information</li>
                        </div>
                    </ul>
                </div>
            </div>

            {/* information about store */}
            <div className="flex mt-[100px] justify-center">
                <div className="w-[452px] h-[296px] mt-[100px]">
                    <h3 className="font-bold text-3xl text-black">Knowing to each other a bit</h3>
                    <h5 className="font-normal mt-[30px] text-base" style={{ color: "#121316" }}>This information will be used to support store configuration</h5>
                    {/* take Input */}

                    <div className="flex gap-4 flex-col">
                        <div>
                            <p className="font-semibold text-base text-black mt-[30px]">Have you ever been in sales ?</p>
                            <select value={haveSkill} onChange={manageSkill} className="border mt-[10px] w-full border-solid border-gray-300 bg-slate-100 p-2 rounded-lg">
                                <option >Choose</option>
                                <option >True</option>
                                <option >False</option>
                            </select>
                        </div>
                        <div>
                            <p className="font-semibold text-base text-black mt-[20px]">What kind of products do you want to sell ?</p>
                            <select value={productType} onChange={manageProductType} className="border mt-[10px] w-full border-solid border-gray-300 bg-slate-100 p-2 rounded-lg">
                                <option value="">Choose</option>
                                <option >Some option</option>
                                <option >Other option</option>
                            </select>
                        </div>
                        <p className="text-red-400 font-semibold">{error}</p>
                    </div>

                    <div className="flex w-full justify-between mt-8 items-baseline">
                        <button onClick={prevStep} className="w-[48px] flex h-[48px] justify-center items-center text-black bg-slate-100 rounded-full text-2xl transition-transform transform active:scale-95 duration-300 hover:scale-110 hover:bg-black hover:text-white">&#8592;</button>
                        <button
                            onClick={() => {
                                registerClient();
                            }}
                            style={{ background: buttonActive ? "black" : "#D6D8DB", color: buttonActive ? "white" : "#1C2024" }} className="flex justify-end gap-8 flex-row w-[127px] h-[48px] items-center rounded-lg mt-2 p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                            Next
                            <p className="arrow w-[24px] text-lg h-[24px] justify-center items-center flex">&#8594;</p>
                        </button>
                    </div>
                </div>
                <p className="absolute mt-[800px] ml-[-10px] text-slate-400">© 2023 Pinecone</p>
            </div>
        </div>
    )
};