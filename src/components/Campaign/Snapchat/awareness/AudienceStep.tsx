import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Box,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import axios from "axios";
import "leaflet/dist/leaflet.css";

interface AudienceStepProps {
  data: {
    locations: string[];
    deviceLanguage: string[];
  };
  updateData: (newData: Partial<AudienceStepProps["data"]>) => void;
}

const AudienceStep: React.FC<AudienceStepProps> = ({ data, updateData }) => {
  const [locationType, setLocationType] = useState<"country" | "city">(
    "country",
  );
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [mapData, setMapData] = useState<any>(null);
  const [audienceSize, setAudienceSize] = useState<string>("570K - 720K");

  useEffect(() => {
    if (selectedCountry) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?country=${selectedCountry}&format=geojson`,
        )
        .then((response) => {
          setMapData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching map data:", error);
        });
    }
  }, [selectedCountry]);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    updateData({ locations: [country] });
  };

  const handleDeviceLanguageChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    updateData({
      deviceLanguage: value as string[], // Ensure it's always an array
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Audience Settings
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Enter your ad targeted audience details
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Button
          variant={locationType === "country" ? "contained" : "outlined"}
          onClick={() => setLocationType("country")}
          sx={{ mr: 1 }}
        >
          Country/Region
        </Button>
        <Button
          variant={locationType === "city" ? "contained" : "outlined"}
          onClick={() => setLocationType("city")}
        >
          Targeting City
        </Button>
      </Box>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <CountryDropdown
          value={selectedCountry}
          onChange={handleCountryChange}
          style={{ padding: "10px", fontSize: "16px" }}
        />
      </FormControl>

      <Typography variant="body2" sx={{ mb: 2 }}>
        Your ad will only be shown to the selected locations.
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Added list</Typography>
        {data?.locations?.map((location) => (
          <Chip
            key={location}
            label={location}
            onDelete={() =>
              updateData({
                locations: data.locations.filter((l) => l !== location),
              })
            }
            sx={{ mr: 1, mb: 1 }}
          />
        ))}
      </Box>

      <Typography variant="h6" gutterBottom>
        Demographic
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="device-language-label">Device language</InputLabel>
        <Select
          labelId="device-language-label"
          multiple
          value={Array.isArray(data.deviceLanguage) ? data.deviceLanguage : []} // Ensure value is always an array
          onChange={handleDeviceLanguageChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
          {/* Add more MenuItems as needed */}
        </Select>
      </FormControl>

      <Box sx={{ display: "flex", mb: 2 }}>
        <Box sx={{ width: "50%", pr: 2 }}>
          <MapContainer
            center={[0, 0]}
            zoom={2}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {mapData && <GeoJSON data={mapData} />}
          </MapContainer>
        </Box>
        <Box sx={{ width: "50%", pl: 2 }}>
          <Typography variant="h6" gutterBottom>
            Map preview
          </Typography>
          <Typography variant="h6" gutterBottom>
            Available audience size
          </Typography>
          <Typography variant="h5">{audienceSize}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AudienceStep;
