'use client'
import Sidebar from "@/Components/Sidebar";
import CicleSvG from "@/Components/SVG/Circle";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SuccessModalTypeOfStore from "@/Components/SuccessModal";
import ModalStoreSettings from "@/Components/ModalStore";
import DisAbledFirst from "@/Components/DisAbledFirst";
import DisAbledSecond from "@/Components/DisAbledSecond";
import ModalDeliverySettings from "@/Components/DeliveryModal";
import DisAbledThird from "@/Components/DisabledThird";

export default function Settings() {
  const [modalStore, setModalStore] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [inputStore, setInputStore] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [modalDelivery, setModalDelivery] = useState(false)
  const productData = localStorage.getItem('product');
  const valueOfTypeStore = localStorage.getItem('typeStore');
  const deliveryState = localStorage.getItem('deliveryState');
  const router = useRouter();

  useEffect(() => {
    const isActive = inputStore !== ""
    setButtonActive(isActive)
  }, [inputStore]);

  const SaveInputStore = () => {
    if (inputStore === "") {
      toast.error('The form must be filled')
    } else {
      setIsSuccess(true);
      setModalStore(false);
    }
  };

  const HandleAfter = () => {
    setIsSuccess(false);
    setNextStep(true);
  };

  const HandleClose = () => {
    setIsSuccess(false);
  };

  return (
    <div className="flex flex-row">
      <Sidebar />

      {isSuccess && (
        <SuccessModalTypeOfStore HandleClose={HandleClose} HandleAfter={HandleAfter} />
      )}
      <div className="w-full flex flex-col h-full mt-5 items-center">
        <div className="w-[729px] p-[32px] rounded-xl border-solid border">
          <p className="font-semibold text-lg text-black">Create Profile of Store</p>
          <div className="mt-[10px] flex flex-col gap-[20px]">
            {nextStep || valueOfTypeStore
              ? <DisAbledFirst />
              : <div className="flex justify-between flex-row border-solid border items-center p-[10px] rounded-xl" style={{ borderColor: '#ECEDF0' }}>
                <div className="flex items-center">
                  <div className="w-[44px] h-[44px] p-[8px 16px] flex items-center justify-center">
                    <CicleSvG />
                  </div>
                  <h5 className="font-normal text-base">Choose what kind of store</h5>
                </div>
                <button onClick={() => setModalStore(true)} className="p-[10px] broder-solid border rounded-xl font-semibold text-sm">Type of Store</button>
              </div>
            }

            {productData
              ? <DisAbledSecond />
              : <div className="flex justify-between flex-row border-solid border items-center p-[10px] rounded-xl" style={{ borderColor: '#ECEDF0' }}>
                <div className="flex items-center">
                  <div className="w-[44px] h-[44px] p-[8px 16px] flex items-center justify-center">
                    <CicleSvG />
                  </div>
                  <h5 className="font-normal text-base">Add your first commodity</h5>
                </div>
                <button onClick={() => router.push('/AddProduct')} className="p-[10px] broder-solid border rounded-xl font-semibold text-sm">Add Product</button>
              </div>
            }

            {deliveryState
              ? <DisAbledThird />
              : <div className="flex justify-between flex-row border-solid border items-center p-[10px] rounded-xl" style={{ borderColor: '#ECEDF0' }}>
                <div className="flex items-center">
                  <div className="w-[44px] h-[44px] p-[8px 16px] flex items-center justify-center">
                    <CicleSvG />
                  </div>
                  <h5 className="font-normal text-base">Configure Delivery State</h5>
                </div>
                <button onClick={() => setModalDelivery(true)} className="p-[10px] broder-solid border rounded-xl font-semibold text-sm">Adjust Distribution</button>
              </div>
            }

          </div>
          <Toaster position="top-center" />
        </div>
      </div>
      {
        modalStore && (
          <ModalStoreSettings onchange={setInputStore} setModalStore={setModalStore} buttonActive={buttonActive} SaveInputStore={SaveInputStore} />
        )
      }
      {
        modalDelivery && (
          <ModalDeliverySettings buttonActive={buttonActive} setModalDelivery={setModalDelivery} />
        )
      }
    </div>
  )
};