// components/SnapchatObjectiveSelector.tsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  FaBullhorn,
  FaVideo,
  FaMobileAlt,
  FaTrafficLight,
} from "react-icons/fa";
import ObjectiveCard from "./ObjectiveCard";

interface Objective {
  title: string;
  description: string;
  icon: React.ReactElement;
  link: string;
}

const objectives: Objective[] = [
  {
    title: "Awareness",
    description: "Increase audience of your brand",
    icon: <FaBullhorn size={32} color="#1976d2" />,
    link: "/snapchat/awareness",
  },
  {
    title: "Video Views",
    description: "Promote your brand with videos",
    icon: <FaVideo size={32} color="#1976d2" />,
    link: "/snapchat/video-views",
  },
  {
    title: "App Installs",
    description: "Get more app downloads",
    icon: <FaMobileAlt size={32} color="#1976d2" />,
    link: "/snapchat/app-installs",
  },
  {
    title: "Website Traffic",
    description: "Expand your website visits",
    icon: <FaTrafficLight size={32} color="#1976d2" />,
    link: "/snapchat/website-traffic",
  },
];

const SnapchatObjectiveSelector: any = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "16px", sm: "10px" },
        // backgroundColor: "#f9f9f9",
        minHeight: "60vh",
      }}
    >
      <h2 className="mb-4 text-center text-2xl font-bold text-[#1976d2]">
        Choose Your Snapchat Objective
      </h2>
      <Grid container spacing={2}>
        {objectives.map((objective, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <ObjectiveCard {...objective} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SnapchatObjectiveSelector;
