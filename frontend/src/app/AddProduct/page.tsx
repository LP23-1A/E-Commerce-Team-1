"use client";
import Arrow from "../../Components/Icon/Arrow";
import Image from "../../Components/Icon/Image";
import Add from "../../Components/Icon/Add";
import AddPro from "./AddPro";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import axios from "axios";

const api = "http://localhost:8000/product/create";

export default function AddProduct() {
  const [productName, setproductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = async () => {
    const formData = {
      productName: productName,
      price: price,
      description: description,
      quantity: quantity,
    };
    try {
      const res = await axios.post(api, formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col bg-gray-100 w-full h-screen">
        <button className="flex gap-10 pt-6 items-center bg-white p-4">
          <Arrow />
          <h1>Бүтээгдэхүүн нэмэх</h1>
        </button>
        <div className="flex">
          <div className="flex flex-col">
            <div className="bg-white w-[563px] h-[312px] p-4 m-8 rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h1>Бүтээгдэхүүний нэр</h1>
                  <input
                    value={productName}
                    onChange={(e) => setproductName(e.target.value)}
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
                    className="bg-gray-100 resize-none w-full h-[72px] text-#8B8E95 p-2 rounded-lg flex items-center"
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Барааны код</h1>
                  <input
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
                  <div className="w-[125px] h-[125px] rounded-xl border-dashed border-#D6D8DB border-[1px] flex justify-center items-center">
                    <Image />
                  </div>
                  <div className="w-[125px] h-[125px] rounded-xl border-dashed border-#D6D8DB border-[1px] flex justify-center items-center">
                    <Image />
                  </div>
                  <div className="w-[125px] h-[125px] rounded-xl border-dashed border-#D6D8DB border-[1px] flex justify-center items-center">
                    <Image />
                  </div>
                  <div className="flex justify-center items-center w-[125px] h-[125px]">
                    <Add />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-evenly bg-white w-[563px] h-[132px] p-4 m-8 rounded-lg">
              <div>
                <h1>Үндсэн үнэ</h1>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Үндсэн үнэ"
                  className="p-2 h-[56px] w-[249px]  bg-gray-100 rounded-lg"
                />
              </div>
              <div>
                <h1>Үлдэгдэл тоо ширхэг</h1>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="text"
                  placeholder="Үлдэгдэл тоо ширхэг"
                  className="p-2  h-[56px] w-[249px] bg-gray-100 rounded-lg"
                />
              </div>
            </div>
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <AddPro />
        </div>
      </div>
    </div>
  );
}
