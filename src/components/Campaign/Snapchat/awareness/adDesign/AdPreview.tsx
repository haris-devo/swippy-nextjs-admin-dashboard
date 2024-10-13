import React from "react";
import { BsInfo } from "react-icons/bs";

interface AdData {
  id: number;
  brandName?: string;
  headline?: string;
  media?: File | null;
}

interface AdPreviewProps {
  adData: AdData;
  currentAdIndex: number;
  totalAds: number;
  handlePrevAd: () => void;
  handleNextAd: () => void;
}

const AdPreview: React.FC<AdPreviewProps> = ({
  adData,
  currentAdIndex,
  totalAds,
  handlePrevAd,
  handleNextAd,
}) => {
  return (
    <div className="max-h-150 w-full rounded-lg bg-white p-4 shadow-lg lg:w-2/5">
      <h6 className="mb-2 text-xl font-medium">Ad live preview!</h6>

      {/* Navigation Buttons */}
      <div className="mb-1 flex items-center gap-2">
        <button
          className={`rounded bg-transparent p-1 text-blue-500 hover:bg-blue-100 ${
            currentAdIndex === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handlePrevAd}
          disabled={currentAdIndex === 0}
        >
          ←
        </button>
        <span className="text-sm text-blue-500">
          Ad {currentAdIndex + 1}/{totalAds}
        </span>
        <button
          className={`rounded bg-transparent p-1 text-blue-500 hover:bg-blue-100 ${
            currentAdIndex === totalAds - 1
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          onClick={handleNextAd}
          disabled={currentAdIndex === totalAds - 1}
        >
          →
        </button>
      </div>

      {/* Info Text */}
      <span className="mb-2 flex items-center text-xs text-gray-500">
        <BsInfo className="mr-1" fontSize="small" />
        These previews are conceptual examples. Native Ads serve differently
        depending on device and website.
      </span>

      {/* Ad Preview */}
      <div className="relative mt-2 flex h-96 w-full items-center justify-center rounded-lg bg-gray-800">
        {adData.media ? (
          <img
            src={URL.createObjectURL(adData.media)}
            alt="Ad preview"
            className="max-h-full max-w-full rounded-lg"
          />
        ) : (
          <div className="text-white opacity-50">Ad Preview</div>
        )}
      </div>
    </div>
  );
};

export default AdPreview;
