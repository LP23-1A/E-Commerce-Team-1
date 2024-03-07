import Add from "../../Components/Icon/Add";

export default function addPro({ handleSubmit, handleUpdate }: any) {
  return (
    <div className="flex items-center flex-col gap-[26px] w-[600px]">
      <div className="bg-white w-[575px] h-[232px] p-4 m-8 rounded-lg">
        <div className="flex flex-col h-full justify-center gap-6">
          <div className="flex flex-col gap-2">
            <h1>Ерөнхий ангилал</h1>
            <input
              type="text"
              placeholder="Сонгох"
              className="p-2 w-full h-[44px] bg-gray-100 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>Дэд ангилал</h1>
            <input
              type="text"
              placeholder="Сонгох"
              className="p-2 w-full h-[44px] bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-[575px] h-[240px] p-4 m-8 rounded-lg">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Төрөл</h1>
          <div className="flex items-center gap-6">
            <h1>Өнгө</h1>
            <Add />
          </div>
          <div className="flex items-center gap-6">
            <h1>Хэмжээ</h1>
            <Add />
          </div>
          <button className="border-[1px] border-gray-200 w-[130px] h-[36px] rounded-lg font-semibold">
            Төрөл нэмэх
          </button>
        </div>
      </div>
      <div className="bg-white w-[575px] h-[232px] p-4 m-8 rounded-lg">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">Таг</h1>
          <input
            type="text"
            placeholder="Таг нэмэх..."
            className="p-2 w-full h-[58px] bg-gray-100 rounded-lg"
          />
          <p className="text-gray-600">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
        </div>
      </div>
      <div className="flex gap-4 w-full p-4 justify-end">
        <button className="border-[1px] border-gray-400 w-[130px] h-[50px] rounded-lg font-semibold">
          Ноорог
        </button>
        <button
          className=" bg-black border-[1px] border-gray-200 w-[130px] h-[50px] rounded-lg font-semibold text-white"
          onClick={() => {
            handleSubmit();
            handleUpdate();
          }}
        >
          Нийтлэх
        </button>
      </div>
    </div>
  );
}
