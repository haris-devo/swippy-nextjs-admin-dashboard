import React, { useState } from "react";
import { Switch, TextField } from "@mui/material";
import { IoAddCircleOutline } from "react-icons/io5";
import AdForm from "./AdForm";
import AdPreview from "./AdPreview";

interface AdData {
  id: number;
  brandName?: string;
  headline?: string;
  media?: File | null;
  attachmentTab?: number;
  attachmentData?: any;
}

interface AdDesignStepProps {
  data?: any;
  updateData?: (newData: any) => void;
}

const AdDesignStep: React.FC<AdDesignStepProps> = ({
  data = {},
  updateData = () => {},
}) => {
  const [useSnapchatProfile, setUseSnapchatProfile] = useState<boolean>(
    data.useSnapchatProfile || false,
  );
  const [campaignName, setCampaignName] = useState<string>(
    data.campaignName || "",
  );
  const [ads, setAds] = useState<AdData[]>(data.ads || [{ id: 1 }]);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);

  // Handle updates
  const handleUseSnapchatProfileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUseSnapchatProfile(e.target.checked);
    updateData({ useSnapchatProfile: e.target.checked });
  };

  const handleCampaignNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampaignName(e.target.value);
    updateData({ campaignName: e.target.value });
  };

  const handleAdChange = (adIndex: number, adData: AdData) => {
    const updatedAds = [...ads];
    updatedAds[adIndex] = { ...updatedAds[adIndex], ...adData };
    setAds(updatedAds);
    updateData({ ads: updatedAds });
  };

  const handleAddAd = () => {
    setAds([...ads, { id: ads.length + 1 }]);
  };

  const handlePrevAd = () => {
    if (currentAdIndex > 0) {
      setCurrentAdIndex(currentAdIndex - 1);
    }
  };

  const handleNextAd = () => {
    if (currentAdIndex < ads.length - 1) {
      setCurrentAdIndex(currentAdIndex + 1);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row lg:space-x-5">
      {/* Left Section */}
      <div className="w-full lg:w-3/5">
        <h5 className="mb-4 text-2xl font-semibold">
          Let&apos;s start with the content!
        </h5>

        {/* Toggle Switch */}
        <div className="mb-4 flex items-center">
          <span className="mr-2">Use Snapchat Public Profile</span>
          <Switch
            checked={useSnapchatProfile}
            onChange={handleUseSnapchatProfileChange}
            color="primary"
          />
        </div>

        {/* Campaign Name */}
        <p className="mb-2 text-lg">A name for your campaign?</p>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Campaign name"
          value={campaignName}
          onChange={handleCampaignNameChange}
          InputProps={{
            endAdornment: (
              <span className="text-sm text-gray-500">
                {campaignName.length}/30
              </span>
            ),
          }}
          className="mb-6"
          inputProps={{ maxLength: 30 }}
        />

        {/* Ads Section */}
        <p className="mb-2 text-lg">Your ads</p>
        <div className="mb-4 flex gap-2">
          {ads.map((ad, index) => (
            <div
              key={index}
              className={`flex h-16 w-16 items-center justify-center rounded-lg border-2 ${
                currentAdIndex === index
                  ? "border-purple-500"
                  : "border-gray-300"
              } cursor-pointer bg-gray-800 text-white`}
              onClick={() => setCurrentAdIndex(index)}
            >
              Ad {ad.id}
            </div>
          ))}
          <div
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-lg bg-gray-800 text-white"
            onClick={handleAddAd}
          >
            <IoAddCircleOutline size={24} />
          </div>
        </div>

        {/* Ad Form */}
        <AdForm
          adData={ads[currentAdIndex]}
          adIndex={currentAdIndex}
          handleAdChange={handleAdChange}
        />
      </div>

      {/* Right Section */}
      <AdPreview
        adData={ads[currentAdIndex]}
        currentAdIndex={currentAdIndex}
        totalAds={ads.length}
        handlePrevAd={handlePrevAd}
        handleNextAd={handleNextAd}
      />
    </div>
  );
};

export default AdDesignStep;
