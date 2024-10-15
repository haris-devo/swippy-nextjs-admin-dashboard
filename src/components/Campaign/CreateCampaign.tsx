import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomModal from "../Modal/CustomModal";
import SnapchatIcon from "@/icons/SnapchatIcon";
import GoogleIcon from "@/icons/GoogleIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import MetaIcon from "@/icons/MetaIcon";
import ShahidIcon from "@/icons/Shahidicon";
import YouTubeIcon from "@/icons/YoutubeIcon";
import AdsChannelSelector from "../AdsPlatformButton/AdsChannelSelector";

const CreateCampaign = () => {
  const adPlatforms = [
    { platform: "Snapchat Ads", icon: <SnapchatIcon size={24} /> },
    { platform: "Google Ads", icon: <GoogleIcon size={24} /> },
    { platform: "Twitter Ads", icon: <TwitterIcon size={24} /> },
    { platform: "Meta Ads", icon: <MetaIcon size={24} /> },
    { platform: "Shahid Ads", icon: <ShahidIcon size={24} /> },
    { platform: "YouTube Ads", icon: <YouTubeIcon size={24} /> },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectPlatform = (platform: string) => {
    // Add any logic needed when selecting a platform
    console.log("Selected platform:", platform);
    handleCloseModal();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        sx={{
          padding: "5px 10px",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "4px",
          transition: "all 0.3s",
          textTransform: "capitalize",

          "&:hover": {
            backgroundColor: "#1976d2",
          },
        }}
      >
        Create Campaign
      </Button>

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
    </>
  );
};

export default CreateCampaign;
