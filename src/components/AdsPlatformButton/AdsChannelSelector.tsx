// components/AdsChannelSelector.tsx
import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FaSnapchat } from "react-icons/fa";
import GoogleIcon from "@/icons/GoogleIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import MetaIcon from "@/icons/MetaIcon";
import ShahidIcon from "@/icons/Shahidicon";
import YouTubeIcon from "@/icons/YoutubeIcon";
import SnapchatObjectiveSelector from "./SnapchatObjectiveSelector";
import SnapchatIcon from "@/icons/SnapchatIcon";

interface AdChannelCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const AdChannelCard: React.FC<AdChannelCardProps> = ({
  icon,
  title,
  onClick,
}) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.2s",
      "&:hover": {
        borderColor: "#1976d2",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      },
    }}
  >
    <Box sx={{ width: 64, height: 64, marginBottom: 2 }}>{icon}</Box>
    <Typography variant="body1" sx={{ fontWeight: 500 }}>
      {title}
    </Typography>
  </Box>
);

const AdsChannelSelector = ({
  onSelect,
  onClose,
}: {
  onSelect: (platform: string) => void;
  onClose: () => void;
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const adChannels = [
    { title: "Snapchat Ads", icon: <SnapchatIcon size={72} /> },
    { title: "Google Ads", icon: <GoogleIcon size={72} /> },
    { title: "Twitter Ads", icon: <TwitterIcon size={72} /> },
    { title: "Meta Ads", icon: <MetaIcon size={72} /> },
    { title: "Shahid Ads", icon: <ShahidIcon size={72} /> },
    { title: "YouTube Ads", icon: <YouTubeIcon size={72} /> },
  ];

  const handleSelectPlatform = (platform: string) => {
    if (platform === "Snapchat Ads") {
      setSelectedPlatform(platform);
    } else {
      // Handle other platforms as needed
      setSelectedPlatform(null);
    }
  };

  const handleCancel = () => {
    setSelectedPlatform(null);
  };

  const handleSelectObjective = (objective: string) => {
    console.log("Selected objective:", objective);
    setSelectedPlatform(null);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!selectedPlatform ? (
        <Grid container spacing={2}>
          {adChannels.map((channel, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AdChannelCard
                icon={channel.icon}
                title={channel.title}
                onClick={() => handleSelectPlatform(channel.title)}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        selectedPlatform === "Snapchat Ads" && (
          <SnapchatObjectiveSelector
            onSelectObjective={handleSelectObjective}
            onCancel={handleCancel}
          />
        )
      )}
    </Box>
  );
};

export default AdsChannelSelector;
