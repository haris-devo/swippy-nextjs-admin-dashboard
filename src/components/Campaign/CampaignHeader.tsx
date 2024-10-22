import React from "react";
import GoogleIcon from "@/icons/GoogleIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import MetaIcon from "@/icons/MetaIcon";
import YouTubeIcon from "@/icons/YoutubeIcon";
import SnapchatIcon from "@/icons/SnapchatIcon";
import Link from "next/link";
import ShahidIcon from "@/icons/Shahidicon";

// Define the allowed ad platform types
type AdPlatform =
  | "google"
  | "twitter"
  | "meta"
  | "shahid"
  | "youtube"
  | "snapchat";

// Define the campaign types
type CampaignType = "awareness" | "consideration" | "conversion";

// Define the props interface
interface CampaignHeaderProps {
  adType: AdPlatform;
  campaignType?: CampaignType;
}

// Define the platform configurations
const platformConfig: Record<
  AdPlatform,
  {
    icon: React.ReactElement;
    name: string;
  }
> = {
  google: {
    icon: <GoogleIcon />,
    name: "Google",
  },
  twitter: {
    icon: <TwitterIcon />,
    name: "Twitter",
  },
  meta: {
    icon: <MetaIcon />,
    name: "Meta",
  },
  shahid: {
    icon: <ShahidIcon />,
    name: "Shahid",
  },
  youtube: {
    icon: <YouTubeIcon />,
    name: "YouTube",
  },
  snapchat: {
    icon: <SnapchatIcon />,
    name: "Snapchat",
  },
};

const CampaignHeader: React.FC<CampaignHeaderProps> = ({
  adType,
  campaignType = "awareness",
}) => {
  const platform = platformConfig[adType];

  return (
    <div className="flex h-14 w-full items-center border-b border-gray-300 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          Swippy
        </Link>
        <div className="flex items-center space-x-2 font-semibold text-black-2">
          {platform.icon}
          <span>
            {platform.name} -{" "}
            {campaignType.charAt(0).toUpperCase() + campaignType.slice(1)}
          </span>
        </div>
        <div className="" />
      </div>
    </div>
  );
};

export default CampaignHeader;
