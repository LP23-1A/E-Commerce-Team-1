import { useState } from "react";
import { Calendar } from "./Icon/index";
import toast, { Toaster } from "react-hot-toast";
import { OrderFilters } from "./utils/OrderFilters";

export default function Datefilter({ setFiltereOrderData, order }: any) {

  const now = new Date();
  const today: number = now.getDate();
  const sevenDaysAgo = today - 7;
  const [buttonActive, setButtonActive] = useState(today);
  const values = OrderFilters.map(el => parseFloat(el.value));
  console.log(values, "values");


  const handleActiveButton = (dates: number) => {
    setButtonActive(dates);
    filterDates(dates);
  };

  const filterDates = (dates: number) => {
    const filtereOrderData = order.filter((el: any) => {
      const exactCreationDay = parseInt(el.createdAt.slice(8, 10));
      if (dates === today && exactCreationDay === today) {
        return true;
      } else if ((dates === sevenDaysAgo && exactCreationDay >= sevenDaysAgo && exactCreationDay <= today)) {
        return true;
      }
      return false;
    });

    if (filtereOrderData.length > 0) {
      setFiltereOrderData(filtereOrderData);
    } else {
      toast.error("There is no data for that selection");
      setFiltereOrderData([]);
    }
  };

  const filterByMonths = (month: any) => {
    const filteredOrderData = order.filter((el: any) => {
      const exactCreationMonth = parseInt(el.createdAt.slice(5, 7))
      return exactCreationMonth == month
    });
    if (filteredOrderData.length > 0) {
      setFiltereOrderData(filteredOrderData);
    } else {
      toast.error("There is no data for that selection");
      setFiltereOrderData([]);
    }
  }

  return (
    <div className="flex gap-[8px] pt-[34px] pl-[24px]">
      <button
        className="rounded-[8px] border-[#ECEDF0] border-[1px] py-[10px] px-[16px] text-[14px] bg-white"
        style={{
          backgroundColor: buttonActive == today ? "#18BA51" : "",
        }}
        onClick={() => handleActiveButton(today)}
      >
        Өнөөдөр
      </button>
      <button
        className="rounded-[8px] border-[#ECEDF0] border-[1px] py-[10px] px-[16px] text-[14px] bg-white"
        style={{
          backgroundColor: buttonActive == sevenDaysAgo ? "#18BA51" : "",
        }}
        onClick={() => handleActiveButton(sevenDaysAgo)}
      >
        7 хоног
      </button>

      <button
        className="flex items-center gap-[8px] rounded-[8px] border-[#ECEDF0] border-[1px] py-[12xp] px-[20px] text-[14px] bg-white">
        <Calendar />
        <select
          onChange={(event) => filterByMonths(event.target.value)}>
          <option value="">Сараар</option>
          {OrderFilters.map((el, i) => {            
            return <option
              value={el.value}
              key={i}>{el.month}
               month</option>;
          })}
        </select>
      </button>
      <Toaster position="top-center" />
    </div>
  );
}

