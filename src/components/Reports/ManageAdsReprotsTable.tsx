// CampaignsTable.tsx
"use client";
import React from "react";
import GoogleIcon from "@/icons/GoogleIcon";
import SnapchatIcon from "@/icons/SnapchatIcon";


const getDuration=(startTime:any,endTime:any)=>{
  //get duration in days
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;

}

interface CampaignsTableProps {
  campaigns: any[];
}

const ManageAdsReports: React.FC<CampaignsTableProps> = ({ campaigns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="border border-gray-300 bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Plateform
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Objective
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Ad Type
            </th>
            
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Duration
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Daily Budget
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {campaigns.length > 0 ? (
            campaigns.map((campaign, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-4 py-4 text-left">{campaign.title}</td>
                <td className="px-4 py-4 text-left">{campaign.type}</td>
                
                <td className="px-4 py-4 text-left">{campaign.campaignInfo.objective}</td>
                <td className="px-4 py-4 text-left">{campaign.campaignInfo.type}</td>
                <td className="px-4 py-4 text-left">
                  {/* {campaign.remainingDuration} */}
                  {
                    getDuration(campaign.campaignInfo.start_time,campaign.campaignInfo.end_time)
                  }
                </td>
                
                <td className="px-4 py-4 text-left">
                  ${((campaign.campaignInfo.daily_budget_micro)/1000000).toFixed(2)}
                </td>
                <td
                  className={`${campaign.status === "Active" ? "bg-green-100" : "bg-red-100"} px-4 py-4 text-left`}
                >
                  {campaign.campaignInfo.status}
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
                    {campaigns.length === 0
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
  );
};

export default ManageAdsReports;
