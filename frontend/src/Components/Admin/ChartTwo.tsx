"use client";
import { Chart as ChartJS, plugins } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS;

export default function Chartver() {

  return (
    <div className="bg-[#fff] rounded-xl ">
      <div className="flex items-center justify-between p-6">
        <h1>Идэвхтэй бүс нутаг</h1>
        <img className="w-[12px] h-[12px]"  alt="" />
      </div>
      <div>
        <Bar
          style={{ maxWidth: "fit" }}
          data={{
            labels: ["Улаанбаатар", "Дархан ", "Эрдэнэт ", "Бусад"],
            datasets: [
              {
                indexAxis: "y",
                label: "  My First dataset",
                backgroundColor: "#000",
                hoverBackgroundColor: "#EC2F73",
                hoverBorderColor: "#EC2F73",
                data: [300, 225, 370, 225],
                borderRadius: 40,
                borderWidth: 1,
                borderSkipped: false,
                barPercentage: 0.3,
                categoryPercentage: 0.8,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}