"use client";
import React, { useState } from "react";
import { Image, Add } from "./Icon/index";

export function Aws({ handleImageUpload, images }: any) {
  const numberOfImages = 3;
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<null | number>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowModal(!showModal);
  };

  const handleImageInputChange = (e: any) => {
    handleImageUpload(e);
  };

  return (
    <div className="bg-white w-[563px] h-[312px] p-4 m-8 rounded-lg">
      <div className="flex flex-col gap-8">
        <h1>Бүтээгдэхүүний зураг</h1>
        <div className="flex justify-around">
          {[...Array(numberOfImages)].map((_, index) => (
            <div
              key={index}
              className="flex justify-center"
              onClick={() => handleImageClick(index)}
            >
              <div className="w-[125px] h-[125px] rounded-lg border-dashed border-gray-300 border-2 flex justify-center items-center m-2 relative">
                {selectedImageIndex === index && images[selectedImageIndex] ? (
                  <img
                    src={URL.createObjectURL(images[selectedImageIndex])}
                    alt={`Product Image ${index}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Image />
                )}
              </div>
            </div>
          ))}
          <button className="flex justify-center items-center w-[125px] h-[125px]">
            <Add />
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-[300px] h-[200px] bg-white rounded-lg flex  justify-center items-center">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleImageInputChange}
            />
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
