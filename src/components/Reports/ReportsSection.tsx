// ReportsSection.tsx
"use client";
import React, {
  useState,
  useMemo,
  useCallback,
  MouseEvent,
  ChangeEvent,
} from "react";
import { BiFilter, BiSearch, BiX } from "react-icons/bi";
import CreateCampaign from "../Campaign/CreateCampaign";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Menu,
  Button,
  Box,
  Typography,
} from "@mui/material";
import GoogleIcon from "@/icons/GoogleIcon";
import SnapchatIcon from "@/icons/SnapchatIcon";

// Define the structure of a campaign
interface Campaign {
  name: string;
  objective: string;
  remainingDuration: string;
  impressions: number;
  clicks: number;
  eCPC: number;
  spend: number;
  totalBudget: number;
  status: string; // Added status for filtering purposes
}

// Sample campaign data
const campaignsData: Campaign[] = [
  {
    name: "Spring Sale Campaign",
    objective: "Increase Brand Awareness",
    remainingDuration: "10 days",
    impressions: 15000,
    clicks: 500,
    eCPC: 0.3,
    spend: 150,
    totalBudget: 500,
    status: "Active",
  },
  {
    name: "Summer Promotion",
    objective: "Generate Leads",
    remainingDuration: "5 days",
    impressions: 20000,
    clicks: 800,
    eCPC: 0.25,
    spend: 200,
    totalBudget: 800,
    status: "Paused",
  },
  // Add more campaign objects as needed
];

// Props for CustomButton
interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

