// src/components/AdDesignStepMeta/AdDesignStepMeta.tsx

import React, { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { AdData, AdDesignStepProps } from "./types";
import CampaignNameInput from "./CampaignNameInput";
import GoalOptimizationTabs from "./GoalOptimizationTabs";
import PlacementsChips from "./PlacementsChips";
import FacebookPageSection from "./FacebookPageSection";
import InstagramAccountSection from "./InstagramAccountSection";
import AdSetupSection from "./AdSetupSection";
import MediaUpload from "./MediaUpload";
import AdNavigationButtons from "./AdNavigationButtons";
import AdPreview from "./AdPreview/AdPreview";
import PlatformSelect from "./PlatformSelect";
import AdContent from "./AdContent";

const AdDesignStepMeta: React.FC<AdDesignStepProps> = ({
  data = {},
  updateData = () => {},
}) => {
  // State Management
  const [useSnapchatProfile, setUseSnapchatProfile] = useState<boolean>(
    data.useSnapchatProfile || false,
  );
  const [campaignName, setCampaignName] = useState<string>(
    data.campaignName || "",
  );
  const [ads, setAds] = useState<AdData[]>(data.ads || [{ id: 1 }]);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);

  const [adFormat, setAdFormat] = useState<string>("photoOrVideo");
  const [platform, setPlatform] = useState<string>("Instagram");

  const goalOptions = ["Reach", "Impressions", "Video Views"];
  const placementOptions = [
    "Facebook",
    "Instagram",
    "Audience Network",
    "Messenger",
  ];

  // Handlers
  const handleUseSnapchatProfileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUseSnapchatProfile(e.target.checked);
    updateData({ useSnapchatProfile: e.target.checked });
  };

  const handleCampaignNameChange = (value: string) => {
    setCampaignName(value);
    updateData({ campaignName: value });
  };

  const handleAdChange = (adIndex: number, adData: Partial<AdData>) => {
    const updatedAds = [...ads];
    updatedAds[adIndex] = { ...updatedAds[adIndex], ...adData };
    setAds(updatedAds);
    updateData({ ads: updatedAds });
  };

  const handleAddAd = () => {
    const newAd: AdData = { id: ads.length + 1 };
    setAds([...ads, newAd]);
    setCurrentAdIndex(ads.length);
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

  const handleMediaUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedAds = [...ads];
      updatedAds[currentAdIndex].media = file;
      updatedAds[currentAdIndex].mediaUrl = reader.result as string;
      setAds(updatedAds);
      updateData({ ads: updatedAds });
    };
    reader.readAsDataURL(file);
  };

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      ads.forEach((ad) => {
        if (ad.mediaUrl) {
          URL.revokeObjectURL(ad.mediaUrl);
        }
      });
    };
  }, [ads]);

  const handleGoalChange = (newGoal: string) => {
    handleAdChange(currentAdIndex, { goalOptimization: newGoal });
  };

  const handlePlacementToggle = (placement: string) => {
    const currentPlacements = ads[currentAdIndex].placements || [];
    if (currentPlacements.includes(placement)) {
      // Remove placement
      const updatedPlacements = currentPlacements.filter(
        (p) => p !== placement,
      );
      handleAdChange(currentAdIndex, { placements: updatedPlacements });
    } else {
      // Add placement
      handleAdChange(currentAdIndex, {
        placements: [...currentPlacements, placement],
      });
    }
  };

  const handleConnectInstagram = () => {
    // Implement Instagram account connection logic
    alert("Connect Instagram account functionality to be implemented.");
  };

  const handleAdContentChange = (
    adIndex: number,
    contentData: AdData["content"],
  ) => {
    const updatedAds = [...ads];
    updatedAds[adIndex].content = contentData;
    setAds(updatedAds);
    updateData({ ads: updatedAds });
  };

  return (
    <div className="flex w-full flex-col gap-6 lg:flex-row lg:space-x-6">
      {/* Left Section - Form */}
      <div className="w-full rounded-md border border-gray-300 px-6 py-5 lg:w-3/5">
        <h5 className="mb-5 text-2xl font-semibold">
          Let&apos;s start with the content!
        </h5>

        {/* Campaign Name */}
        <CampaignNameInput
          campaignName={campaignName}
          onChange={handleCampaignNameChange}
        />

        {/* Goal Optimization Tabs */}
        <GoalOptimizationTabs
          currentGoal={ads[currentAdIndex].goalOptimization || "Reach"}
          goalOptions={goalOptions}
          onChange={handleGoalChange}
        />

        {/* Placements Chips */}
        <PlacementsChips
          placements={ads[currentAdIndex].placements || []}
          placementOptions={placementOptions}
          onToggle={handlePlacementToggle}
        />

        {/* Facebook Page Section */}
        <FacebookPageSection pageName="Complete Growth" />

        {/* Instagram Account Section */}
        <InstagramAccountSection onConnect={handleConnectInstagram} />

        {/* Ad Setup Section */}
        <AdSetupSection adFormat={adFormat} onFormatChange={setAdFormat} />

        {/* Media Upload */}
        <MediaUpload onUpload={handleMediaUpload} />

        {/* New Ad Content Section */}
        <AdContent
          onContentChange={(contentData) =>
            handleAdContentChange(currentAdIndex, contentData)
          }
        />
      </div>

      {/* Right Section - Ad Preview */}
      <div className="h-max w-full rounded-md border border-gray-300 p-6 lg:w-2/5">
        {/* Platform Selection Dropdown */}
        <PlatformSelect platform={platform} onChange={setPlatform} />
        <AdPreview
          platform={platform}
          ad={ads[currentAdIndex]}
          campaignName={campaignName}
        />
      </div>
    </div>
  );
};

export default AdDesignStepMeta;
