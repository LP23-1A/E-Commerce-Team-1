'use client'
import Logo from "../Logo/Logo";
import Bell from "../Logo/Bell";
import User from "../Logo/User";
import { useRouter } from "next/navigation";
export default function Navbar() {
    const router = useRouter();
    return (
        <div className="bg-black h-[48px] flex justify-between items-center p-4">
            <Logo />
            <div className="flex items-center">
                <Bell />
                <User />
                <p className="text-white cursor-pointer" onClick={() => { router.push("/user") }}>Username</p>
            </div>
        </div>
    );
}
