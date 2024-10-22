import React from "react";
import InstagramPreview from "./InstagramPreview";
import FacebookPreview from "./FacebookPreview";
import { AdData } from "../types";

interface AdPreviewProps {
  platform: string;
  ad: AdData;
  campaignName: string;
}

const AdPreview: React.FC<AdPreviewProps> = ({
  platform,
  ad,
  campaignName,
}) => (
  <div className="mt-3">
    <p className="mb-4 text-lg font-semibold text-black-2">Ad live preview!</p>
    {platform === "Instagram" ? (
      <InstagramPreview
        mediaUrl={ad.mediaUrl}
        mediaType={ad.media?.type}
        campaignName={campaignName}
      />
    ) : (
      <FacebookPreview
        mediaUrl={ad.mediaUrl}
        mediaType={ad.media?.type}
        headline={ad.headline}
        campaignName={campaignName}
      />
    )}
  </div>
);

export default AdPreview;
