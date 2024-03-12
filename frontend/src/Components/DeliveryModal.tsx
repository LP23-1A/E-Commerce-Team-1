import { useRef } from "react";

const wayMethod = ['By Car 🚗', 'By tram 🚋', 'By Bus 🚌', 'By Bicycle🚲', 'By Walk 🚶🏾', 'Others ✨'];

export default function ModalDeliverySettings({ setModalDelivery, buttonActive }: any) {
    const selectedOptionRef = useRef<HTMLSelectElement>(null);

    const storeOption = () => {
        if (selectedOptionRef.current !== null) {
            localStorage.setItem('deliveryState', JSON.stringify(selectedOptionRef.current.value));
            setModalDelivery(false)
        } else {
            console.log('cannot pick user choice');            
        }
    };

    return (
        <div className="w-full flex bg-green-400 absolute h-full justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
            <div className="w-[551px] h-[341px] rounded-lg bg-white p-[24px]">
                <p className="text-xl font-bold">How do you handle your delivery state?</p>
                <div className="relative">
                    <input
                        style={{ backgroundColor: '#D6D8DB', width: '503px', height: '48px', padding: '8px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', color: 'black' }}
                        type="text"
                        placeholder="Choose Your delivery condition."
                    />
                    <select
                        className="border mt-[10px] w-full border-solid border-gray-300 bg-slate-100 p-2 rounded-lg"
                        ref={selectedOptionRef}
                    >
                        <option>Choose</option>
                        {wayMethod.map((el, i) => (
                            <option key={i} value={el}>{el}</option>
                        ))}
                    </select>
                </div>
                <h5 className="font-normal text-sm" style={{ color: '#5E6166' }}>Reminder: you can change it any time.</h5>
                <div className="flex flex-row gap-[10px] absolute mt-[120px] ml-[320px]">
                    <button
                        onClick={() => setModalDelivery(false)}
                        className="w-[84px] h-[36px] border-solid border rounded"
                    >Close</button>
                    <button
                        onClick={storeOption}
                        style={{ backgroundColor: buttonActive ? 'black' : 'white', color: buttonActive ? "white" : "black" }}
                        className="w-[84px] h-[36px] border-solid border rounded"
                    >Save</button>
                </div>
            </div>
        </div>
    );
};