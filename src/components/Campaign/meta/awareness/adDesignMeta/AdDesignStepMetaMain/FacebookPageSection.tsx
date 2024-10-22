// src/components/AdDesignStepMeta/FacebookPageSection.tsx

import React from "react";

interface FacebookPageSectionProps {
  pageName: string;
}

const FacebookPageSection: React.FC<FacebookPageSectionProps> = ({
  pageName,
}) => (
  <div className="mb-5">
    <p className="mb-2 font-medium">Facebook Page</p>
    <div className="flex items-center gap-3 rounded-lg border border-gray-300 p-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg text-white">
        C
      </div>
      <p className="text-gray-700">{pageName}</p>
    </div>
  </div>
);

export default FacebookPageSection;