// CustomButton Component with React.memo for optimization
// eslint-disable-next-line react/display-name
const CustomButton: React.FC<CustomButtonProps> = React.memo(
  ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyle =
      "px-3 py-1.5 rounded-lg font-medium text-sm transition-colors duration-200";
    const variants: Record<string, string> = {
      primary: "bg-violet-500 hover:bg-violet-600 text-white",
      outline: "border border-gray-200 hover:bg-gray-50 text-gray-700",
    };

    return (
      <button
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

// Props for CustomInput
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// CustomInput Component with React.memo for optimization
// eslint-disable-next-line react/display-name
const CustomInput: React.FC<CustomInputProps> = React.memo(
  ({ className = "", ...props }) => {
    return (
      <input
        className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 ${className}`}
        {...props}
      />
    );
  },
);

// ReportsSection Component
const ReportsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [objectiveFilter, setObjectiveFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  // State for Filter Menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Handle opening the filter menu
  const handleFilterClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );

  // Handle closing the filter menu
  const handleFilterClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  // Handle search input change
  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [],
  );

  // Handle Objective filter change
  const handleObjectiveChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      setObjectiveFilter(event.target.value);
    },
    [],
  );

  // Handle Status filter change
  const handleStatusChange = useCallback((event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value);
  }, []);

  // Get unique objectives and statuses for filter dropdowns
  const objectives = useMemo(() => {
    const objs = campaignsData.map((campaign) => campaign.objective);
    return Array.from(new Set(objs));
  }, []);

  const statuses = useMemo(() => {
    const sts = campaignsData.map((campaign) => campaign.status);
    return Array.from(new Set(sts));
  }, []);

  // Filtered campaigns based on search and filters
  const filteredCampaigns = useMemo(() => {
    return campaignsData.filter((campaign) => {
      const matchesSearch = campaign.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesObjective = objectiveFilter
        ? campaign.objective === objectiveFilter
        : true;
      const matchesStatus = statusFilter
        ? campaign.status === statusFilter
        : true;
      return matchesSearch && matchesObjective && matchesStatus;
    });
  }, [searchTerm, objectiveFilter, statusFilter]);

  // Handle resetting all filters
  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setObjectiveFilter("");
    setStatusFilter("");
    handleFilterClose();
  }, [handleFilterClose]);

  // Determine if any filter is active
  const isFilterActive = useMemo(() => {
    return objectiveFilter !== "" || statusFilter !== "";
  }, [objectiveFilter, statusFilter]);

  return (
    <div className="h-[80vh] w-full rounded bg-white px-4 py-4">
      {/* Header Section */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Campaigns Overview
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Check out insights, get complete reports, and adjust metrics for
            improved marketing strategies.
          </p>
        </div>
        <CreateCampaign />
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <BiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <CustomInput
            type="text"
            placeholder="Search campaign"
            className="pl-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Filter and Clear Filter Buttons */}
        <div className="flex items-center gap-2">
          {/* Filter Dropdown */}
          <div>
            <CustomButton
              variant="outline"
              className="flex items-center gap-1"
              onClick={handleFilterClick}
              aria-controls={open ? "filter-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <BiFilter className="h-4 w-4" />
              Filter
            </CustomButton>
            <Menu
              id="filter-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleFilterClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: { minWidth: 220, padding: 1 },
              }}
            >
              <Box sx={{ p: 0.5, borderRadius: 1 }}>
                {/* Objective Filter */}
                <FormControl
                  fullWidth
                  variant="outlined"
                  size="small"
                  margin="dense"
                >
                  <InputLabel id="objective-filter-label">Objective</InputLabel>
                  <Select
                    labelId="objective-filter-label"
                    value={objectiveFilter}
                    onChange={handleObjectiveChange}
                    label="Objective"
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    {objectives.map((obj) => (
                      <MenuItem key={obj} value={obj}>
                        {obj}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Status Filter */}
                <FormControl
                  fullWidth
                  variant="outlined"
                  size="small"
                  margin="dense"
                >
                  <InputLabel id="status-filter-label">Status</InputLabel>
                  <Select
                    labelId="status-filter-label"
                    value={statusFilter}
                    onChange={handleStatusChange}
                    label="Status"
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    {statuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Reset Filters Button */}
                <Box mt={1} display="flex" justifyContent="flex-end">
                  <Button
                    variant="text"
                    color="primary"
                    onClick={resetFilters}
                    startIcon={<BiX />}
                    size="small"
                  >
                    Clear
                  </Button>
                </Box>
              </Box>
            </Menu>
          </div>

          {/* Clear Filters Button (visible only when filters are active) */}
          {isFilterActive && (
            <CustomButton
              variant="outline"
              className="flex items-center gap-1"
              onClick={resetFilters}
            >
              <BiX className="h-4 w-4" />
              Clear Filters
            </CustomButton>
          )}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="border border-gray-300 bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Objective
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Remaining Duration
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Impressions
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Clicks
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                eCPC
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Spend
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Total Budget
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="px-4 py-4 text-left">{campaign.name}</td>
                  <td className="px-4 py-4 text-left">{campaign.objective}</td>
                  <td className="px-4 py-4 text-left">
                    {campaign.remainingDuration}
                  </td>
                  <td className="px-4 py-4 text-left">
                    {campaign.impressions}
                  </td>
                  <td className="px-4 py-4 text-left">{campaign.clicks}</td>
                  <td className="px-4 py-4 text-left">
                    ${campaign.eCPC.toFixed(2)}
                  </td>
                  <td className="px-4 py-4 text-left">
                    ${campaign.spend.toFixed(2)}
                  </td>
                  <td className="px-4 py-4 text-left">
                    ${campaign.totalBudget.toFixed(2)}
                  </td>
                  <td
                    className={`${campaign.status === "Active" ? "bg-green-100" : "bg-red-100"} px-4 py-4 text-left`}
                  >
                    {campaign.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 text-center" colSpan={9}>
                  <div className="flex flex-col items-center justify-center py-12">
                    {/* Placeholder campaign cards */}
                    <div className="mb-4 flex flex-col gap-4">
                      <div className="mr-10 flex items-center gap-3 rounded-lg bg-gray-50 px-6 py-3">
                        <GoogleIcon size={24} />
                        <div className="h-4 w-16 rounded bg-gray-200"></div>
                        <div className="h-4 w-16 rounded bg-gray-200"></div>
                        <div className="h-4 w-16 rounded bg-green-100"></div>
                      </div>
                      <div className="ml-10 flex items-center gap-3 rounded-lg bg-gray-50 px-6 py-3">
                        <SnapchatIcon size={24} />
                        <div className="h-4 w-16 rounded bg-gray-200"></div>
                        <div className="h-4 w-16 rounded bg-gray-200"></div>
                        <div className="h-4 w-16 rounded bg-yellow-100"></div>
                      </div>
                    </div>
                    <span className="text-gray-500">
                      {filteredCampaigns.length === 0
                        ? "No campaigns found."
                        : "You have no campaigns yet!"}
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsSection;
