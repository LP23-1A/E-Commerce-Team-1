import { Calendar, DownArrow } from "./Icon/index";
export default function Datefilter(){
    return (
        <div className="flex gap-[8px] pt-[34px] pl-[24px]">
            <button className="rounded-[8px] border-white border-[1px] py-[10px] px-[16px] text-[14px] text-white bg-[#18BA51] drop-shadow-lg">Өнөөдөр</button>
            <button className="rounded-[8px] border-[#ECEDF0] border-[1px] py-[10px] px-[16px] text-[14px] bg-white">7 хоног</button>
            <button className="flex items-center gap-[8px] rounded-[8px] border-[#ECEDF0] border-[1px] py-[12xp] px-[20px] text-[14px] bg-white">
                <Calendar/>
                Сараар
                <DownArrow/>
            </button>
        </div>
    )
}