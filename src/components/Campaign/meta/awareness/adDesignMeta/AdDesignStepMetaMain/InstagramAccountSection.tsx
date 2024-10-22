// src/components/AdDesignStepMeta/InstagramAccountSection.tsx

import React from "react";
import { Button } from "@mui/material";

interface InstagramAccountSectionProps {
  onConnect: () => void;
}

const InstagramAccountSection: React.FC<InstagramAccountSectionProps> = ({
  onConnect,
}) => (
  <div className="mb-5">
    <p className="mb-2 font-medium">Instagram Account</p>
    <div className="flex items-center gap-3">
      <Button variant="outlined" color="primary" onClick={onConnect}>
        + Connect Instagram account
      </Button>
    </div>
  </div>
);

export default InstagramAccountSection;
