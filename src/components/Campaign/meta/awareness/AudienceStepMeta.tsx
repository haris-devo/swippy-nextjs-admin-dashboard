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
  OutlinedInput,
} from "@mui/material";

interface AgeRange {
  from: string;
  to: string;
}

const AudienceStepMeta = ({
  data,
  updateData,
}: {
  data?: any;
  updateData: (data: any) => void;
}) => {
  const [locationType, setLocationType] = useState<"country" | "city">(
    "country",
  );
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [deviceLanguages, setDeviceLanguages] = useState<string[]>([
    "English",
    "Arabic",
  ]);
  const [audienceSize, setAudienceSize] = useState<string>("8M - 9.5M");
  const [genders, setGenders] = useState<string[]>(["All"]);
  const [ageRange, setAgeRange] = useState<AgeRange>({ from: "18", to: "65+" });
  const [interests, setInterests] = useState<string[]>([]);

  const handleCountryChange = (
    event: SelectChangeEvent<typeof selectedCountries>,
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedCountries(typeof value === "string" ? value.split(",") : value);
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

  const mapMode = selectedCountries.length > 0 ? "place" : "view";
  const mapQuery =
    selectedCountries.length > 0 ? selectedCountries.join(",") : "Earth";

  return (
    <div className="flex w-full space-x-6 p-6">
      <div className="flex w-3/5 flex-col gap-4 rounded border border-gray-300 p-3 px-4">
        <div>
          <h1 className="mb-1 text-2xl font-semibold">Your target audience</h1>
          <p className="text-gray-400">
            The stronger your keywords are, the more chance you have to reach
            the right audience.
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
                padding: "0 16px",
                height: "30px",
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
                padding: "0 16px",
                height: "30px",
                textTransform: "capitalize",
                width: "100%",
              }}
            >
              Cities
            </Button>
          </div>
        </div>

        <FormControl>
          <InputLabel>Select Countries/Regions</InputLabel>
          <Select
            multiple
            value={selectedCountries}
            onChange={handleCountryChange}
            input={<OutlinedInput label="Select Countries/Regions" />}
            renderValue={(selected) => (
              <div className="flex flex-wrap gap-1">
                {selected.map((value) => (
                  <Chip key={value} label={value} size="small" />
                ))}
              </div>
            )}
            className="w-full"
          >
            {CountryRegionData.map(([country]) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p className="mt-2 text-sm text-gray-600">
          Your ad will only be shown to the selected locations.
        </p>

        <div>
          <h3 className="text-md mb-2 font-medium">Added list</h3>
          <div className="flex flex-wrap">
            {selectedCountries.length > 0 ? (
              selectedCountries.map((country) => (
                <Chip
                  key={country}
                  label={country}
                  onDelete={() =>
                    setSelectedCountries(
                      selectedCountries.filter((c) => c !== country),
                    )
                  }
                  className="mb-2 mr-2"
                />
              ))
            ) : (
              <p className="w-full border border-gray-300 p-2 text-gray-400">
                No location selected
              </p>
            )}
          </div>
          {selectedCountries.length > 0 && (
            <Button
              onClick={() => setSelectedCountries([])}
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
                  padding: "0 16px",
                  height: "30px",
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
            {["All", "Male", "Female"].map((gender) => (
              <Button
                key={gender}
                variant={genders.includes(gender) ? "contained" : "outlined"}
                onClick={() => setGenders([gender])}
                sx={{
                  fontSize: "15px",
                  padding: "0 16px",
                  height: "30px",
                  textTransform: "capitalize",
                }}
              >
                {gender}
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
                onChange={(e: SelectChangeEvent<string>) =>
                  handleAgeChange("from", e.target.value)
                }
                label="From"
                sx={{
                  fontSize: "15px",
                  height: "40px",
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
                onChange={(e: SelectChangeEvent<string>) =>
                  handleAgeChange("to", e.target.value)
                }
                label="To"
                sx={{
                  fontSize: "15px",
                  height: "40px",
                  textTransform: "capitalize",
                  width: "100%",
                }}
              >
                {["18", "25", "35", "45", "65+"].map((age) => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
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
          <h2 className="mb-2 font-medium">Estimated audience size</h2>
          <p className="text-xl font-bold text-black-2">{audienceSize}</p>
          <p className="text-sm text-gray-600">
            Estimates may vary significantly over time based on your targeting
            selections and available data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudienceStepMeta;
