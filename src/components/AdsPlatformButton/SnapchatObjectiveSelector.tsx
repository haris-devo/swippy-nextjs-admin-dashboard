// components/SnapchatObjectiveSelector.tsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  FaBullhorn,
  FaVideo,
  FaMobileAlt,
  FaTrafficLight,
} from "react-icons/fa";
import Link from "next/link";
import { styled } from "@mui/system";

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

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  width: "100%",
  height: "100%",
  display: "block",
}));

const ObjectiveCard: React.FC<Objective> = ({
  title,
  description,
  icon,
  link,
}) => (
  <CardLink href={link}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        cursor: "pointer",
        height: "100%", // Ensures all cards have the same height
        transition: "all 0.3s",
        background: "#fff",
        "&:hover": {
          borderColor: "#1976d2",
          boxShadow: "0 4px 20px rgba(25, 118, 210, 0.2)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box sx={{ marginBottom: 2 }}>{icon}</Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          marginBottom: 1,
          color: "#1976d2",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ textAlign: "center", fontSize: "0.95rem" }}
      >
        {description}
      </Typography>
    </Box>
  </CardLink>
);

const SnapchatObjectiveSelector: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "16px", sm: "24px" },
        backgroundColor: "#f9f9f9",
        minHeight: "60vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          textAlign: "center",
          color: "#1976d2",
          fontWeight: 700,
        }}
      >
        Choose Your Snapchat Objective
      </Typography>
      <Grid container spacing={2}>
        {objectives.map((objective, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ObjectiveCard {...objective} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SnapchatObjectiveSelector;
