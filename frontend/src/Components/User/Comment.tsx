import React from "react";
import { StarIcon } from "./Icon";

export default function CommentSection({ afterComment }: any) {
  const data = afterComment.map(JSON.parse);
  console.log(data);

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-row gap-[10px] items-center">
        <h5 className="font-extrabold text-lg non-italic text-[#1D3178]">
          Total Evaluations
        </h5>
        <div className="flex flex-row gap-[5px]">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>
      <div
        className="flex flex-col gap-[21px] rounded-lg bg-[#fff]"
        style={{ padding: "48px 24px" }}
      >
        {data.map((element: { comment: string; rating: number }, index: number) => (
          <div
            key={index}
            className="border-dashed border-b-2 pb-3 gap-[20px] flex flex-col"
          >
            <div className="flex flex-row gap-[10px]">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="star">
                  {index < element.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <div className="font-extrabold text-lg non-italic text-[#1D3178]">
              Some random names here
            </div>
            <div>{element.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
