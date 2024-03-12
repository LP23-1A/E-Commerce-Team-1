import { useAuth0 } from "@auth0/auth0-react";
import Apple from "@/components/SvG/Apple";
export default function ButtonApple() {
    const { loginWithRedirect } = useAuth0()
    return (
        <button onClick={() => loginWithRedirect()} className="flex flex-row text-blacl bg-slate-100 justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2 hover:rounded-full transition-transform transform active:scale-95 duration-300 ease-in-out hover:scale-110">
            <Apple />
            Register by Apple
        </button>
    )
}