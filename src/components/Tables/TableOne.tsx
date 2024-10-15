import React from "react";
import GoogleIcon from "@/icons/GoogleIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import MetaIcon from "@/icons/MetaIcon";
import ShahidIcon from "@/icons/Shahidicon";
import YouTubeIcon from "@/icons/YoutubeIcon";
import SnapchatIcon from "@/icons/SnapchatIcon";

const adPlatformData = [
  {
    icon: <SnapchatIcon size={24} />,
    name: "Snapchat Ads",
    visitors: 2.8,
    revenues: "4,892",
    sales: 430,
    conversion: 3.9,
  },
  {
    icon: <GoogleIcon size={24} />,
    name: "Google Ads",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    icon: <TwitterIcon size={24} />,
    name: "Twitter Ads",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    icon: <MetaIcon size={24} />,
    name: "Meta Ads",
    visitors: 3.1,
    revenues: "5,240",
    sales: 502,
    conversion: 4.5,
  },
  {
    icon: <ShahidIcon size={24} />,
    name: "Shahid Ads",
    visitors: 1.9,
    revenues: "3,890",
    sales: 378,
    conversion: 3.2,
  },
  {
    icon: <YouTubeIcon size={24} />,
    name: "YouTube Ads",
    visitors: 2.7,
    revenues: "4,930",
    sales: 450,
    conversion: 4.1,
  },
];

const AdCampaignTable = () => {
  return (
    <div className="w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Ad Campaign Performance
      </h4>

      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 dark:bg-meta-4">
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Platform
                </h5>
              </th>
              <th className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Visitors
                </h5>
              </th>
              <th className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Revenues
                </h5>
              </th>
              <th className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Sales
                </h5>
              </th>
              <th className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Conversion
                </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {adPlatformData.map((platform, key) => (
              <tr
                key={key}
                className={
                  key === adPlatformData.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                }
              >
                <td className="p-2.5 xl:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">{platform.icon}</div>
                    <p className="hidden text-sm text-black dark:text-white sm:block">
                      {platform.name}
                    </p>
                  </div>
                </td>
                <td className="p-2.5 text-center xl:p-5">
                  <p className="text-black dark:text-white">
                    {platform.visitors}K
                  </p>
                </td>
                <td className="p-2.5 text-center xl:p-5">
                  <p className="text-meta-3">${platform.revenues}</p>
                </td>
                <td className="p-2.5 text-center xl:p-5">
                  <p className="text-black dark:text-white">{platform.sales}</p>
                </td>
                <td className="p-2.5 text-center xl:p-5">
                  <p className="text-meta-5">{platform.conversion}%</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdCampaignTable;
