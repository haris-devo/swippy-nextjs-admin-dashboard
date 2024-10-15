"use client";
// components/AdManagement.tsx
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ActionButton from "./ActionButton";
import AdPlatformButton from "./AdPlatformButton";
import { Button } from "@mui/material";
import { FaSnapchat } from "react-icons/fa";
import { BiCalendar, BiDownload } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import CustomModal from "../Modal/CustomModal";
import AdsChannelSelector from "./AdsChannelSelector";
import GoogleIcon from "@/icons/GoogleIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import MetaIcon from "@/icons/MetaIcon";
import ShahidIcon from "@/icons/Shahidicon";
import YouTubeIcon from "@/icons/YoutubeIcon";
import SnapchatIcon from "@/icons/SnapchatIcon";

const AdManagement = () => {
  const adPlatforms = [
    { platform: "Snapchat Ads", icon: <SnapchatIcon size={24} /> },
    { platform: "Google Ads", icon: <GoogleIcon size={24} /> },
    { platform: "Twitter Ads", icon: <TwitterIcon size={24} /> },
    { platform: "Meta Ads", icon: <MetaIcon size={24} /> },
    { platform: "Shahid Ads", icon: <ShahidIcon size={24} /> },
    { platform: "YouTube Ads", icon: <YouTubeIcon size={24} /> },
  ];

  const [activePlatform, setActivePlatform] = useState(adPlatforms[0].platform);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectPlatform = (platform: any) => {
    setActivePlatform(platform);
    // Add any additional logic needed when selecting a platform
  };

  return (
    <div className="space-y-6">
      {/* Platform Selection */}
      <div className="flex flex-wrap gap-3">
        {adPlatforms.map((platform) => (
          <AdPlatformButton
            key={platform.platform}
            platform={platform.platform}
            icon={platform.icon}
            isActive={activePlatform === platform.platform}
            onClick={() => setActivePlatform(platform.platform)}
          />
        ))}
      </div>

      {/* Search and Actions */}
      <div className="flex items-center justify-between gap-4">
        <SearchBar />
        <div className="flex gap-3">
          <ActionButton icon={<BiCalendar size={16} />} label="Duration" />
          <ActionButton icon={<BiDownload size={16} />} label="Export" />
          <ActionButton icon={<FiFilter size={16} />} label="Filter" />
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenModal}
            sx={{ padding: "0px 10px" }}
          >
            Create Campaign
          </Button>
        </div>
      </div>

      {/* Modal */}
      <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Choose your Ads Channel"
        sx={{ width: 800, maxWidth: "90vw" }}
      >
        <AdsChannelSelector
          onSelect={handleSelectPlatform}
          onClose={handleCloseModal}
        />
      </CustomModal>
    </div>
  );
};

export default AdManagement;
