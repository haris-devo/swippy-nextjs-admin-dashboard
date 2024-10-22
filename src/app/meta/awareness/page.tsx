import CampaignHeader from "@/components/Campaign/CampaignHeader";
import CampaignLayoutMeta from "@/components/Campaign/CampaignLayoutMeta";
import React from "react";

const page = () => {
  return (
    <div>
      <CampaignHeader campaignType="awareness" adType="meta" />
      <CampaignLayoutMeta />
    </div>
  );
};

export default page;
