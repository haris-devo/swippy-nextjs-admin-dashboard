import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

interface AdContentProps {
  onContentChange: (content: AdContentData) => void;
}

interface AdContentData {
  primaryText: string;
  headlineText: string;
  description: string;
  websiteUrl: string;
  cta: string;
}

const AdContent: React.FC<AdContentProps> = ({ onContentChange }) => {
  const [content, setContent] = useState<AdContentData>({
    primaryText: "",
    headlineText: "",
    description: "",
    websiteUrl: "",
    cta: "",
  });

  const handleChange =
    (field: keyof AdContentData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedContent = { ...content, [field]: event.target.value };
      setContent(updatedContent);
      onContentChange(updatedContent);
    };

  const ctaOptions = ["Learn More", "Shop Now", "Sign Up", "Contact Us"];

  return (
    <div className="mb-6 rounded-lg border border-gray-200 p-4">
      <h6 className="mb-4 text-lg font-semibold">Ad Content</h6>

      <div className="mb-4">
        <TextField
          fullWidth
          label="Primary text"
          variant="outlined"
          value={content.primaryText}
          onChange={handleChange("primaryText")}
          InputProps={{
            endAdornment: (
              <span className="text-sm text-gray-500">
                {content.primaryText.length}/125
              </span>
            ),
          }}
          inputProps={{ maxLength: 125 }}
        />
      </div>

      <div className="mb-4">
        <h6 className="mb-2 font-medium">Add a destination</h6>
        <TextField
          fullWidth
          label="Headline text"
          variant="outlined"
          value={content.headlineText}
          onChange={handleChange("headlineText")}
          InputProps={{
            endAdornment: (
              <span className="text-sm text-gray-500">
                {content.headlineText.length}/40
              </span>
            ),
          }}
          inputProps={{ maxLength: 40 }}
        />
      </div>

      <div className="mb-4">
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={content.description}
          onChange={handleChange("description")}
          InputProps={{
            endAdornment: (
              <span className="text-sm text-gray-500">
                {content.description.length}/25
              </span>
            ),
          }}
          inputProps={{ maxLength: 25 }}
        />
      </div>

      <div className="mb-4">
        <h6 className="mb-2 font-medium">Add a website URL</h6>
        <TextField
          fullWidth
          label="Website URL"
          variant="outlined"
          value={content.websiteUrl}
          onChange={handleChange("websiteUrl")}
          placeholder="https://"
        />
        {!content.websiteUrl && (
          <p className="mt-1 text-sm text-blue-600">
            <a href="#" className="hover:underline">
              Create one for free
            </a>
          </p>
        )}
      </div>

      <div>
        <h6 className="mb-2 font-medium">Select CTA</h6>
        <FormControl fullWidth variant="outlined">
          <InputLabel>CTA</InputLabel>
          <Select
            value={content.cta}
            onChange={(e) =>
              handleChange("cta")(e as React.ChangeEvent<HTMLInputElement>)
            }
            label="CTA"
          >
            {ctaOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default AdContent;
