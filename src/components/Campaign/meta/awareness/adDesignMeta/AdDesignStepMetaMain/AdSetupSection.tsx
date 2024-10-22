// src/components/AdDesignStepMeta/AdSetupSection.tsx

import React from "react";

interface AdSetupSectionProps {
  adFormat: string;
  onFormatChange: (format: string) => void;
}

const AdSetupSection: React.FC<AdSetupSectionProps> = ({
  adFormat,
  onFormatChange,
}) => (
  <div className="mb-5">
    <h5 className="mb-2 text-xl font-semibold">Ad Setup</h5>
    <p className="text-sm text-gray-600">
      Choose how you'd like to structure your ad.
    </p>

    {/* Format Selection */}
    <div className="mt-4 flex gap-6">
      <div
        className={`flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-4 ${
          adFormat === "photoOrVideo" ? "border-purple-400" : "border-gray-300"
        }`}
        onClick={() => onFormatChange("photoOrVideo")}
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl">🖼️</span>
          <p className="mt-3 text-blue-600">Photo or Video</p>
          <p className="text-sm text-gray-500">1 Photo or video</p>
        </div>
      </div>
      {/* Add more formats if needed */}
    </div>
  </div>
);

export default AdSetupSection;
