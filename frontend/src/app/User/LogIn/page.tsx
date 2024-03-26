import BreadCrumb from "@/Components/User/BreadCrumb";
import FormsLogin from "@/Components/User/FormsLogin";
import { useState } from "react";

export default function UserLogin() {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <BreadCrumb />
      <FormsLogin />
    </div>
  );
}
