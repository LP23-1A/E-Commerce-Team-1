"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { authenticateInputs } from "./Functions/ValidInputs";

export default function FormsLogin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target.value;
    return valueEmail;
  };

  const inputPassWord = (event: ChangeEvent<HTMLInputElement>) => {
    const valuePassWords = event.target.value;
    return valuePassWords;
  };

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  useEffect(() => {
    var handleClick = (event: any) => {
      if (event.key === "Enter") {
        authenticateInputs(emailRef.current?.value, passwordRef.current?.value);
      }
    };

    document.addEventListener("keydown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  }, [authenticateInputs(emailRef.current?.value, passwordRef.current?.value)]);

  return (
    <div className="w-full h-[600px] flex flex-col justify-center items-center">
      <div
        className="w-fit h-fit flex flex-col gap-[21px]"
        style={{
          boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.10)",
          padding: "24px 32px",
        }}
      >
        <h2 className="text-center font-extrabold text-3xl text-blackq">
          Log In
        </h2>
        <h6
          className="text-center text-base font-normal"
          style={{ color: "#9096B2" }}
        >
          You can log in giving the required information below
        </h6>
        <div className="flex flex-col gap-[20px]">
          <input
            ref={emailRef}
            onChange={inputEmail}
            placeholder="email"
            className="border-solid rounded-sm border-2 w-[432px] h-[52px]"
            style={{ borderColor: "#C2C5E1" }}
          />
          <div className="relative">
            <input
              onChange={inputPassWord}
              ref={passwordRef}
              placeholder="password"
              type={isVisible ? "text" : "password"}
              className="border-solid rounded-sm border-2 w-[432px] h-[52px]"
              style={{ borderColor: "#C2C5E1" }}
            />
            <button
              className="absolute ml-[-25px] mt-[15px]"
              onClick={toggleVisibility}
            >
              {isVisible ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>
        <span
          className="text-center text-base font-normal"
          style={{ color: "#9096B2" }}
        >
          Forget my password
        </span>
        <button
          onClick={() => {
            authenticateInputs(
              emailRef.current?.value,
              passwordRef.current?.value
            );
          }}
          className="text-center text-base font-normal border-solid rounded w-[432px] h-[52px] text-white hover:scale-110 duration-300"
          style={{ background: isFormFilled ? "#FB2E86" : "grey" }}
        >
          Log In
        </button>
        <span
          className="text-center text-base font-normal"
          style={{ color: "#9096B2" }}
        >
          Sign Up
        </span>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
