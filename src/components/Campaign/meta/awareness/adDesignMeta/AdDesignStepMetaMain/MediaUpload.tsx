// src/components/AdDesignStepMeta/MediaUpload.tsx

import React from "react";
import { Button } from "@mui/material";
import { IoAddCircleOutline } from "react-icons/io5";

interface MediaUploadProps {
  onUpload: (file: File) => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ onUpload }) => (
  <div className="mb-5">
    <input
      accept="image/*,video/*"
      style={{ display: "none" }}
      id="media-upload"
      type="file"
      onChange={(e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          onUpload(file);
        }
      }}
    />
    <label htmlFor="media-upload">
      <Button
        variant="contained"
        color="primary"
        component="span"
        startIcon={<IoAddCircleOutline />}
        fullWidth
      >
        Add Media
      </Button>
    </label>
  </div>
);

export default MediaUpload;
