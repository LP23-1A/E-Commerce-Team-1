import Search from "@/Components/Icon/Search";
import { useEffect, useState } from "react";
import Category from "./Icon/Category";
import { ByGenders } from "./utils/ByGenders";
import Date from "@/Components/Icon/Date";
import { ByHours } from "./utils/ByHours";
export default function filter({ filterByCategory, filterByHour }: any) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectTime, setTime] = useState(0);

  const handleFilter = (event: any) => {
    const valueCategory = event.target.value;
    setSelectedCategory(valueCategory);
    filterByCategory(valueCategory);
  };

  const manageHour = (event: any) => {
    const valueHour = event.target.value;
    // console.log('valueHour', valueHour)
    setTime(valueHour);
    filterByHour(valueHour);
  };

  const convertToTimeFormat = (time_number: number) => {
    if (time_number > 0) {
      const h = parseInt("" + time_number / 60.0);
      const m = time_number % 60;
      var return_str = h > 0 ? `${h} цаг ` : "";

      return m > 0 ? `${return_str} ${m} минут өмнө` : `${return_str} өмнө`;
    }

    return "";
  };

  useEffect(() => {
    console.log(selectTime, "test");
  });

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
          <Date />
          <select value={selectTime} onChange={manageHour}>
            <option value="0"> Бүртгэсэн цаг</option>
            {ByHours.map((el, i) => (
              <option className="text-black" key={i} value={el}>
                {convertToTimeFormat(el)}
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
