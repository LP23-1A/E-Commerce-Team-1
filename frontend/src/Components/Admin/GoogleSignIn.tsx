import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import React, { Toaster, toast } from "react-hot-toast";
import { Google, RemoveX } from "./Icon/index";
import useSWR from "swr";
import { fetchAllAdmins } from "./Api_Admin/getAllUsers";

export default function GoogleSignIn() {
  const { user } = useAuth0();
  const [display, setDisplay] = useState(true);
  const { data, error } = useSWR("/user/getAllUsers", fetchAllAdmins);
  const allAdmins = data?.allUsers;
  const arrayUser = [user];
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch user data");
      console.error("Failed to fetch user data:", error);
    }
  }, [error]);

  const closeDisplay = () => {
    setDisplay(false);
  };

  const navigateToDashboard = () => {
    try {
      if (!allAdmins || !Array.isArray(allAdmins))
        throw new Error("Invalid User");
      for (const element of allAdmins) {
        if (element.email === user?.email && element.userName === user?.name) {
          toast.loading("Processing ... ");
          setTimeout(() => {
            router.push(`/Admin/DashBoard/${element._id}`);
            toast.dismiss();
          }, 1000);
        }
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  if (!display) return null;

  return (
    <>
      {user &&
        arrayUser.map((el, i) => (
          <div
            key={i}
            className="w-[400px] absolute right-0 mr-[40px] h-fit border border-solid mt-[14px] rounded-lg"
          >
            <Toaster position="top-center" />
            <div className="flex justify-between items-center border-solid border-b-2">
              <div className="w-[48px] h-[50px] flex justify-center items-center">
                <Google />
              </div>
              <p className="font-bold text-sm" style={{ color: "#5F6368" }}>
                Sign in to Pinecone with Google
              </p>
              <button
                onClick={closeDisplay}
                className="w-[48px] h-[50px] flex justify-center items-center"
              >
                <RemoveX />
              </button>
            </div>
            <button
              onClick={navigateToDashboard}
              className="h-[124px] w-full p-[20px] hover:bg-slate-100 transition-transform transform active:scale-95 duration-300 hover:scale-10"
            >
              <div className="flex flex-row items-center gap-[20px] p-[13px 0px 11px 0px] border-solid border-b-2 pb-4 mt-2">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  src={el?.picture}
                  alt=""
                />
                <div>
                  <p
                    className="font-normal text-sm"
                    style={{ color: "#3C4043" }}
                  >
                    {el?.name}
                  </p>
                  <h6
                    className="font-normal text-xs"
                    style={{ color: "#5F6368" }}
                  >
                    {el?.email}
                  </h6>
                </div>
              </div>
            </button>
            <div className="flex justify-center items-center mb-5">
              <button
                className="font-normal hover:underline text-xs underline-offset-4"
                style={{ color: "#5F6368" }}
              >
                {arrayUser.length} more accounts
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
