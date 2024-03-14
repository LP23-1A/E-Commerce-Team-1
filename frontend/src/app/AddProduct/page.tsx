"use client";
import { useState } from "react";
import AddPro from "./AddPro";
import Sidebar from "@/Components/Sidebar";
import Arrow from "../../Components/Icon/Arrow";
import Image from "../../Components/Icon/Image";
import Add from "../../Components/Icon/Add";
import { useRouter } from "next/navigation";
import axios from "axios";

const api = "http://localhost:8000/product/create";
type SignedUrls = {
  uploadUrls: string[];
  accessUrls: string[];
};
export async function UploadImage() {
  const requestUrl = `http://localhost:8000/product/create`;
  const response = await fetch(requestUrl, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  return data as SignedUrls;
}

export default function AddProduct() {
  const [show, setShow] = useState(false);
  const click = () => {
    setShow(!show);
  };
  const imageArray = [1, 2, 3];

  const router = useRouter();
  const [productName, setproductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [images, setImages] = useState<File>();

  const handleSubmit = async () => {
    const formData = {
      productName: productName,
      price: price,
      description: description,
      quantity: quantity,
      category: category,
      subCategory: subCategory,
    };
    try {
      const res = await axios.post(api, formData);
      localStorage.setItem("product", JSON.stringify([res]));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpload = async () => {
    const { uploadUrls, accessUrls } = await UploadImage(images.length);
    console.log(uploadUrls, accessUrls);
    await Promise.all(
      uploadUrls.map((url, index) => {
        return axios.put(url, images[index], {
          headers: {
            "Content-Type": (images[index] as File).type,
          },
        });
      })
    );
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
                    className="bg-gray-100 resize-none w-full h-[72px] p-2 rounded-lg flex items-center"
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
                  <div className="flex justify-center" onClick={click}>
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
          <AddPro
            {...{
              handleSubmit,
              productName,
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
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col justify-center items-center bg-white w-[275px] h-[184px] rounded-lg shadow-lg font-semibold text-center">
            <p onClick={click}>sdaf</p>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
}
