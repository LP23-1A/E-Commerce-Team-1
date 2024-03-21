import { useState } from "react";
import { useRef, useState } from "react";
import Category from "./Icon/Category";
import { ByGenders } from "./utils/ByGenders";
import DateIcon from "./Icon/Date";
import { ByDates } from "./utils/ByDates";
import Search from "./Icon/Search";
import toast from "react-hot-toast";

export default function filter({ data, setFilteredData, filteredData }: any) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTime, setSelectedTime] = useState(0);

  const filterByCategory = (category: string) => {
    let filteredData;
    if (category === "All") {
      setFilteredData(data);
    } else {
      filteredData = data.filter((el: any) => el.category === category);
      if (filteredData.length > 0) {
        setFilteredData(filteredData);
      } else {
        toast.error("There is no data for that category");
        setFilteredData([]);
      }
    }
  };

  const filterByDates = (selectedHour: any) => {
    const now = new Date();
    const today = now.getDate();
    const yesterDay = today - 1;
    const twoDaysAgo = today - 2;

    const filteredData = data.filter((el: any) => {
      const exactCreationDay = parseInt(el.createdAt.slice(8, 10));
      if (selectedHour == 0 && exactCreationDay === today) {
        return true;
      } else if (selectedHour == 1 && exactCreationDay === yesterDay) {
        return true;
      } else if (selectedHour == 2 && exactCreationDay == twoDaysAgo) {
        return true;
      }
      return false;
    });
    if (filteredData.length > 0) {
      setFilteredData(filteredData);
    } else {
      toast.error("There is no data for that");
      setFilteredData([]);
    }
  };

  const handleSortByPrice = (type: string) => {
    const sortedData = [...filteredData];

    sortedData.sort((a, b) => {
      if (type === "lowToHigh") {
        return a.price - b.price;
      } else if (type === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredData(sortedData);
  };
  const handlePriceChange = (e: { target: { value: any } }) => {
    const Option = e.target.value;
    handleSortByPrice(Option);
  };

  const handleSearch = (productName: string) => {
    const filtered = data.filter((item: { productName: string }) =>
      item.productName.toLowerCase().includes(productName.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleInputChange = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };

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

        <div>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handlePriceChange}
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
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
          type="search"
          className="w-[419px] h-[40px] p-4 rounded-lg bg-white pl-12 text-#8B8E95"
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
