// src/components/AdDesignStepMeta/PlatformSelect.tsx

import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface PlatformSelectProps {
  platform: string;
  onChange: (value: string) => void;
}

const PlatformSelect: React.FC<PlatformSelectProps> = ({
  platform,
  onChange,
}) => (
  <FormControl fullWidth variant="outlined" className="mb-6">
    <InputLabel id="platform-select-label">Select Platform</InputLabel>
    <Select
      labelId="platform-select-label"
      id="platform-select"
      value={platform}
      onChange={(e) => onChange(e.target.value)}
      label="Select Platform"
    >
      <MenuItem value="Instagram">Instagram</MenuItem>
      <MenuItem value="Facebook">Facebook</MenuItem>
    </Select>
  </FormControl>
);

export default PlatformSelect;
