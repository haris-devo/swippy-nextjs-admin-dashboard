// src/components/AdDesignStepMeta/AdNavigationButtons.tsx

import React from "react";
import { Button } from "@mui/material";

interface AdNavigationButtonsProps {
  currentIndex: number;
  totalAds: number;
  onPrev: () => void;
  onNext: () => void;
  onAdd: () => void;
}

const AdNavigationButtons: React.FC<AdNavigationButtonsProps> = ({
  currentIndex,
  totalAds,
  onPrev,
  onNext,
  onAdd,
}) => (
  <div className="flex items-center justify-between">
    <div className="flex gap-3">
      <Button variant="outlined" onClick={onPrev} disabled={currentIndex === 0}>
        Previous Ad
      </Button>
      <Button
        variant="outlined"
        onClick={onNext}
        disabled={currentIndex === totalAds - 1}
      >
        Next Ad
      </Button>
    </div>
    <Button variant="contained" color="secondary" onClick={onAdd}>
      + Add Another Ad
    </Button>
  </div>
);

export default AdNavigationButtons;
