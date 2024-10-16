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
} from "@mui/material";
import ReportsTable from "./ReprotsTable";
import { campaignsData } from "@/data/ReportsData";

// Button component
interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

const CustomButton = React.memo<CustomButtonProps>(
  ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyle =
      "px-3 py-1.5 rounded-lg font-medium text-sm transition-colors duration-200";
    const variants = {
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

CustomButton.displayName = "CustomButton";

// Input component
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const CustomInput = React.memo<CustomInputProps>(
  ({ className = "", ...props }) => {
    return (
      <input
        className={`w-full rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 ${className}`}
        {...props}
      />
    );
  },
);

CustomInput.displayName = "CustomInput";

const ReportsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [objectiveFilter, setObjectiveFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleFilterClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );

  const handleFilterClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [],
  );

  const handleObjectiveChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      setObjectiveFilter(event.target.value);
    },
    [],
  );

  const handleStatusChange = useCallback((event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value);
  }, []);

  const objectives = useMemo(() => {
    const objs = campaignsData.map((campaign) => campaign.objective);
    return Array.from(new Set(objs));
  }, []);

  const statuses = useMemo(() => {
    const sts = campaignsData.map((campaign) => campaign.status);
    return Array.from(new Set(sts));
  }, []);

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

  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setObjectiveFilter("");
    setStatusFilter("");
    handleFilterClose();
  }, [handleFilterClose]);

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

      {/* Campaigns Table */}
      <ReportsTable campaigns={filteredCampaigns} />
    </div>
  );
};

export default ReportsSection;
