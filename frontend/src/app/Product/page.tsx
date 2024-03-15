"use client";
import { useEffect, useState } from "react";
import Laptop from "@/Components/Icon/Laptop.jpeg";
import Plus from "../../Components/Icon/Plus";
import Delete from "../../Components/Icon/Delete";
import Edit from "../../Components/Icon/Edit";
import headers from "../../Components/utils/Table";
import Filter from "../../Components/Filter";
import Sidebar from "@/Components/Sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import SuccessModalProduct from "@/Components/SuccessProductModal";


const api = "http://localhost:8000/product/get";
const api2 = "http://localhost:8000/product";

interface Items {
  _id: string;
  productName: string;
  productCode: string;
  price: number;
  category: string;
  subCategory: string;
  quantity: number;
  createdAt: number;
  updatedAt: number;
}
export default function Product() {
  const router = useRouter();
  const [data, setData] = useState<Items[]>([]);
  const [isSuccessProduct, setIsSuccessProduct] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Items[]>(api);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (productId: string) => {
    try {
      await axios.delete(`${api2}/${productId}`);
      const updatedData = data.filter((item) => item._id !== productId);
      setData(updatedData);
      console.log("deleted");
    } catch (error) {
      console.log("can't delete");
    }
  };

  useEffect(() => {
    const productAdded = localStorage.getItem("productAdded");
    if (productAdded === "true") {
      setIsSuccessProduct(true);
      localStorage.removeItem("productAdded");
      setTimeout(() => {
        setIsSuccessProduct(false);
      }, 2000);
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col gap-6 bg-gray-100 w-full h-screen px-4">
        <div className="flex gap-4 pt-6 items-center">
          <h1>Бүтээгдэхүүн</h1>
          <h1>Ангилал</h1>
        </div>
        <button
          className="bg-black w-[280px] h-[48px] text-white flex items-center p-4 justify-center gap-4 rounded-lg"
          onClick={() => router.push(`/AddProduct`)}
        >
          <Plus />
          <h1>Бүтээгдэхүүн нэмэх</h1>
        </button>
        <Filter />
        <div className="overflow-x-auto shadow-md rounded-lg">
          <div className="w-full max-h-[480px] overflow-y-auto bg-white">
            <table className="w-full text-sm text-left">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} scope="col" className="px-6 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((dat, index) => (
                  <tr key={index}>
                    <td className="w-4 p-4">
                      <input type="checkbox" className="w-5 h-5" />
                    </td>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={Laptop.src}
                        alt="Product Image"
                      />
                      <div className="ps-3 text-black">
                        <h1 className="font-semibold">{dat.productName}</h1>
                        <p className="font-normal text-gray-500">
                          {dat.productCode}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {dat.category && dat.subCategory
                        ? `${dat.category}, ${dat.subCategory}`
                        : dat.category || dat.subCategory}
                    </td>
                    <td className="px-6 py-4">
                      {dat.price !== null
                        ? dat.price.toLocaleString() + "₮"
                        : ""}
                    </td>
                    <td className="px-6 py-4">{dat.quantity}</td>
                    <td className="px-6 py-4">0</td>
                    <td className="px-6 py-4">
                      {dat.createdAt
                        ? new Date(dat.createdAt).toISOString().slice(0, 10)
                        : dat.updatedAt
                        ? new Date(dat.updatedAt).toISOString().slice(0, 10)
                        : ""}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="px-2 py-1 transition duration-300 transform hover:scale-125"
                        onClick={() => handleDelete(dat._id)}
                      >
                        <Delete />
                      </button>
                      <button
                        className="px-2 py-1 transition duration-300 transform hover:scale-125"
                        onClick={() =>
                          router.push(`/EditProduct?productId=${dat._id}`)
                        }
                      >
                        <Edit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isSuccessProduct && (
        <SuccessModalProduct setIsSuccessProduct={setIsSuccessProduct} />
      )}
    </div>
  );
}
