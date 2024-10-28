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

const getRemainingDuration=(endTime:any)=>{
    const currentData=new Date()
    const endDate = new Date(endTime);
    const timeDifference = endDate.getTime() - currentData.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

const ReportsTable: React.FC<CampaignsTableProps> = ({ campaigns }) => {

  console.log(campaigns)

  const getTotalImpression = (campaigns: any) => {
    let totalImpression = 0;
    campaigns.forEach((campaign:any) => {
      totalImpression += campaign.stats.impressions;
    });
    return totalImpression;
  };
  const getTotalSwipes = (campaigns: any) => {
    let totalSwipes = 0;
    campaigns.forEach((campaign:any) => {
      totalSwipes += campaign.stats.swipes;
    });
    return totalSwipes;
  };

  return (
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
              Impression
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Swipes
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Spent
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
                <td className="px-4 py-4 text-left">{campaign.campaignId.title}</td>
                
                <td className="px-4 py-4 text-left">{campaign?.campaignId?.campaignInfo?.objective}</td>
                <td className="px-4 py-4 text-left">{getRemainingDuration(campaign?.campaignId.campaignInfo.end_time)}</td>

                
                <td className="px-4 py-4 text-left">{getTotalImpression(campaign?.reportData)}</td>
                <td className="px-4 py-4 text-left">{getTotalSwipes(campaign?.reportData)}</td>
                <td className="px-4 py-4 text-left">{getTotalSwipes(campaign?.reportData)}</td>
                <td className="px-4 py-4 text-left">{campaign?.campaignId?.campaignInfo?.daily_budget_micro/1000000}</td>
                


          
                
            
                <td
                  className={`${campaign.status === "Active" ? "bg-green-100" : "bg-red-100"} px-4 py-4 text-left`}
                >
                  {campaign.campaignId.campaignInfo.status}
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

export default ReportsTable;
