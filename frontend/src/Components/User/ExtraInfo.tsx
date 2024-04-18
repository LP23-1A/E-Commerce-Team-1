"use client";
import { useState } from "react";
import { twoCategory } from "./utils/TwoCategory";
import AdditionalInfo from "./AdditionalInfo";
import Ratings from "./Ratings";

export default function ExtraInfo() {
  const [isAdditional, setIsAdditional] = useState(false);
  const [isEvaluation, setIsEvaluation] = useState(true);

  const handleAdditionalInfo = () => {
    setIsAdditional((preV) => !preV);
    setIsEvaluation(false);
  };

  const handleIsEvaluation = () => {
    setIsEvaluation((preV) => !preV);
    setIsAdditional(false);
  };

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ background: "#F9F8FE", padding: "20px" }}
    >
      <div className="w-8/12 h-fit">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-row gap-[20px]">
            {twoCategory.map((el, i) => (
              <button
                onClick={i === 0 ? handleAdditionalInfo : handleIsEvaluation}
                key={i}
                className={`font-extrabold text-2xl non-italic hover:bg-blue-400 ${
                  i === 0
                    ? isAdditional
                      ? "text-blue-600"
                      : ""
                    : isEvaluation
                    ? "text-blue-600"
                    : ""
                }`}
                style={{
                  color: "#151875",
                  textDecoration: "none",
                }}
              >
                {el}
              </button>
            ))}
          </div>
          {isAdditional && <AdditionalInfo />}
          {isEvaluation && <Ratings />}
        </div>
      </div>
    </div>
  );
}
