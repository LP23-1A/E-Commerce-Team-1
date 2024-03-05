import Plus from "./Icon/Plus";
import Category from "./Icon/Category"
import Vector from "./Icon/Vector"
import Search from "./Icon/Search"
export default function product() {
    const texts = [
        {
            svg: <Category />,
            text: "Ангилал",
            more: <Vector />
        },
        {
            svg: <Category />,
            text: "Ангилал",
            more: <Vector />
        },
        {
            svg: <Category />,
            text: "Ангилал",
            more: <Vector />
        }
    ]
    return (
        <div className="flex flex-col gap-6 bg-gray-100 w-full h-100vh px-6">
            <div className="flex gap-4 pt-6 items-center">
                <h1>Бүтээгдэхүүн</h1>
                <h1>Ангилал</h1>
            </div>
            <div className="bg-black w-[280px] h-[48px] text-white flex items-center p-4 justify-center gap-4 rounded-lg">
                <Plus />
                <h1>Бүтээгдэхүүн нэмэх</h1>
            </div>
            <div>
                <div className="flex gap-4">
                    {texts.map((data, ind) => (
                        <div key={ind} className="flex items-center justify-evenly w-full bg-white w-[145px] h-[40px] rounded-lg gap-4">{data.svg}
                            {data.text}
                            {data.more}</div>
                    ))}
                </div>
                <div className="flex w-[419px]">
                    <Search />
                    <input type="search" className="w-[419px] rounded-md" placeholder="Бүтээгдэхүүний нэр, SKU, UPC" />
                </div>
            </div>
        </div>
    )
}