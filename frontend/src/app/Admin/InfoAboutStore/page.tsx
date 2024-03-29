"use client";
import React, { useState } from "react";
import FirstStepOfSignUp from "@/Components/Admin/FirstStepOfSignUp";
import SecondStepOfSignUp from "@/Components/Admin/SecondStepOfSignUp";
import ThirdStepOfSignUp from "@/Components/Admin/ThirdStepOfSignUp";

export default function InfoAboutStore() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };


  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FirstStepOfSignUp nextStep={nextStep} />;
      case 2:
        return <SecondStepOfSignUp nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <ThirdStepOfSignUp prevStep={prevStep} />;
      default:
        return <FirstStepOfSignUp nextStep={nextStep} />;
    }
  };

  return <div>{renderStep()}</div>;
}
