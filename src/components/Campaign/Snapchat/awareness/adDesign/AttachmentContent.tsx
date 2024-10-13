import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import { BsInfo } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";

interface AttachmentData {
  websiteCTA?: string;
  appCTA?: string;
  websiteLink?: string;
  appName?: string;
  iosAppUrl?: string;
  androidAppUrl?: string;
}

interface AttachmentContentProps {
  attachmentTab: number;
  attachmentData: AttachmentData;
  onAttachmentDataChange: (data: AttachmentData) => void;
}

const AttachmentContent: React.FC<AttachmentContentProps> = ({
  attachmentTab,
  attachmentData,
  onAttachmentDataChange,
}) => {
  const [websiteCTA, setWebsiteCTA] = useState<string>(
    attachmentData.websiteCTA || "More",
  );
  const [appCTA, setAppCTA] = useState<string>(
    attachmentData.appCTA || "Install Now",
  );

  const handleWebsiteCTAChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setWebsiteCTA(value);
    onAttachmentDataChange({ ...attachmentData, websiteCTA: value });
  };

  const handleAppCTAChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setAppCTA(value);
    onAttachmentDataChange({ ...attachmentData, appCTA: value });
  };

  const renderAttachmentContent = () => {
    switch (attachmentTab) {
      case 1: // Website
        return (
          <div className="mt-4 space-y-4">
            <div className="flex rounded-md">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                https://
              </span>
              <input
                type="text"
                className="block w-full flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Website link"
                value={attachmentData.websiteLink || ""}
                onChange={(e) =>
                  onAttachmentDataChange({
                    ...attachmentData,
                    websiteLink: e.target.value,
                  })
                }
              />
            </div>
            <p className="text-sm text-blue-600">
              If you don't have a website,{" "}
              <a href="#" className="underline">
                Create one for free
              </a>
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select CTA
              </label>
              <Select
                value={websiteCTA}
                onChange={handleWebsiteCTAChange}
                fullWidth
                className="mt-1"
              >
                <MenuItem value="More">More</MenuItem>
                <MenuItem value="Shop Now">Shop Now</MenuItem>
                <MenuItem value="Learn More">Learn More</MenuItem>
              </Select>
            </div>
          </div>
        );
      case 2: // App
        return (
          <div className="mt-4 space-y-4">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="App Name"
              value={attachmentData.appName || ""}
              onChange={(e) =>
                onAttachmentDataChange({
                  ...attachmentData,
                  appName: e.target.value,
                })
              }
              InputProps={{
                endAdornment: (
                  <div className="flex items-center">
                    <BsInfo className="mr-2 text-gray-400" />
                    <span className="text-xs text-gray-400">
                      {attachmentData.appName
                        ? attachmentData.appName.length
                        : 0}
                      /24
                    </span>
                  </div>
                ),
              }}
              inputProps={{ maxLength: 24 }}
            />
            <div className="flex items-center space-x-2">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="iOS App URL"
                value={attachmentData.iosAppUrl || ""}
                onChange={(e) =>
                  onAttachmentDataChange({
                    ...attachmentData,
                    iosAppUrl: e.target.value,
                  })
                }
              />
              <button
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={() => {
                  /* Handle iOS App URL Add action */
                }}
              >
                Add
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Android App URL"
                value={attachmentData.androidAppUrl || ""}
                onChange={(e) =>
                  onAttachmentDataChange({
                    ...attachmentData,
                    androidAppUrl: e.target.value,
                  })
                }
              />
              <button
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={() => {
                  /* Handle Android App URL Add action */
                }}
              >
                Add
              </button>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700">Add logo</p>
              <p className="mb-2 text-xs text-gray-500">
                Required by Snapchat.
              </p>
              <button className="flex items-center rounded-md border border-purple-500 px-4 py-2 text-purple-600 hover:bg-purple-50">
                <IoAddCircleOutline className="mr-2" />
                Add logo
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select CTA
              </label>
              <Select
                value={appCTA}
                onChange={handleAppCTAChange}
                fullWidth
                className="mt-1"
              >
                <MenuItem value="Install Now">Install Now</MenuItem>
                <MenuItem value="Download">Download</MenuItem>
                <MenuItem value="Play Now">Play Now</MenuItem>
              </Select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return renderAttachmentContent();
};

export default AttachmentContent;
