import { useRef, useState } from "react";
import Category from "./Icon/Category";
import { ByGenders } from "./utils/ByGenders";
import DateIcon from "./Icon/Date";
import { ByDates } from "./utils/ByDates";
import Search from "./Icon/Search";
import Dollar from "./Icon/Dollar";
const sortByPrice = ["Low To High", "High To Low"];

export default function filter({
  filterByCategory,
  filterByDates,
  sortByPriceStatus,
  searchByName,
}: any) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTime, setSelectedTime] = useState(0);
  const [chosenPrice, setChosenPrice] = useState("");
  const [input, setInput] = useState("");

  const handleFilter = (event: any) => {
    const valueCategory = event.target.value;
    setSelectedCategory(valueCategory);
    filterByCategory(valueCategory);
  };

  const manageHour = (event: any) => {
    const valueHour = event.target.value;
    setSelectedTime(valueHour);
    filterByDates(valueHour);
  };

  const convertToTimeFormat = (time_date: number) => {
    if (time_date == 0) {
      var formattedDate = String(time_date) + "Today";
      return formattedDate.slice(1);
    } else if (time_date == 1) {
      var formattedDate = String(time_date) + "a day ago";
      return formattedDate.slice(1);
    } else if (time_date == 2) {
      var formattedDate = String(time_date) + " days ago";
      return formattedDate;
    }
  };

  const controlPrice = (event: any) => {
    const valuePrice = event.target.value;
    setChosenPrice(valuePrice);
    sortByPriceStatus(valuePrice);
  };

  function inputChange(event: any) {
    setInput(event.target.value);
    searchByName(event.target.value);
  }

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
          <Dollar />
          <select value={chosenPrice} onChange={controlPrice}>
            <option>Price</option>
            {sortByPrice.map((el, i) => (
              <option className="text-black" value={el} key={i}>
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
          value={input}
          onChange={inputChange}
          type="search"
          className="w-[419px] h-[40px] p-4 rounded-lg bg-white pl-12 text-#8B8E95"
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC."
        />
      </div>
    </div>
  );
}
