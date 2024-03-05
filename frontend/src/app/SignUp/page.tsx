import Google from "@/Components/SVG/Google";
import Microsoft from "@/Components/SVG/Microsoft";
import Apple from "@/Components/SVG/Apple";
import PineConeSVG from "@/Components/SVG/PineCone";

export default function SignUp() {
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
                        <input className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="Email" type="text" />
                    </div>
                    <div className="w-[360xp] h-[88px] flex flex-col gap-4 mt-2">
                        <p className="font-normal text-base text-black">Your Name</p>
                        <input className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg" placeholder="Name" type="text" />
                    </div>
                    <button className="flex flex-row text-white bg-black w-[360px] items-center justify-between rounded-lg mt-2 h-[56px] p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110">
                        <div></div>
                        Next
                        <div className="arrow w-[24px] text-lg h-[24px] justify-center items-center flex">&#8594;</div>
                    </button>
                    <div className="border border-solid border-grey-300 w-[360px] mt-6"></div>
                    <button className="flex flex-row text-blacl bg-slate-100 justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2 hover:rounded-full transition-transform transform active:scale-95 hover:scale-110 duration-300 ease-in-out ">
                        <Google />
                        Register by Google
                    </button>
                    <button className="flex flex-row text-blacl bg-slate-100 justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2 hover:rounded-full transition-transform transform active:scale-95 duration-300 ease-in-out hover:scale-110">
                        <Microsoft />
                        Register by Microsoft
                    </button>
                    <button className="flex flex-row text-blacl bg-slate-100 justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2 hover:rounded-full transition-transform transform active:scale-95 duration-300 ease-in-out hover:scale-110">
                        <Apple />
                        Register by Apple
                    </button>
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

