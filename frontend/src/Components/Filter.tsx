import Search from "@/components/Icon/Search";
import texts from "@/components/utils/Texts";
export default function filter() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-4">
        {texts.map((data, ind) => (
          <div
            key={ind}
            className="flex items-center justify-around bg-white w-[145px] h-[40px] rounded-lg"
          >
            {data.svg}
            {data.text}
            {data.more}
          </div>
        ))}
      </div>
      <div className="relative flex items-center">
        <div className="absolute pl-2">
          <Search/>
        </div>
        <input
          type="search"
          className="w-[419px] h-[40px] p-4 rounded-lg bg-white pl-12 text-#8B8E95"
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC."
        />
      </div>
    </div>
  );
}
