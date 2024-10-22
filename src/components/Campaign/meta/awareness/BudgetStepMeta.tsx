import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Datepicker from "react-tailwindcss-datepicker";

interface BudgetStepProps {
  data?: any;
  updateData?: (newData: any) => void;
}

const BudgetStepMeta: React.FC<BudgetStepProps> = ({ data, updateData }) => {
  const [tabValue, setTabValue] = useState(0);
  const [adDuration, setAdDuration] = useState<any>(7);
  const [dailyBudget, setDailyBudget] = useState<number>(375);

  const [dateRange, setDateRange] = useState<any>({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleAdDurationChange = (duration: number) => {
    setAdDuration(duration);

    // Update the end date based on duration
    const newEndDate = new Date(dateRange.startDate);
    newEndDate.setDate(newEndDate.getDate() + duration);
    setDateRange({
      ...dateRange,
      endDate: newEndDate,
    });
  };

  const handleDateRangeChange = (newValue: any) => {
    setDateRange(newValue);
    if (newValue.startDate && newValue.endDate) {
      const diff = Math.ceil(
        (new Date(newValue.endDate).getTime() -
          new Date(newValue.startDate).getTime()) /
          (1000 * 60 * 60 * 24),
      );
      setAdDuration(diff);
    }
  };

  const handleDailyBudgetChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDailyBudget(Math.max(0, Number(event.target.value)));
  };

  // Calculations
  const totalBudget = dailyBudget * adDuration;
  const reach = dailyBudget * 40;
  const impressions = dailyBudget * 300;

  // Format dates for display
  const formattedStartDate = dateRange.startDate
    ? new Date(dateRange.startDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  const formattedEndDate = dateRange.endDate
    ? new Date(dateRange.endDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  const durationText =
    adDuration === 7
      ? "1 Week"
      : adDuration === 14
        ? "2 Weeks"
        : adDuration === 30
          ? "1 Month"
          : `${adDuration} Days`;

  return (
    <div className="w-full p-4">
      <h3 className="mb-6 text-xl font-semibold text-gray-700">
        Bidding and budget
      </h3>
      <p className="mb-4 text-sm text-gray-600">
        Choose your daily budget and duration
      </p>

      <div className="mt-4 flex space-x-4">
        {/* Main Content Column */}
        <div className="flex w-3/5 flex-1 flex-col gap-4 rounded border border-gray-300 p-4">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            className="mb-6"
          >
            <Tab
              label="Recommended budget"
              sx={{
                textTransform: "none",
                fontSize: "14px",
                fontWeight: "normal",
                color: tabValue === 0 ? "#3B82F6" : "#6B7280",
              }}
            />
            <Tab
              label="Enter budget manually"
              sx={{
                textTransform: "none",
                fontSize: "14px",
                fontWeight: "normal",
                color: tabValue === 1 ? "#3B82F6" : "#6B7280",
              }}
            />
          </Tabs>

          {tabValue === 0 ? (
            // Recommended Section
            <>
              <h5 className="text-lg font-semibold">
                Set up your budget & duration
              </h5>
              <div>
                <h6 className="mb-2 font-medium">Ad Duration</h6>
                <div className="mb-4 flex space-x-2">
                  {[7, 14, 30].map((duration) => (
                    <button
                      key={duration}
                      className={`rounded-md px-4 py-2 ${
                        adDuration === duration
                          ? "bg-blue-500 text-white"
                          : "border border-gray-300 text-gray-700"
                      }`}
                      onClick={() => handleAdDurationChange(duration)}
                    >
                      {duration === 7
                        ? "1 Week"
                        : duration === 14
                          ? "2 Weeks"
                          : "1 Month"}
                    </button>
                  ))}
                  <button
                    className={`rounded-md px-4 py-2 ${
                      adDuration === "custom"
                        ? "bg-blue-500 text-white"
                        : "border border-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleAdDurationChange("custom")}
                  >
                    Custom
                  </button>
                </div>

                <div className="mb-4">
                  <Datepicker
                    value={dateRange}
                    onChange={handleDateRangeChange}
                    inputClassName="w-full rounded-md border border-gray-300 p-2"
                    displayFormat="DD/MM/YYYY"
                  />
                </div>

                <h6 className="mb-2 font-medium">Daily Budget</h6>
                <div className="space-y-3">
                  {[150, 375, 600].map((budget) => (
                    <div
                      key={budget}
                      className={`cursor-pointer rounded-md p-4 shadow transition-all ${
                        dailyBudget === budget
                          ? "border-2 border-blue-400"
                          : "border border-gray-200"
                      }`}
                      onClick={() => setDailyBudget(budget)}
                    >
                      <p className="mb-2 w-max border-b border-gray-300 pb-2 text-base font-semibold text-gray-600">
                        {budget === 150
                          ? "Novice"
                          : budget === 375
                            ? "Medium"
                            : "Advanced"}
                      </p>
                      <h6 className="text-lg font-medium">{budget} SAR</h6>
                      <p className="text-sm text-gray-600">
                        {budget === 150
                          ? "Minimum spend required for any results."
                          : budget === 375
                            ? "Recommended spend for more effective results."
                            : "Spend this to get maximum optimized results."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // Manual Budget Section
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Daily budget
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={dailyBudget}
                    onChange={handleDailyBudgetChange}
                    className="w-full rounded-md border border-gray-300 p-2 pr-12 focus:border-blue-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    SAR
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Duration
                </label>
                <div className="flex gap-2">
                  {[
                    { duration: 7, label: "1 Week" },
                    { duration: 14, label: "2 Week" },
                    { duration: 30, label: "Month" },
                    { duration: "custom", label: "Custom" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleAdDurationChange(option.duration)}
                      className={`rounded-md px-4 py-2 text-sm ${
                        adDuration === option.duration
                          ? "bg-blue-50 text-blue-600 ring-1 ring-blue-500"
                          : "bg-white text-gray-700 ring-1 ring-gray-300"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <Datepicker
                    value={dateRange}
                    onChange={handleDateRangeChange}
                    inputClassName="w-full rounded-md border border-gray-300 p-2"
                    displayFormat="DD/MM/YYYY"
                  />
                </div>
              </div>
            </div>
          )}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Total budget
            </label>
            <div className="relative">
              <input
                type="number"
                value={dailyBudget}
                onChange={handleDailyBudgetChange}
                className="w-full rounded-md border border-gray-300 p-2 pr-12 focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-80"
                disabled
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                SAR
              </span>
            </div>
          </div>
        </div>

        {/* Performance Metrics Column */}
        <div className="flex h-max w-2/5 flex-col gap-4 rounded border border-gray-300 bg-gray-100 p-4">
          <div>
            <h6 className="text-center font-medium">
              Estimated Campaign Performance
            </h6>
            <p className="mb-4 text-center text-xs text-gray-600">
              Following your estimated reach, based on your budget.
            </p>

            <div className="space-y-2">
              <div className="rounded-md bg-gradient-to-bl from-green-400 to-slate-800 p-4">
                <p className="mb-2 border-b text-base text-white">
                  Total Budget
                </p>
                <h6 className="text-lg font-medium text-white">
                  {totalBudget} SAR total
                </h6>
              </div>

              <div className="rounded-md bg-gradient-to-bl from-slate-700 to-slate-800 p-4">
                <p className="text-sm text-white">Duration</p>
                <p className="text-base text-white">
                  {formattedStartDate} - {formattedEndDate}
                </p>
              </div>

              <div className="rounded-md bg-gradient-to-bl from-slate-700 to-slate-800 p-4">
                <h6 className="text-lg font-medium text-white">
                  {durationText}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetStepMeta;
