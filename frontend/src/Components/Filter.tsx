import Search from "@/Components/Icon/Search";
import { useState } from "react";
import Category from "./Icon/Category";
import { ByGenders } from "./utils/ByGenders";
import DateIcon from "@/Components/Icon/Date";
import { ByDates } from "./utils/ByDates";
export default function filter({ filterByCategory, filterByHour }: any) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTime, setSelectedTime] = useState(0);

  const handleFilter = (event: any) => {
    const valueCategory = event.target.value;
    setSelectedCategory(valueCategory);
    filterByCategory(valueCategory);
  };

  const manageHour = (event: any) => {
    const valueHour = event.target.value;
    setSelectedTime(valueHour);
    filterByHour(valueHour);    
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-4">
        <div className="flex items-center justify-around bg-white w-[145px] h-[40px] rounded-lg cursor-pointer">
          <Category />
          <select value={selectedCategory} onChange={handleFilter}>
            <option value="">Ангилал</option>
            {ByGenders.map((el, i) => (
              <option className="text-black" key={i}>
                {el}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-around bg-white w-[145px] h-[40px] rounded-lg cursor-pointer">
          <DateIcon />
          <select value={selectedTime} onChange={manageHour}>
            <option value="0">By Date</option>
            {ByDates.map((el, i) => (
              <option className="text-black" key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="relative flex items-center">
        <div className="absolute pl-2">
          <Search />
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
