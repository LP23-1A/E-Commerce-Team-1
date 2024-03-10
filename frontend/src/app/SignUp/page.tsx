'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from "react-hot-toast";
import PineConeSVG from "@/components/SVG/PineCone";
import ButtonGoogle from "@/components/ButtonGoogle";
import ButtonMicrosoft from "@/components/ButtonMicrosoft";
import ButtonApple from "@/components/ButtonApple";
import AlreSignedUp from "@/components/Alre-SignedUp";
import axios from "axios";
import useSWR from "swr";

const backEndOfSignUp = "http://localhost:8000/user/postUser";
const USEREMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [buttonActive, setButtonActive] = useState(false);
    const fetcher = (url: string) => fetch(url).then((el) => el.json())
    const { data, error, isLoading } = useSWR("http://localhost:8000/user/getAllUsers", fetcher);
    const router = useRouter();
    // console.log(data);

    const handleColor = (valueEmail: string, valueName: string) => {
        setEmail(valueEmail);
        setName(valueName);

        valueEmail.trim() !== "" && valueName.trim() !== ""
            ? setButtonActive(true)
            : setButtonActive(false)
    };

    function validateEmail(email: string) {
        // console.log(email, "this is email");
        return USEREMAIL_REGEX.test(email);
    };

    const verifyingExistingUser = async () => {
        if (!data) return;
        if (isLoading) {
            toast.loading("Waiting...")
            return;
        }

        const allUsers = data.allUsers;
        const existingClient = allUsers.some((el: any) => el.userName === name);
        console.log(existingClient, "this is existing client");

        if (existingClient) {
            toast.error("Sorry, the name already exists.");
            return false;
        }
        return true;
    };

    const registerClient = async () => {
        if (name === "" || email === "") {
            toast.error("Come on, fill in the given forms.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Email must include some symbols and numbers.");
            return;
        }

        const isUniqueUser = await verifyingExistingUser();
        if (!isUniqueUser) return;

        try {
            const response = await axios.post(backEndOfSignUp, {
                userName: name,
                email: email,
                createdAt: new Date
            });
            console.log(response);

            toast.success("Successfully Signed up");
            router.push(`/${response.data.createdUser._id}/InfoAboutStore`);
        } catch (error) {
            console.error('Cannot register client', error);
            toast.error("An error occurred during registration.");
        }
    };

    return (
        <>
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
                        <Toaster toastOptions={{

                        }} position="top-center" />
                        <div className="border border-solid border-grey-300 w-[360px] mt-6"></div>
                        <ButtonGoogle />
                        <ButtonMicrosoft />
                        <ButtonApple />
                        <div className="border border-solid border-grey-300 w-[360px] mt-10"></div>
                        <AlreSignedUp />
                        <p className="absolute mt-[100px] ml-[100px] text-slate-400">© 2023 Pinecone</p>
                    </div>
                </div>
            </div>
        </>
    )
};
