"use client";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";

const api = "http://localhost:8000/order/get";
interface getOrder {
    amountPaid: number;
  createdAt: string;
}

ChartJS;
export default function Chart() {
  const [ChartData, setChartData]: any = useState({ datas: [], labels: [] });


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(api);
        const UpSalesData = {
          datas: [] as number[],
          labels: [] as string[],
        };
        res.data.orderData.map((e: getOrder) => {
          UpSalesData.datas.push(e.amountPaid);
          UpSalesData.labels.push(dayjs(e.createdAt).format("M/D"));
        });
        setChartData(UpSalesData);
      } catch (error) {
        console.error("Error", error);
      }
    }

    fetchData();
  }, []);
  console.log(ChartData)
  return (
    <div className="bg-[#fff] rounded-xl">
      <div className="flex items-center justify-between p-6">
        <h1>Борлуулалт</h1>
        <img className="w-[12px] h-[12px]" alt="" />
      </div>
      <div>
        {ChartData ? (
          <Bar
            style={{ maxWidth: "fit" }}
            data={{
              labels: ChartData.labels,
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "#000",
                  hoverBackgroundColor: "#EC2F73",
                  hoverBorderColor: "#EC2F73",
                  data: ChartData.datas,
                  borderRadius: 20,
                  borderWidth: 4,
                  borderSkipped: false,
                  barPercentage: 0.1,
                },
              ],
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}