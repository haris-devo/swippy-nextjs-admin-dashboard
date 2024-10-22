"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StepIndicator from "./StepIndicator";
import AdDesignStepMeta from "./meta/awareness/adDesignMeta/AdDesignStepMetaMain/AdDesginStepMeta";
import AudienceStepMeta from "./meta/awareness/AudienceStepMeta";
import BudgetStepMeta from "./meta/awareness/BudgetStepMeta";
import LaunchStepMeta from "./meta/awareness/LunchStepMeta";

const CampaignLayoutMeta = () => {
  const router = useRouter();
  const steps = [
    { step: "Ad design" },
    { step: "Audience" },
    { step: "Budget" },
    { step: "Launch" },
  ];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stepData, setStepData] = useState<Record<number, any>>({
    1: {},
    2: {},
    3: {},
    4: {},
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      router.push("/manage-ads");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const updateStepData = (data: any) => {
    setStepData((prevData) => ({
      ...prevData,
      [currentStep]: { ...prevData[currentStep], ...data },
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <AdDesignStepMeta data={stepData[1]} updateData={updateStepData} />
        );
      case 2:
        return (
          <AudienceStepMeta data={stepData[2]} updateData={updateStepData} />
        );
      case 3:
        return (
          <BudgetStepMeta data={stepData[3]} updateData={updateStepData} />
        );
      case 4:
        return (
          <LaunchStepMeta data={stepData[4]} updateData={updateStepData} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto h-auto max-w-screen-lg px-5 py-5">
      <StepIndicator steps={steps} currentStep={currentStep} />
      <div className="mt-8">{renderStepContent()}</div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="rounded bg-gray-200 px-4 py-2 text-gray-800 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep > steps.length}
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          {currentStep === steps.length ? "Finish" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default CampaignLayoutMeta;
