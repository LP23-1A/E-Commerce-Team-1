"use client";
import { useState, useEffect } from "react";
import EditPro from "../EditProduct/EditPro";
import Sidebar from "@/Components/Sidebar";
import Arrow from "../../Components/Icon/Arrow";
import Image from "../../Components/Icon/Image";
import Add from "../../Components/Icon/Add";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const api = "http://localhost:8000/product/getOne";
const api2 = "http://localhost:8000/product";

export default function EditProduct() {
  const search = useSearchParams();
  const productId = search.get("productId");

  const router = useRouter();
  const imageArray = [1, 2, 3];
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productCode, setProductCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/${productId}`);
        const {
          productName,
          price,
          productCode,
          description,
          quantity,
          category,
          subCategory,
        } = response.data;
        setProductName(productName);
        setProductCode(productCode);
        setPrice(price);
        setDescription(description);
        setQuantity(quantity);
        setCategory(category);
        setSubCategory(subCategory);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      const data = {
        productName,
        productCode,
        price,
        description,
        quantity,
        category,
        subCategory,
      };
      await axios.put(`${api2}/${productId}`, data);
      console.log("Updated product:", productId);
    } catch (error) {
      console.log("Unable to update product:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col bg-gray-100 w-full h-full">
        <div className="flex gap-10 pt-6 items-center bg-white p-4">
          <button onClick={() => router.push("/Product")}>
            <Arrow />
          </button>
          <h1>Бүтээгдэхүүн нэмэх</h1>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <div className="bg-white w-[563px] h-[312px] p-4 m-8 rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h1>Бүтээгдэхүүний нэр</h1>
                  <input
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    type="name"
                    placeholder="Нэр"
                    className="p-2 w-full h-[44px] bg-gray-100 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Нэмэлт мэдээлэл</h1>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="area"
                    className="bg-gray-100 resize-none w-full h-[72px] p-2 rounded-lg flex items-center"
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Барааны код</h1>
                  <input
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                    type="text"
                    placeholder="#12345678"
                    className="p-2 w-full h-[44px] bg-gray-100 rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white w-[563px] h-[312px] p-4 m-8 rounded-lg">
              <div className="flex flex-col gap-8">
                <h1>Бүтээгдэхүүний зураг</h1>
                <div className="flex justify-around">
                  <div className="flex justify-center">
                    {imageArray.map((index) => (
                      <div
                        key={index}
                        className="w-[125px] h-[125px] rounded-xl border-dashed border-gray-300 border-2 flex justify-center items-center m-2"
                      >
                        <Image />
                      </div>
                    ))}
                  </div>
                  <button className="flex justify-center items-center w-[125px] h-[125px]">
                    <Add />
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex justify-evenly bg-white w-[563px] h-[132px] p-4 m-8 rounded-lg">
              <div>
                <h1>Үндсэн үнэ</h1>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Үндсэн үнэ"
                  className="p-2 h-[56px] w-[249px]  bg-gray-100 rounded-lg"
                />
              </div>
              <div>
                <h1>Үлдэгдэл тоо ширхэг</h1>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  placeholder="Үлдэгдэл тоо ширхэг"
                  className="p-2  h-[56px] w-[249px] bg-gray-100 rounded-lg"
                />
              </div>
            </div>
          </div>
          <EditPro
            {...{
              handleUpdate,
              category,
              setCategory,
              subCategory,
              setSubCategory,
            }}
          />
        </div>
      </div>
    </div>
  );
}
