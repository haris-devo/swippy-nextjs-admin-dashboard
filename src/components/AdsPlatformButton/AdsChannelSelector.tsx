// components/AdsChannelSelector.tsx

import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import GoogleIcon from "@/icons/GoogleIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import MetaIcon from "@/icons/MetaIcon";
import ShahidIcon from "@/icons/Shahidicon";
import YouTubeIcon from "@/icons/YoutubeIcon";
import SnapchatIcon from "@/icons/SnapchatIcon";
import SnapchatObjectiveSelector from "./SnapchatObjectiveSelector";
import { FaArrowLeft } from "react-icons/fa";
import MetaObjectiveSelector from "./MetaObjectiveSelector";

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
    setSelectedPlatform(platform);
  };

  const handleCancel = () => {
    setSelectedPlatform(null);
  };

  const handleSelectObjective = (objective: string) => {
    console.log("Selected objective:", objective);
    setSelectedPlatform(null);
  };

  const ComingSoonIllustration = () => (
    <svg
      className="mx-auto mb-2 h-64 w-64"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="150" r="100" fill="#E5E7EB" />
      <path
        d="M160 150q40-50 80 0q-40 50-80 0"
        stroke="#6B7280"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="160" cy="120" r="10" fill="#6B7280" />
      <circle cx="240" cy="120" r="10" fill="#6B7280" />
      <path
        d="M150 200h100"
        stroke="#6B7280"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M200 50v-30M150 70l-20-20M250 70l20-20"
        stroke="#9CA3AF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );

  const ComingSoon = ({
    title,
    onBack,
  }: {
    title: string;
    onBack: () => void;
  }) => (
    <div className="mx-auto max-w-2xl p-8 text-center">
      <Button
        onClick={onBack}
        className="absolute left-0 top-4 flex items-center gap-2"
      >
        <FaArrowLeft className="h-4 w-4" />
        Back
      </Button>

      <ComingSoonIllustration />

      <h2 className="mb-4 text-3xl font-bold text-gray-800">{title}</h2>

      <div className="space-y-4">
        <p className="text-xl text-gray-600">
          We&apos;re working hard to bring you something amazing!
        </p>
        <div className="flex justify-center gap-2">
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-blue-600" />
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-blue-600 delay-100" />
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-blue-600 delay-200" />
        </div>
      </div>
    </div>
  );
  const renderPlatformContent = () => {
    switch (selectedPlatform) {
      case "Snapchat Ads":
        return (
          <Box>
            <Button variant="text" onClick={handleCancel}>
              <FaArrowLeft />
              <span className="ml-2">Back</span>
            </Button>
            <SnapchatObjectiveSelector
              onSelectObjective={handleSelectObjective}
              onCancel={handleCancel}
            />
          </Box>
        );
      case "Meta Ads":
        return (
          <Box>
            <Button variant="text" onClick={handleCancel}>
              <FaArrowLeft />
              <span className="ml-2">Back</span>
            </Button>
            <MetaObjectiveSelector
              onSelectObjective={handleSelectObjective}
              onCancel={handleCancel}
            />
          </Box>
        );
      case "Google Ads":
      case "Twitter Ads":
      case "Shahid Ads":
      case "YouTube Ads":
        return <ComingSoon title={selectedPlatform} onBack={handleCancel} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%", padding: "14px" }}>
      {!selectedPlatform ? (
        <>
          <Grid container spacing={3}>
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
        </>
      ) : (
        renderPlatformContent()
      )}
    </Box>
  );
};

export default AdsChannelSelector;
