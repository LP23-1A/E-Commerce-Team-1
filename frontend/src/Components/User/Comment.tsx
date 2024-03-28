import React, { useEffect, useState } from "react";
import { GoldenStar, StarIcon } from "./Icon";

export default function CommentSection({ afterComment }: any) {
  const data = afterComment.map(JSON.parse);
  const [stars, setStars] = useState(0);

  useEffect(() => {    
    let totalStars = 0;
    data.forEach((element: any) => {
      totalStars += element.rating;
    });
    setStars(totalStars);
  }, [afterComment]);

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-row gap-[10px] items-center">
        <h5 className="font-extrabold text-lg non-italic text-[#1D3178]">
          Total Evaluations
        </h5>
        <div className="flex flex-row gap-[5px] items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
          <div className="font-extrabold text-sm text-[#5A5C7E]">({stars})</div>
        </div>
      </div>
      <div
        className="flex flex-col gap-[21px] rounded-lg bg-[#fff]"
        style={{ padding: "48px 24px" }}
      >
        {data.map(
          (element: { comment: string; rating: number }, index: number) => (
            <div
              key={index}
              className="border-dashed border-b-2 pb-3 gap-[20px] flex flex-col"
            >
              <div className="flex flex-row gap-[10px]">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="star">
                    {index < element.rating ? <GoldenStar /> : <StarIcon />}
                  </span>
                ))}
              </div>
              <div className="font-extrabold text-lg non-italic text-[#1D3178]">
                Some random names here
              </div>
              <div>{element.comment}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
