import React, { useState } from "react";
import { Tabs, Tab, Switch } from "@mui/material";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

interface BudgetStepProps {
  data?: any;
  updateData?: (newData: any) => void;
}

// Define DateValueType to align with what the Datepicker expects
interface DateValueTypeNonNull {
  startDate: Date | null; // Make sure to use the correct type
  endDate: Date | null; // Same here
}

const BudgetStep: React.FC<BudgetStepProps> = ({ data, updateData }) => {
  const [tabValue, setTabValue] = useState(0);
  const [adDuration, setAdDuration] = useState<number>(7);
  const [dailyBudget, setDailyBudget] = useState<number>(375);
  const [frequencyCapping, setFrequencyCapping] = useState<boolean>(false);
  const [performanceView, setPerformanceView] = useState<"Daily" | "Weekly">(
    "Daily",
  );

  // Initialize dateRange with valid Date values
  const [dateRange, setDateRange] = useState<any>({
    startDate: new Date(), // Initial start date
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)), // Initial end date
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleAdDurationChange = (duration: number) => {
    setAdDuration(duration);
  };

  const handleFrequencyCappingToggle = () => {
    setFrequencyCapping((prev) => !prev);
  };

  const handlePerformanceViewChange = (view: "Daily" | "Weekly") => {
    setPerformanceView(view);
  };

  const handleDateRangeChange = (newValue: any) => {
    setDateRange(newValue);

    // If both start and end dates are present, calculate ad duration
    if (newValue.startDate && newValue.endDate) {
      const diff = Math.ceil(
        (newValue.endDate.getTime() - newValue.startDate.getTime()) /
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
  const reachMultiplier = performanceView === "Daily" ? 1 : 7;
  const reach = dailyBudget * 40 * reachMultiplier;
  const impressions = dailyBudget * 300 * reachMultiplier;

  const durationText =
    adDuration % 7 === 0 && adDuration <= 30
      ? adDuration === 7
        ? "1 Week"
        : adDuration === 14
          ? "2 Weeks"
          : "1 Month"
      : `${adDuration} Days`;

  // Format dates for display
  const formattedStartDate = dateRange.startDate
    ? dateRange.startDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A"; // Default if null

  const formattedEndDate = dateRange.endDate
    ? dateRange.endDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A"; // Default if null

  return (
    <div className="w-full p-4">
      <div className="mt-4 flex space-x-4">
        {/* Left Column */}
        <div className="flex w-3/5 flex-1 flex-col gap-4 rounded border border-gray-300 p-4">
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab
              label="Recommended"
              sx={{
                fontSize: "15px",
                height: "40px", // Set desired height
                textTransform: "capitalize",
                width: "50%",
              }}
            />
            <Tab
              label="Custom"
              sx={{
                fontSize: "15px",
                height: "40px", // Set desired height
                textTransform: "capitalize",
                width: "50%",
              }}
            />
          </Tabs>
          <h5 className="text-lg font-semibold">
            {tabValue === 0
              ? "Set up your budget & duration"
              : "Customize campaign budget and duration"}
          </h5>

          {tabValue === 0 ? (
            <>
              {/* Recommended Section */}
              <h6 className="font-medium">Ad Duration</h6>
              <div className="mb-2 flex">
                {[7, 14, 30].map((duration) => (
                  <button
                    key={duration}
                    className={`mr-2 rounded px-4 py-1 ${
                      adDuration === duration
                        ? "bg-blue-500 text-white"
                        : "border text-gray-700"
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
              </div>

              <h6 className="mb-2 font-medium">Daily Budget</h6>
              <div className="mb-4 flex justify-between space-x-2">
                {[150, 375, 600].map((budget) => (
                  <div
                    key={budget}
                    className={`cursor-pointer rounded p-4 px-2 text-center shadow ${
                      dailyBudget === budget
                        ? "border-2 border-blue-400"
                        : "border border-gray-200"
                    }`}
                    onClick={() => setDailyBudget(budget)}
                  >
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
            </>
          ) : (
            <>
              {/* Custom Section */}
              <h6 className="mb-2 text-lg font-medium">Ad duration</h6>
              <div className="mb-4">
                <Datepicker
                  value={dateRange}
                  onChange={handleDateRangeChange}
                  showShortcuts={true}
                />
              </div>

              <h6 className="mb-2 text-lg font-medium">Daily budget</h6>
              <div className="mb-2">
                <input
                  type="number"
                  value={dailyBudget}
                  onChange={handleDailyBudgetChange}
                  className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min={0}
                />
              </div>
            </>
          )}

          <div className="mb-2 flex items-center justify-between">
            <h6 className="font-medium">Set Frequency Capping (Optional)</h6>
            <Switch
              checked={frequencyCapping}
              onChange={handleFrequencyCappingToggle}
              color="primary"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex h-max w-2/5 flex-col gap-4 rounded border border-gray-300 bg-gray-100 p-4 shadow">
          <div>
            <h6 className="text-center text-lg font-medium text-black">
              Available Audience Size
            </h6>
            <p className="mb-2 text-center text-xs text-gray-500">
              Increase budget to reach more of available audience.
            </p>
            <h6 className="border-b border-gray-300 text-center text-2xl font-semibold text-black-2">
              33K - 120K
            </h6>
          </div>
          <div>
            <h6 className="text-center font-medium text-black">
              Estimated Campaign Performance
            </h6>
            <p className="mb-2 text-center text-xs text-gray-600">
              Following your estimated reach, based on your budget.
            </p>
            <div className="my-2 flex">
              {(["Daily", "Weekly"] as const).map((view) => (
                <button
                  key={view}
                  className={`mt-2 w-full border border-gray-300 px-4 py-1 ${
                    performanceView === view
                      ? "bg-gray-200 font-semibold text-blue-900"
                      : "text-gray-600"
                  }`}
                  onClick={() => handlePerformanceViewChange(view)}
                >
                  {view}
                </button>
              ))}
            </div>
            <div className="mb-2 grid w-full grid-cols-2 gap-2">
              <div className="w-full rounded bg-gradient-to-bl from-green-400 to-slate-800 p-4 py-2">
                <p className="mb-2 border-b text-lg text-white">Reach</p>
                <h6 className="text-sm font-medium text-white">
                  {reach.toLocaleString()} - {(reach * 1.5).toLocaleString()}
                </h6>
              </div>
              <div className="w-full rounded bg-gradient-to-bl from-green-400 to-slate-800 p-4 py-2">
                <p className="mb-2 border-b text-lg text-white">Impressions</p>
                <h6 className="text-sm font-medium text-white">
                  {impressions.toLocaleString()} -{" "}
                  {(impressions * 1.5).toLocaleString()}
                </h6>
              </div>
              <div className="w-full rounded bg-gradient-to-bl from-green-400 to-slate-800 p-4 py-2">
                <p className="mb-2 border-b text-base text-white">
                  Daily Budget
                </p>
                <h6 className="text-lg font-medium text-white">
                  {dailyBudget} SAR daily
                </h6>
              </div>
              <div className="w-full rounded bg-gradient-to-bl from-green-400 to-slate-800 p-4 py-2">
                <p className="mb-2 border-b text-base text-white">
                  Total Budget
                </p>
                <h6 className="text-lg font-medium text-white">
                  {totalBudget} SAR total
                </h6>
              </div>
            </div>
            <div className="w-full rounded bg-gradient-to-bl from-slate-700 to-slate-800 p-4 py-2">
              <p className="text-sm text-white">Duration</p>
              <p className="text-base text-white">
                {formattedStartDate} - {formattedEndDate}
              </p>
            </div>
            <div className="mt-2 w-full rounded bg-gradient-to-bl from-slate-700 to-slate-800 p-4 py-2">
              <h6 className="text-lg font-medium text-white">{durationText}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetStep;
