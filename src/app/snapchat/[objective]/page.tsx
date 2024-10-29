'use client'
import CampaignHeader from "@/components/Campaign/CampaignHeader";
import CampaignLayout from "@/components/Campaign/CampaignLayout";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const {objective}=useParams()
  console.log(objective)
  return (
    <div>
      <CampaignHeader adType="snapchat"/>
      <CampaignLayout />
    </div>
  );
};

export default page;
