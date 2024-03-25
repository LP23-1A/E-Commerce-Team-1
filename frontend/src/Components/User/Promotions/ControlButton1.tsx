export default function ControlButton1({nextPage, previousPage}:any) {
    return (
        <div className="absolute bottom-0 mb-[40px]">
            <div className="w-[67px] h-[16px] flex flex-row gap-[10px]">
                <button onClick={nextPage} className="w-[10px] h-[10px] origin-center rotate-45" style={{borderColor:"#FB2E86", borderWidth:"1px", background:"#FB2E86"}}></button>
                <button onClick={nextPage} className="w-[10px] h-[10px] origin-center rotate-45" style={{borderColor:"#FB2E86", borderWidth:"1px"}}></button>
                <button onClick={nextPage} className="w-[10px] h-[10px] origin-center rotate-45" style={{borderColor:"#FB2E86", borderWidth:"1px"}}></button>
            </div>            
        </div>
    )
};