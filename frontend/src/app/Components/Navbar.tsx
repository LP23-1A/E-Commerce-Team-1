import Logo from "../Logo/Logo";
import Bell from "../Logo/Bell";
import User from "../Logo/User";
export default function Navbar() {
    return (
        <div className="bg-black h-[48px] flex justify-between items-center p-4">
            <Logo />
            <div className="flex items-center">
                <Bell />
                <User />
                <p className="text-white">Username</p>
            </div>
        </div>
    );
}
