// src/components/AdDesignStepMeta/CampaignNameInput.tsx

import React from "react";
import { TextField } from "@mui/material";

interface CampaignNameInputProps {
  campaignName: string;
  onChange: (value: string) => void;
}

const CampaignNameInput: React.FC<CampaignNameInputProps> = ({
  campaignName,
  onChange,
}) => (
  <div className="mb-5">
    <p className="mb-2 font-medium">What is your campaign name?</p>
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Campaign name"
      value={campaignName}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        endAdornment: (
          <span className="text-sm text-gray-500">
            {campaignName.length}/30
          </span>
        ),
      }}
      inputProps={{ maxLength: 30 }}
    />
  </div>
);

export default CampaignNameInput;
