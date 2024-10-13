import React from "react";
import { BsSnapchat } from "react-icons/bs";

const CampaignHeader = () => {
  return (
    <div className="flex h-14 w-full items-center border-b border-gray-300 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Swippy</h1>
        <div className="flex items-center space-x-2 font-semibold text-black-2">
          <BsSnapchat />
          <span>Snapchat - Awareness</span>
        </div>
        <div className="" />
      </div>
    </div>
  );
};

export default CampaignHeader;
