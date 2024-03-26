import BreadCrumb from "@/Components/User/BreadCrumb";

export default function UserLogin() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <BreadCrumb />
      <div className="w-full h-[600px] flex flex-col justify-center items-center">
        <div className="w-3/12 bg-green-400 h-[400px] flex flex-col">
          <h2 className="text-center">Log In</h2>
          <h6 className="text-center">
            You can log in using the information below
          </h6>
          <div className="flex flex-col gap-[20px]">
            <input />
            <input />
          </div>
          <span>Forget my password</span>
          <button>Log In</button>
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
}
