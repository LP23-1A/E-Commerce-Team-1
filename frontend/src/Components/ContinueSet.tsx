import MainPic from "@/Components/Icon/MainPic";
import Vector from "./Icon/Vector";
import Floor from "@/Components/Icon/Floor";

export default function ContinueSet() {
  return (
    <div className="w-[821px] h-[290px]">
      <div className="flex gap-16 justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <MainPic />
          <Floor />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl">Харуулах сүүлийн үеийн мэдээлэл алга</h1>
            <h3 className="text-sm flex items-center">
              Та мэдээлэл харахын тулд мэдээллээ тохируулж дуусгана уу.
            </h3>
          </div>
          <button className="flex gap-3 items-center bg-black text-white px-3 py-3 rounded-xl">
            Тохиргоог үргэлжлүүлэх
            <Vector />
          </button>
        </div>
      </div>
    </div>
  );
}
