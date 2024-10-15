import React, { useState } from "react";
import {
  CountryDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import {
  Autocomplete,
  TextField,
  Chip,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  StepProps,
} from "@mui/material";

interface AgeRange {
  from: string;
  to: string;
}

const AudienceStep: React.FC<StepProps<any>> = ({ data, updateData }) => {
  const [locationType, setLocationType] = useState<"country" | "city">(
    "country",
  );
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [deviceLanguages, setDeviceLanguages] = useState<string[]>(["English"]);
  const [audienceSize, setAudienceSize] = useState<string>("570K - 720K");
  const [genders, setGenders] = useState<string[]>(["Male", "Female"]);
  const [ageRange, setAgeRange] = useState<AgeRange>({ from: "13", to: "50+" });
  const [interests, setInterests] = useState<string[]>([]);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  const toggleSelection = (
    item: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setter((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleAgeChange = (type: keyof AgeRange, value: string) => {
    setAgeRange((prev) => ({ ...prev, [type]: value }));
  };

  const handleInterestChange = (
    event: React.SyntheticEvent,
    newValue: string[],
  ) => {
    setInterests(newValue);
  };

  const mapMode = selectedCountry ? "place" : "view";
  const mapQuery = selectedCountry || "Earth";

  return (
    <div className="flex w-full space-x-6 p-6">
      <div className="flex w-3/5 flex-col gap-4 rounded border border-gray-300 p-3 px-4">
        <div>
          <h1 className="mb-1 text-2xl font-semibold">Audience Settings</h1>
          <p className="text-gray-400">
            Enter your ad targeted audience details
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-medium">Location (select type)</h2>
          <div className="flex justify-between space-x-2">
            <Button
              variant={locationType === "country" ? "contained" : "outlined"}
              onClick={() => setLocationType("country")}
              sx={{
                fontSize: "15px",
                padding: "0 16px", // Reset padding if necessary
                height: "30px", // Set desired height
                textTransform: "capitalize",
                width: "100%",
              }}
            >
              Country/Region
            </Button>
            <Button
              variant={locationType === "city" ? "contained" : "outlined"}
              onClick={() => setLocationType("city")}
              sx={{
                fontSize: "15px",
                padding: "0 16px", // Reset padding if necessary
                height: "30px", // Set desired height
                textTransform: "capitalize",
                width: "100%",
              }}
            >
              Targeting City
            </Button>
          </div>
        </div>

        <div>
          <CountryDropdown
            value={selectedCountry}
            onChange={handleCountryChange}
            classes="w-full p-2 border rounded"
          />
          <p className="mt-2 text-sm text-gray-600">
            Your ad will only be shown to the selected locations.
          </p>
        </div>

        <div>
          <h3 className="text-md mb-2 font-medium">Added list</h3>
          <div className="flex flex-wrap">
            {selectedCountry ? (
              <Chip
                label={selectedCountry}
                onDelete={() => setSelectedCountry("")}
                className="mb-2 mr-2"
              />
            ) : (
              <p className="w-full border border-gray-300 p-2 text-gray-400">
                No location selected
              </p>
            )}
          </div>
          {selectedCountry && (
            <Button
              onClick={() => setSelectedCountry("")}
              className="text-sm text-blue-500"
            >
              Clear all ×
            </Button>
          )}
        </div>

        <div>
          <h2 className="mb-2 text-lg font-medium">Demographic</h2>
          <h3 className="mb-2 text-base">Device language</h3>
          <div className="flex space-x-2">
            {["English", "Arabic"].map((lang) => (
              <Button
                key={lang}
                variant={
                  deviceLanguages.includes(lang) ? "contained" : "outlined"
                }
                onClick={() => toggleSelection(lang, setDeviceLanguages)}
                sx={{
                  fontSize: "15px",
                  padding: "0 16px", // Reset padding if necessary
                  height: "30px", // Set desired height
                  textTransform: "capitalize",
                }}
              >
                {lang} {deviceLanguages.includes(lang) && "✓"}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-base">Audience Gender</h3>
          <div className="flex space-x-2">
            {["Male", "Female"].map((gender) => (
              <Button
                key={gender}
                variant={genders.includes(gender) ? "contained" : "outlined"}
                onClick={() => toggleSelection(gender, setGenders)}
                sx={{
                  fontSize: "15px",
                  padding: "0 16px", // Reset padding if necessary
                  height: "30px", // Set desired height
                  textTransform: "capitalize",
                }}
              >
                {gender} {genders.includes(gender) && "✓"}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base">Age range</h3>
          <div className="flex items-center space-x-2">
            <FormControl className="w-24">
              <InputLabel>From</InputLabel>
              <Select
                value={ageRange.from}
                onChange={(
                  e: SelectChangeEvent<string>,
                  child: React.ReactNode,
                ) => handleAgeChange("from", e.target.value)}
                label="From"
                sx={{
                  fontSize: "15px",
                  height: "40px", // Set desired height
                  textTransform: "capitalize",
                  width: "100%",
                }}
              >
                {["13", "18", "25", "35", "45"].map((age) => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <span>-</span>
            <FormControl className="w-24">
              <InputLabel>To</InputLabel>
              <Select
                value={ageRange.to}
                onChange={(
                  e: SelectChangeEvent<string>,
                  child: React.ReactNode,
                ) => handleAgeChange("to", e.target.value)}
                label="To"
                sx={{
                  fontSize: "15px",
                  height: "40px", // Set desired height
                  textTransform: "capitalize",
                  width: "100%",
                }}
              >
                {["18", "25", "35", "45", "50+"].map((age) => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-medium">Custom settings</h2>
          <h3 className="mb-4 text-base">Target per interests (Optional)</h3>
          <Autocomplete
            multiple
            options={[
              "Automotive Enthusiasts",
              "Beachgoers & Surfers",
              "Tech Enthusiasts",
              "Foodies",
            ]}
            renderInput={(params) => (
              <TextField {...params} label="Add interests" />
            )}
            value={interests}
            onChange={handleInterestChange}
          />
          {interests.length > 0 && (
            <div className="mt-2 flex flex-col">
              <h4 className="text-sm">Added list</h4>
              <div className="mt-1 flex flex-wrap">
                {interests.map((interest) => (
                  <Chip
                    key={interest}
                    label={interest}
                    onDelete={() =>
                      setInterests(interests.filter((i) => i !== interest))
                    }
                    className="mb-2 mr-2"
                  />
                ))}
              </div>
              <Button
                onClick={() => setInterests([])}
                className="bg-black text-sm text-blue-500"
              >
                Clear all ×
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="mb-4 flex h-max w-2/5 flex-col items-center gap-2 rounded border border-gray-300 bg-gray-100 p-3 py-5 shadow">
        <div className="w-full pr-2">
          <GoogleMapsEmbed
            apiKey="YOUR_GOOGLE_MAPS_API_KEY"
            height={400}
            width="100%"
            mode={mapMode}
            q={mapQuery}
          />
        </div>
        <div className="w-full pl-2">
          <h2 className="mb-2 text-lg font-semibold">Map preview</h2>
          <h2 className="mb-2 font-medium">Available audience size</h2>
          <p className="text-xl font-bold text-black-2">{audienceSize}</p>
        </div>
      </div>
    </div>
  );
};

export default AudienceStep;
