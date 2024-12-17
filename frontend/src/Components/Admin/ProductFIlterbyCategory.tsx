import { Category, Vector } from "./Icon/index";
import { ByGenders } from "./utils/ByGenders";

export default function ProductFilterByCategory({ selectedCategory, onchange }: any) {
    return (
        <div className="flex items-center justify-around bg-white w-[145px] h-[40px] rounded-lg cursor-pointer">
            <Category />
            <select onChange={onchange} value={selectedCategory}>
                <option value="">Ангилал</option>
                {ByGenders.map((el, i) =>
                    <option className="text-black" key={i}>{el}</option>
                )}
                <Vector />
            </select>
        </div>
    )
}
