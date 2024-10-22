import Link from "next/link";
import { styled } from "@mui/system";
import React from "react";
import { Box, Typography } from "@mui/material";

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  width: "100%",
  height: "100%",
  display: "block",
}));

const BackgroundPattern = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="circlePattern"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="20" cy="20" r="1.5" fill="#afcede" />
      </pattern>
      <linearGradient
        id="cardGradient"
        x1="0"
        y1="0"
        x2="100%"
        y2="100%"
        spreadMethod="pad"
      >
        <stop offset="0%" stopColor="#ffffffae" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#fffbfbb7" stopOpacity="0.9" />
      </linearGradient>
    </defs>

    {/* Background circles */}
    <rect width="100%" height="100%" fill="url(#circlePattern)" />

    {/* Decorative circles */}
    <circle cx="0" cy="0" r="160" fill="#e8e881" opacity="0.1" />
    <circle cx="400" cy="400" r="180" fill="#3a5d79" opacity="0.1" />

    {/* Subtle wave pattern */}
    <path
      d="M0,320 C100,290 200,350 400,320"
      fill="none"
      stroke="#e3f2fd"
      strokeWidth="1"
    />

    {/* Gradient overlay */}
    <rect width="100%" height="100%" fill="url(#cardGradient)" />
  </svg>
);

const ObjectiveCard = ({
  title,
  description,
  icon,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactElement;
  link: string;
}) => (
  <CardLink href={link}>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        cursor: "pointer",
        height: "100%",
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
        "&:hover": {
          borderColor: "#1976d2",
          transform: "translateY(-4px)",
          boxShadow: "0 8px 30px rgba(25, 118, 210, 0.15)",
          "& .hover-circle": {
            transform: "scale(1.1)",
          },
          "& .card-content": {
            transform: "translateY(-2px)",
          },
        },
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <BackgroundPattern />
      </Box>

      {/* Card Content */}
      <Box
        className="card-content"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Box
          className="hover-circle"
          sx={{
            marginBottom: 2,
            transition: "transform 0.3s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "rgba(25, 118, 210, 0.05)",
          }}
        >
          {icon}
        </Box>

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
          sx={{
            textAlign: "center",
            fontSize: "0.95rem",
            color: "rgba(0, 0, 0, 0.7)",
            maxWidth: "280px",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  </CardLink>
);

export default ObjectiveCard;
