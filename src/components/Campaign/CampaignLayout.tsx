"use client";
import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import AdDesignStep from "./Snapchat/awareness/adDesign/AdDesginStep";
import AudienceStep from "./Snapchat/awareness/AudienceStep";
import BudgetStep from "./Snapchat/awareness/BudgetStep";
import LaunchStep from "./Snapchat/awareness/LunchStep";

const CampaignLayout = () => {
  const steps = ["Ad design", "Audience", "Budget", "Launch"];
  const [currentStep, setCurrentStep] = useState<any>(1);
  const [stepData, setStepData] = useState<any>({
    1: {},
    2: {},
    3: {},
    4: {},
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateStepData = (data: any) => {
    setStepData({
      ...stepData,
      [currentStep]: { ...stepData[currentStep], ...data },
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <AdDesignStep data={stepData[1]} updateData={updateStepData} />;
      case 2:
        return <AudienceStep data={stepData[2]} updateData={updateStepData} />;
      case 3:
        return <BudgetStep data={stepData[3]} updateData={updateStepData} />;
      case 4:
        return <LaunchStep data={stepData[4]} updateData={updateStepData} />;
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
          disabled={currentStep === steps.length}
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          {currentStep === steps.length ? "Finish" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default CampaignLayout;
