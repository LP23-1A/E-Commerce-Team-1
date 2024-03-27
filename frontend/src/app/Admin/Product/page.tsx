"use client";
import { useEffect, useRef, useState } from "react";
import { Plus, Edit, Delete } from "@/Components/Admin/Icon/index";
import headers from "../../../Components/Admin/utils/Table";
import Filter from "../../../Components/Admin/Filter";
import Sidebar from "@/Components/Admin/Sidebar";
import { useRouter } from "next/navigation";
import axios from "axios";
import SuccessModalProduct from "@/Components/Admin/SuccessProductModal";
import { Toaster } from "react-hot-toast";
import { Items } from "@/Components/Admin/Interface/Product";

const api = "http://localhost:8000/product/get";
const api2 = "http://localhost:8000/product";

export default function Product() {
  const router = useRouter();
  const [data, setData] = useState<Items[]>([]);
  const [isSuccessProduct, setIsSuccessProduct] = useState(false);
  const [filteredData, setFilteredData] = useState<Items[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Items[]>(api);
        setData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (productId: string) => {
    try {
      await axios.delete(`${api2}/${productId}`);
      const updatedData = filteredData.filter((item) => item._id !== productId);
      setFilteredData(updatedData);
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
          onClick={() => router.push("/Admin/AddProduct")}
        >
          <Plus />
          <h1>Бүтээгдэхүүн нэмэх</h1>
        </button>
        <Filter
          {...{
            filteredData,
            data,
            setFilteredData,
            setData,
          }}
        />
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
                {filteredData &&
                  filteredData.map((dat, index) => (
                    <tr key={index}>
                      <td className="w-4 p-4">
                        <input type="checkbox" className="w-5 h-5" />
                      </td>
                      <td className="flex items-center px-6 py-4">
                        <img
                          className="w-10 h-10 rounded-full object-contain"
                          src={dat.images}
                          alt=""
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
                          ? String(new Date(dat.createdAt).toISOString()).slice(
                              0,
                              10
                            )
                          : dat.updatedAt
                          ? String(new Date(dat.updatedAt).toISOString()).slice(
                              0,
                              10
                            )
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
                            router.push(
                              `/Admin/EditProduct?productId=${dat._id}`
                            )
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
      <Toaster position="top-center" />
      {isSuccessProduct && (
        <SuccessModalProduct setIsSuccessProduct={setIsSuccessProduct} />
      )}
    </div>
  );
}
