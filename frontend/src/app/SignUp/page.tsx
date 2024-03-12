'use client'
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "@/components/UserContext";
import PineConeSVG from "@/components/SvG/PineCone";
import ButtonGoogle from "@/components/ButtonGoogle";
import ButtonMicrosoft from "@/components/ButtonMicrosoft";
import ButtonApple from "@/components/ButtonApple";
import AlreSignedUp from "@/components/Alre-SignedUp";
import useSWR from "swr";
import RightArrow from "@/components/SvG/RightArrow";
import GoogleSignIn from "@/components/GoogleSignIn";

const USEREMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const USERNAME_REGEX = /^[A-Z].{2,}$/;

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [buttonActive, setButtonActive] = useState(false);
    const fetcher = (url: string) => fetch(url).then((el) => el.json())
    const { data, isLoading } = useSWR("http://localhost:8000/user/getAllUsers", fetcher);
    const router = useRouter();
    const { setUserData }: any = useContext(UserContext)

    const handleColor = (valueEmail: string, valueName: string) => {
        setEmail(valueEmail);
        setName(valueName);

        valueEmail.trim() !== "" && valueName.trim() !== ""
            ? setButtonActive(true)
            : setButtonActive(false)

        setUserData((preValue: any) => ({
            ...preValue,
            userName: valueName,
            email: valueEmail
        }));
    };

    function validateEmail(email: string) {
        // console.log(email, "this is email");
        return USEREMAIL_REGEX.test(email);
    };

    function validateName(name: string) {
        return USERNAME_REGEX.test(name)
    }

    const verifyingExistingUser = async () => {
        if (!data) return;
        if (isLoading) {
            toast.loading("Waiting...")
            return;
        };

        const allUsers = data.allUsers;
        // const existingClient = allUsers ? allUsers.some((el: any) => el.userName === name) : undefined
        const test = allUsers ? allUsers.map((el:any) => el.includes(name)) : console.log("failed to map ");
        
        // console.log(existingClient, "this is existing client");
        console.log(test);
        

        if (test) {
            toast.error("Sorry, the name already exists.");
            return false;
        }
        return true;
    };

    const NavigateToNext = async () => {
        if (name === "" && email === "") {
            toast("🤧 Come on man, fill in the given forms.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Email must include some symbols and numbers.");
            return;

        } else if (!validateName(name)) {
            toast("😱 The name must be at least 3 characters long and the first letter must be capitalized");
            return;
        }

        const isUniqueUser = await verifyingExistingUser();
        if (!isUniqueUser) return;

        router.push('/InfoAboutStore');
    };

    useEffect(() => {
        const handleClick = (event: any) => {
            if (event.key === 'Enter') {
                NavigateToNext()
            }
        }
        document.addEventListener('keydown', handleClick)
        return () => {
            document.removeEventListener('keydown', handleClick)
        }
    }, [NavigateToNext])

    return (
        <>
            <div className="flex w-full flex-row justify-between">
                <PineConeSVG />
                <div className="flex justify-center w-full items-center pr-[250px]">
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
                            onClick={NavigateToNext}
                            className="flex flex-row w-[360px] items-center justify-between rounded-lg mt-2 h-[56px] p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                            <div></div>
                            Next
                            <div className="arrow w-[16px] text-lg h-[24px] justify-center items-center flex">
                                <RightArrow />
                            </div>
                        </button>
                        <Toaster position="top-center" />
                        <div className="border border-solid border-grey-300 w-[360px] mt-6"></div>
                        <ButtonGoogle />
                        <ButtonMicrosoft />
                        <ButtonApple />
                        <div className="border border-solid border-grey-300 w-[360px] mt-10"></div>
                        <AlreSignedUp />
                        <p className="absolute mt-[100px] ml-[100px] text-slate-400">© 2023 Pinecone</p>
                    </div>
                </div>
                <GoogleSignIn />
            </div>
        </>
    )
};
