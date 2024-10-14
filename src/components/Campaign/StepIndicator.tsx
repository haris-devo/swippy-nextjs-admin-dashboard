import React from "react";

const StepIndicator = ({ steps, currentStep }: any) => {
  return (
    <div className="flex items-center space-x-2">
      {steps.map(({ step, index }: { step: string; index: number }) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center ${index < currentStep ? "text-blue-500" : "text-gray-500"}`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                index < currentStep
                  ? "border-blue-500 bg-blue-500 text-white"
                  : index === currentStep
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <span className="ml-2 text-sm font-medium">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 flex-grow ${index < currentStep - 1 ? "bg-blue-500" : "bg-gray-300"}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
