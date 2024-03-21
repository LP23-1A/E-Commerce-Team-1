import { RemoveX, Approve, RightArrow } from "./Icon/index";
export default function SuccessModalTypeOfStore({ HandleAfter, HandleClose }: any) {
    return (
        <div className="w-full flex bg-green-400 absolute h-full justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
            <div className="w-[551px] h-fit rounded-lg bg-white p-[24px]">
                <button onClick={HandleClose} className="absolute ml-[480px] hover:bg-gray-100 w-fit h-fit p-[10px] rounded-lg transition-transform transform active:scale-95 duration-300 hover:scale-110">
                    <RemoveX />
                </button>
                <div className="w-[503px] h-[208px] p-[24px] rounded-lg gap-[24px] flex justify-center items-center flex-col">
                    <Approve />
                    <h5 className="font-normal text-sm" style={{ color: '#5E6166' }}>The sales category has been saved successfully</h5>
                    <button
                        onClick={HandleAfter}
                        className="w-[224px] gap-[10px] bg-black text-white text-sm font-semibold h-[36px] border-solid border rounded flex justify-center items-center transition-transform transform active:scale-95 duration-300 hover:scale-110">
                        Continue Configuration
                        <div className="w-[13.3px] h-[13.3px]">
                            <RightArrow />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
};