import { useRef, useState } from "react";
import { AtomIcon, StarIcon } from "./Icon";
import CommentSection from "./Comment";
import "./Promotions/ButtonStyle.css";
import toast from "react-hot-toast";

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
      toast.error("please fill in the given forms");
      return false
    }
    return true
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
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
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
            onClick={() => {
              handleSubmit();
              checkEmptyForms();
            }}
            className="w-[135px] h-[39px] text-white rounded-sm bg-[#FB2E86]"
          >
            Evaluate
          </button>
        </div>
      </div>
      <CommentSection afterComment={afterComment} />
    </div>
  );
}
