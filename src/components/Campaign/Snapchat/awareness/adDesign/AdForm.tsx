import React, { useState } from "react";
import { TextField, Tabs, Tab } from "@mui/material";
import { BsInfo } from "react-icons/bs";
import AttachmentContent from "./AttachmentContent";
import MediaUploader from "./MediaUploader";

interface AdData {
  id: number;
  brandName?: string;
  headline?: string;
  media?: File | null;
  attachmentTab?: number;
  attachmentData?: any;
}

interface AdFormProps {
  adData: AdData;
  adIndex: number;
  handleAdChange: any;
}

const AdForm: React.FC<AdFormProps> = ({ adData, adIndex, handleAdChange }) => {
  const [attachmentTab, setAttachmentTab] = useState<number>(
    adData.attachmentTab || 0,
  );

  const handleInputChange = (field: string, value: any) => {
    handleAdChange(adIndex, { [field]: value });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Ad {adData.id}</h2>

        <h3 className="text-md mb-2 font-medium">Ad content</h3>

        <div className="space-y-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Brand Name"
            value={adData.brandName || ""}
            onChange={(e) => handleInputChange("brandName", e.target.value)}
            InputProps={{
              endAdornment: (
                <div className="flex items-center">
                  <BsInfo className="mr-2 text-gray-400" />
                  <span className="text-xs text-gray-400">
                    {adData.brandName ? adData.brandName.length : 0}/32
                  </span>
                </div>
              ),
            }}
            inputProps={{ maxLength: 32 }}
          />

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Headline"
            value={adData.headline || ""}
            onChange={(e) => handleInputChange("headline", e.target.value)}
            InputProps={{
              endAdornment: (
                <div className="flex items-center">
                  <BsInfo className="mr-2 text-gray-400" />
                  <span className="text-xs text-gray-400">
                    {adData.headline ? adData.headline.length : 0}/34
                  </span>
                </div>
              ),
            }}
            inputProps={{ maxLength: 34 }}
          />
        </div>

        <div className="mt-6">
          <h3 className="text-md mb-2 flex items-center font-medium">
            Upload Your Media
            <BsInfo className="ml-1 text-gray-400" />
          </h3>

          <MediaUploader
            media={adData.media || null}
            onMediaChange={(media) => handleInputChange("media", media)}
          />
        </div>

        <div className="mt-6">
          <h3 className="text-md mb-2 font-medium">Attachments</h3>

          <Tabs
            value={attachmentTab}
            onChange={(_, newValue) => {
              setAttachmentTab(newValue);
              handleInputChange("attachmentTab", newValue);
            }}
            variant="fullWidth"
            className="rounded-md border border-gray-300"
            TabIndicatorProps={{ style: { backgroundColor: "#3b82f6" } }}
          >
            <Tab
              label="None"
              className={attachmentTab === 0 ? "bg-blue-100 text-blue-600" : ""}
            />
            <Tab
              label="Website"
              className={attachmentTab === 1 ? "bg-blue-100 text-blue-600" : ""}
            />
            <Tab
              label="App"
              className={attachmentTab === 2 ? "bg-blue-100 text-blue-600" : ""}
            />
          </Tabs>

          <AttachmentContent
            attachmentTab={attachmentTab}
            attachmentData={adData.attachmentData || {}}
            onAttachmentDataChange={(data) =>
              handleInputChange("attachmentData", data)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AdForm;
