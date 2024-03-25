import React from "react";
import "../Promotions/ButtonStyle.css";
export default function ControlButton3({ nextPage, previousPage }: any) {
  return (
    <div className="absolute bottom-0 mb-[40px]">
      <div className="w-[67px] h-[16px] flex flex-row gap-[10px]">
        <button
          onClick={() => previousPage()}
          className="hoverRotate"
          style={{ borderColor: "#FB2E86", borderWidth: "1px" }}
        ></button>
        <button
          onClick={() => previousPage()}
          className="hoverRotate"
          style={{ borderColor: "#FB2E86", borderWidth: "1px" }}
        ></button>
        <button
          onClick={() => nextPage()}
          className="hoverRotate"
          style={{
            borderColor: "#FB2E86",
            borderWidth: "1px",
            background: "#FB2E86",
          }}
        ></button>
      </div>
    </div>
  );
}
