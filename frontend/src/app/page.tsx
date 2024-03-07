'use client'
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "../Components/Sidebar";

const notify = () => toast('nice job')

export default function Home() {
  return (
    <div>
      <button onClick={notify}>Click me</button>
      {/* <Sidebar />    */}
    </div>
  )
}
