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
  isLaunching?: boolean;
}

const AdPreview: React.FC<AdPreviewProps> = ({
  adData,
  currentAdIndex,
  totalAds,
  handlePrevAd,
  handleNextAd,
  isLaunching,
}) => {
  return (
    <div
      className={`h-max w-full rounded-lg border border-gray-300 bg-white/10 p-4 shadow ${isLaunching ? "lg:w-full" : "lg:w-2/5"} lg:w-2/5`}
    >
      <h6 className="mb-2 text-center text-xl font-medium">Ad live preview!</h6>

      {/* Navigation Buttons */}
      <div className="mb-1 flex w-full items-center justify-center gap-2">
        <button
          className={`rounded bg-transparent p-1 text-blue-500 hover:bg-blue-100 ${
            currentAdIndex === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handlePrevAd}
          disabled={currentAdIndex === 0}
        >
          ←
        </button>
        <span className="text-center text-sm text-blue-500">
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
        <div className="absolute left-1 top-0.5 z-50">
          <div className="flex flex-col gap-0.5 rounded bg-black-2/40 p-1 px-2">
            <h1 className="text-base font-bold text-white">
              {adData.brandName ?? "Brand Name"}
            </h1>
            <h1 className="text-sm font-medium text-white">
              {" "}
              {adData.headline ?? "Headline"}
            </h1>
          </div>
        </div>
        {adData.media ? (
          <>
            <img
              src={URL.createObjectURL(adData.media)}
              alt="Ad preview"
              className="max-h-full max-w-full rounded-lg"
            />
          </>
        ) : (
          <>
            <div className="text-white opacity-50">Ad Preview</div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdPreview;
