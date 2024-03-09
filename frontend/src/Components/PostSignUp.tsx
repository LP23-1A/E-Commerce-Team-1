import SignUp from "@/app/SignUp/page";

export default function PostSignUp() {
    const backEndOfSignUp = "http://localhost:8000/user/postUser";
    return (
        <div>
            <SignUp backEndOfSignUp={backEndOfSignUp} />
        </div>
    )
}