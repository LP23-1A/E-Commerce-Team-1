import { useRef } from "react";

export default function ModalStoreSettings({
  onchange,
  setModalStore,
  buttonActive,
  SaveInputStore,
}: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const storeInput = () => {
    if (inputRef.current !== null) {
      localStorage.setItem("typeStore", JSON.stringify(inputRef.current.value));
    } else {
      console.log("cannot store input in local storage");
    }
  };    

  return (
    <div
      className="w-full flex bg-green-400 absolute h-full justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
    >
      <div className="w-[551px] h-[341px] rounded-lg bg-white p-[24px]">
        <p className="text-xl font-bold">
          what kinds of product do you want to sell ?
        </p>
        <div className="relative">
          <input
            ref={inputRef}
            onChange={(event) => onchange(event.target.value)}
            style={{
              backgroundColor: "#D6D8DB",
              width: "503px",
              height: "48px",
              padding: "8px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "8px",
              color: "black",
            }}
            type="text"
            placeholder="Choose what kind of store."
          />
        </div>
        <h5 className="font-normal text-sm" style={{ color: "#5E6166" }}>
          Reminder: you can change it any time.
        </h5>
        <div className="flex flex-row gap-[10px] absolute mt-[150px] ml-[320px]">
          <button
            onClick={() => setModalStore(false)}
            className="w-[84px] h-[36px] border-solid border rounded"
          >
            Close
          </button>
          <button
            onClick={() => {
              SaveInputStore();
              storeInput();
            }}
            style={{
              backgroundColor: buttonActive ? "black" : "white",
              color: buttonActive ? "white" : "black",
            }}
            className="w-[84px] h-[36px] border-solid border rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
