'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import PineConeSVG from "@/Components/SVG/PineCone";
import ButtonGoogle from "@/Components/ButtonGoogle";
import ButtonMicrosoft from "@/Components/ButtonMicrosoft";
import ButtonApple from "@/Components/ButtonApple";
import axios from "axios";
import Cookies from "js-cookie";

const backEndOfSignUp = "http://localhost:8000/user/postUser";

const USEREMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [buttonActive, setButtonActive] = useState(false);
    const [error, setError] = useState("");
    const route = useRouter();

    const registerClient = async () => {
        try {
            if (name !== "" && email !== "") {
                if (!validateEmail(email)) {
                    setError("Email must include symbols and numbers");
                    setTimeout(() => {
                        setError("");
                    }, 4000);
                    return;
                }
                
                const response = await axios.post(backEndOfSignUp, {
                    userName: name,
                    email: email
                });

                const token = response.data.token;
                Cookies.set('token', token);

                route.push(`/?${token}/InfoAboutStore`);
                // route.push(`/?token=${token}&page=InfoAboutStore`);
                // console.log("Sign up successful");
            } else {
                setError("Please fill in the given forms");
                setTimeout(() => {
                    setError("");
                }, 2000);
            }
        } catch (error) {
            console.error('Cannot register client', error);
        }
    };


    const handleColor = (valueEmail: string, valueName: string) => {
        setEmail(valueEmail);
        setName(valueName);

        valueEmail.trim() !== "" && valueName.trim() !== ""
            ? setButtonActive(true)
            : setButtonActive(false)
    };

    function validateEmail(email: string) {
        return USEREMAIL_REGEX.test(email)
    }

    return (
        <div className="flex relative">
            <div className="mt-[44px] ml-[44px] absolute">
                <PineConeSVG />
            </div>
            <div className="flex justify-center w-full">
                <div className="w-[440px] rounded-xl mt-[160px] p-[40px] h-[fit-content] border border-solid border-gray-300 border-1">
                    <p className="flex font-bold text-3xl justify-center w-[360px] h-[60px] pb-5 ">To Register</p>
                    <div className="w-[360xp] mt-10 h-[88px] flex flex-col gap-4">
                        <p className="font-normal text-base text-black">Your Email</p>
                        <input
                            value={email}
                            onChange={(e) => handleColor(e.target.value, name)}
                            className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="Email" type="text" />
                    </div>
                    <div className="w-[360xp] h-[88px] flex flex-col gap-4 mt-2">
                        <p className="font-normal text-base text-black">Your Name</p>
                        <input
                            value={name}
                            onChange={(e) => handleColor(email, e.target.value)}
                            className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="Name" type="text" />
                    </div>
                    <p className="text-red-400 semibold">{error}</p>
                    <button
                        style={{ background: buttonActive ? "black" : "#D6D8DB", color: buttonActive ? "white" : "gray" }}
                        onClick={() => {
                            registerClient()
                        }}
                        className="flex flex-row w-[360px] items-center justify-between rounded-lg mt-2 h-[56px] p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                        <div></div>
                        Next
                        <div className="arrow w-[24px] text-lg h-[24px] justify-center items-center flex">&#8594;</div>
                    </button>
                    <div className="border border-solid border-grey-300 w-[360px] mt-6"></div>
                    <ButtonGoogle />
                    <ButtonMicrosoft />
                    <ButtonApple />
                    <div className="border border-solid border-grey-300 w-[360px] mt-10"></div>
                    <div className="flex flex-row text-blacl justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2">
                        Already Signed Up ?
                        <button className="underline underline-offset-4 hover:text-blue-500">Sign In</button>
                    </div>
                    <p className="absolute mt-[100px] ml-[100px] text-slate-400">© 2023 Pinecone</p>
                </div>
            </div>
        </div>
    )
};
