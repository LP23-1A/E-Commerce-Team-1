import Microsoft from "@/Components/SVG/Microsoft";
export default function ButtonMicrosoft() {
    return (
        <button className="flex flex-row text-blacl bg-slate-100 justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2 hover:rounded-full transition-transform transform active:scale-95 duration-300 ease-in-out hover:scale-110">
            <Microsoft />
            Register by Microsoft
        </button>
    )
}