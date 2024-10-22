// src/components/AdDesignStepMeta/PlacementsChips.tsx

import React from "react";
import { Chip } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";

interface PlacementsChipsProps {
  placements: string[];
  placementOptions: string[];
  onToggle: (placement: string) => void;
}

const PlacementsChips: React.FC<PlacementsChipsProps> = ({
  placements,
  placementOptions,
  onToggle,
}) => (
  <div className="mb-5">
    <p className="mb-2 font-medium">Placements</p>
    <div className="flex flex-wrap gap-2">
      {placementOptions.map((placement) => (
        <Chip
          key={placement}
          label={placement}
          color={placements.includes(placement) ? "primary" : "default"}
          onClick={() => onToggle(placement)}
          onDelete={
            placements.includes(placement)
              ? () => onToggle(placement)
              : undefined
          }
          deleteIcon={
            placements.includes(placement) ? (
              <IoCloseCircleOutline />
            ) : undefined
          }
          variant={placements.includes(placement) ? "filled" : "outlined"}
        />
      ))}
    </div>
  </div>
);

export default PlacementsChips;
