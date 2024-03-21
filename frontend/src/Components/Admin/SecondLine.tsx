export default function SecondLine() {
    return (
        <div className="flex justify-center">
            <div className="w-[792px] h-[76px] p-[0, 24px] mt-[50px]">
                <div className="border border-solid border-grey-300 w-[680px] absolute mt-[16px] ml-[39px] z-[-1]"></div>
                <div className="border border-solid border-black w-[340px] absolute mt-[16px] ml-[39px] z-[-1]"></div>
                <ul className="flex flex-row bg-slate-40 justify-between">
                    <div className="flex justify-center flex-col items-center gap-[8px]">
                        <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">&#x2713;</p>
                        <li className="step step-primary">Name of Store</li>
                    </div>
                    <div className="flex justify-center flex-col items-center gap-[8px]">
                        <p className="w-[36px] h-[36px] bg-black rounded-full text-white flex justify-center items-center">2</p>
                        <li className="step step-primary">Own Region</li>
                    </div>
                    <div className="flex justify-center flex-col items-center gap-[8px]">
                        <p className="w-[36px] h-[36px] bg-gray-300 rounded-full text-black flex justify-center items-center">3</p>
                        <li className="step step-primary">Additional Information</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}