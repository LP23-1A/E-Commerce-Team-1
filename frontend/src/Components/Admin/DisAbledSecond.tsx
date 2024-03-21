import { Check } from "./Icon/index";
export default function DisAbledFirst() {
    return (
        <div className="flex justify-between flex-row border-solid border items-center p-[10px] rounded-xl" style={{ borderColor: '#ECEDF0' }}>
            <div className="flex items-center">
                <div className="w-[44px] h-[44px] p-[8px 16px] flex items-center justify-center">
                    <Check />
                </div>
                <h5 className="font-normal text-base">Add Your First Commodity</h5>
            </div>
            <button
                className="p-[10px] broder-solid border rounded-xl font-semibold text-slate-300"
                style={{ background: '#ECEDF0', }}
            >Add Product</button>
        </div>
    )
}