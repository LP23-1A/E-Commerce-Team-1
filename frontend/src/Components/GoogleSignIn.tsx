import { useState } from "react";
import GoogleSVG from "./SVG/Google";
import RemoveX from "./SVG/RemoveX";
import { useAuth0 } from "@auth0/auth0-react";
import useSWR from "swr";

export default function GoogleSignIn() {
    const { user } = useAuth0();
    const [display, setDisplay] = useState(true);
    const fetcher = (url: string) => fetch(url).then((el) => el.json);
    const { data }: any = useSWR("http://localhost:8000/user/getAllUsers", fetcher);
    // console.log(user, "this is user");

    const closeDisplay = () => {
        setDisplay((preV) => !preV)
    }

    const openDispley = () => {
        setDisplay(true)
    }

    if (!display) {        
        return (
            <>
                {
                    user && (
                        <div className="absolute top-0 right-0 mr-[40px] mt-[40px] border-solid border p-5 rounded-lg">
                            <button onClick={openDispley}>potential Email</button>
                        </div>
                    )
                }
            </>
        )
    };

    // const NavigateToDashboard = () => {        
    // }

    return (
        <>
            {user && (
                <div className="w-[500px] absolute right-0 mr-[40px] h-fit border border-solid mt-[14px] rounded-lg">
                    <div className="flex justify-between items-center border-solid border-b-2">
                        <div className="w-[48px] h-[50px] flex justify-center items-center"><GoogleSVG /></div>
                        <p className="font-bold text-sm" style={{ color: '#5F6368' }}>Sign in to Pinecone with Google</p>
                        <button onClick={closeDisplay} className="w-[48px] h-[50px] flex justify-center items-center"><RemoveX /></button>
                    </div>
                    <button className="h-[124px] w-full p-[20px] hover:bg-slate-100 transition-transform transform active:scale-95 duration-300 hover:scale-10">
                        <div className="flex flex-row items-center gap-[20px] p-[13px 0px 11px 0px] border-solid border-b-2 pb-4 mt-2">
                            <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={user?.picture} alt="" />
                            <div>
                                <p className="font-normal text-sm" style={{ color: '#3C4043' }}>{user?.name}</p>
                                <h6 className="font-normal text-xs" style={{ color: '#5F6368' }}>{user?.email}</h6>
                            </div>
                        </div>
                    </button>
                    <div className="flex justify-center items-center mb-5">
                        <button className="font-normal text-xs hover:underline-offset-4 hover:underline hover:text-blue-500 underline underline-offset-4" style={{ color: '#5F6368' }}>{ }more accounts</button>
                    </div>
                </div>
            )}
        </>
    )
}

