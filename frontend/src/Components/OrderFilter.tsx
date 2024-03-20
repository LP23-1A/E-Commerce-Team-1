import { useState } from "react";
import { statesOfOrder } from "./utils/StatesOfOrder";
import useSWR from "swr";
import { Toaster, toast } from "react-hot-toast";

export default function OrderFilter() {
    const [selectedState, setSelectedState] = useState<string | null>(null);
    const fetcher = (url: string) => fetch(url).then((el) => el.json());
    const { data, error, isLoading }: any = useSWR("http://localhost:8000/order/get", fetcher);

    const handleButtonClick = (name: string) => {
        setSelectedState(name);
    };

    if (error) toast.error("cannot fetch orderData");

    return (
        <div>
            {isLoading && (
                <div>Waiting ... </div>
            )}
            {statesOfOrder.map((element, i) => (
                <button
                    key={i}
                    onClick={() => handleButtonClick(element)}
                    style={{
                        borderStyle: selectedState === element ? "solid" : "",
                        borderBottomWidth: selectedState === element ? "2px" : "",
                        borderColor: selectedState === element ? "#121316" : "",
                        fontWeight: selectedState === element ? "bold" : ""
                    }}
                    className="text-[14px] px-[16px] py-[20px] text-[#3F4145]"
                >
                    {element}
                </button>
            ))}
            <Toaster position="top-center" />
        </div>
    )
};
