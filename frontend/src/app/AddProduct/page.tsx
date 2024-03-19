"use client";
import { useState } from "react";
import AddPro from "./AddPro";
import Sidebar from "@/Components/Sidebar";
import Arrow from "../../Components/Icon/Arrow";
import Add from "../../Components/Icon/Add";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "../../Components/Icon/Image";

const api = "http://localhost:8000/product/create";

export default function AddProduct() {
  const router = useRouter();
  const imageArray = [1, 2, 3];
  const [click, setClick] = useState(false);
  const handler = () => {
    setClick(!click);
  };
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productCode, setProductCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = async (e: any) => {
    try {
      setImages((prev) => [...prev, e.target.files[0]]);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };
  const handleSubmit = async () => {
    if (!images.length) {
      return;
    }
    try {
      const urls = await axios.get("api/upload-image");
      const imageRes = await axios.put(urls.data?.signedUrl, images[0], {
        headers: {
          "Content-Type": images[0],
        },
      });
      const formData = {
        productName,
        price,
        description,
        productCode,
        quantity,
        category,
        subCategory,
        images: urls.data?.objectUrl,
      };
      const res = await axios.post(api, formData);
      localStorage.setItem("product", JSON.stringify([res]));
      console.log(res);
    } catch (error) {
      console.log(error);
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
                    type="text"
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
                        onClick={handler}
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
          <AddPro
            {...{
              handleSubmit,
              productName,
              productCode,
              price,
              description,
              category,
              quantity,
              subCategory,
              setCategory,
              setSubCategory,
            }}
          />
        </div>
      </div>
      {click && (
        <div className="fixed  w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-[300px] h-[200px] bg-white rounded-lg flex justify-center items-center">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => handleImageUpload(e)}
            />
            <button onClick={handler}>Upload</button>
          </div>
        </div>
      )}
    </div>
  );
}
