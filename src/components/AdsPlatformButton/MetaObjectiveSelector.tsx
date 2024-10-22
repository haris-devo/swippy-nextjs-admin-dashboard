import React from "react";
import {
  FaRegHandshake,
  FaVideo,
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaStore,
  FaRegComments,
} from "react-icons/fa";
import ObjectiveCard from "./ObjectiveCard";
import { BiPhoneCall } from "react-icons/bi";

const objectives = [
  {
    title: "Brand Awareness",
    description:
      "Show your advertisements to people who are most likely to keep them in mind. Guide traffic towards a particular destination, website, app, or Meta Pages",
    icon: <BiPhoneCall size={32} color="#1976d2" />,
    link: "/meta/awareness",
  },

  {
    title: "Engagement",
    description:
      "The text encourages users to increase engagement metrics on social media, specifically by enhancing the number of messages, video views, post interactions, Page likes, and event responses",
    icon: <FaRegComments size={32} color="#1976d2" />,
    link: "/meta/engagement",
  },
];

const MetaObjectiveSelector: any = () => {
  return (
    <div className="min-h-[60vh] w-full p-2">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-[#1976d2]">
          Choose Your Meta Campaign Objective
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <ObjectiveCard key={index} {...objective} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaObjectiveSelector;
