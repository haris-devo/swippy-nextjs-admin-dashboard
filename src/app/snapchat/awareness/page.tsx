import CampaignHeader from "@/components/Campaign/CampaignHeader";
import CampaignLayout from "@/components/Campaign/CampaignLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <CampaignHeader campaignType="awareness" adType="snapchat" />
      <CampaignLayout />
    </div>
  );
};

export default page;
