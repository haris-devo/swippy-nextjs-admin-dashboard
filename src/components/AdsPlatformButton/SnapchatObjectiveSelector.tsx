// components/SnapchatObjectiveSelector.tsx
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

interface ObjectiveCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({
  title,
  description,
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
    <Box sx={{ marginBottom: 2 }}>
      {/* Placeholder for icon, you can add an actual icon/image here */}
      <Box
        sx={{
          width: 64,
          height: 64,
          backgroundColor: "#e0e0e0",
          borderRadius: "8px",
        }}
      />
    </Box>
    <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 1 }}>
      {title}
    </Typography>
    <Typography
      variant="body2"
      color="textSecondary"
      sx={{ textAlign: "center" }}
    >
      {description}
    </Typography>
  </Box>
);

interface SnapchatObjectiveSelectorProps {
  onSelectObjective: (objective: string) => void;
  onCancel: () => void;
}

const SnapchatObjectiveSelector: React.FC<SnapchatObjectiveSelectorProps> = ({
  onSelectObjective,
  onCancel,
}) => {
  const objectives = [
    { title: "Awareness", description: "Increase audience of your brand" },
    { title: "Video views", description: "Promote your brand with videos" },
    { title: "App installs", description: "Get more app downloads" },
    { title: "Website Traffic", description: "Expand your website visits" },
  ];

  return (
    <Box sx={{ width: "100%", padding: "24px" }}>
      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        Choose your Snapchat objective
      </Typography>
      <Grid container spacing={2}>
        {objectives.map((objective, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ObjectiveCard
              title={objective.title}
              description={objective.description}
              onClick={() => onSelectObjective(objective.title)}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 3, textAlign: "left" }}>
        <Button onClick={onCancel} sx={{ color: "#1976d2" }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default SnapchatObjectiveSelector;
