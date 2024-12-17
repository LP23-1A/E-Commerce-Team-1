import { useState } from "react";
import { GoldenStar, StarIcon } from "./Icon";
import CommentSection from "./Comment";
import "./Promotions/ButtonStyle.css";
import toast, { Toaster } from "react-hot-toast";

export default function Ratings() {
  const [comment, setComment] = useState("");
  const [afterComment, setAfterComment] = useState<String[]>([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleInput = (event: any) => {
    const value = event.target.value;
    setComment(value);
  };

  const handleSubmit = () => {
    const evaluation = { comment, rating };
    setAfterComment((afterComment) => [
      ...afterComment,
      JSON.stringify(evaluation),
    ]);
    setComment("");
    setRating(0);
  };

  const checkEmptyForms = () => {
    if (rating == 0 || comment == "") {
      toast("⭐ rating from 5 stars and text your comment");
      return;
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <h5 className="font-extrabold text-lg non-italic text-[#1D3178]">
        Increase the evaluation
      </h5>
      <div
        className="flex flex-col gap-[21px] rounded-lg bg-[#fff]"
        style={{ padding: "48px 24px" }}
      >
        <div className="flex flex-row gap-[20px] border-solid border-b-2 pb-[15px]">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={index}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(starValue)}
              >
                <span className="star">
                  {starValue <= (hover || rating) ? (
                    <GoldenStar />
                  ) : (
                    <StarIcon />
                  )}
                </span>
              </button>
            );
          })}
        </div>
        <input
          onChange={handleInput}
          value={comment}
          className="border-solid border-b-2 pb-[10px]"
          placeholder="write comment"
          type="text"
        />
        <div className="w-full flex items-end flex-col">
          <button
            onClick={checkEmptyForms}
            className="w-[135px] h-[39px] text-white rounded-sm bg-[#FB2E86]"
          >
            Evaluate
          </button>
        </div>
      </div>
      <CommentSection afterComment={afterComment} />
      <Toaster position="top-center" />
    </div>
  );
}
