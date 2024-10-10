// pages/manage-ads.tsx
import AdManagement from "@/components/AdsPlatformButton/AdManagment";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Ads - Swippy",
  description: "Efficiently manage your campaigns from one dashboard",
};

const ManageAdsPage = () => {
  return (
    <DefaultLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
          Manage Ads
        </h1>
        <h3 className="text-lg font-medium leading-6 text-gray-500">
          Efficiently manage your campaigns from one dashboard
        </h3>
        <AdManagement />
        <div className="mt-6 flex h-72 items-center justify-center rounded-lg border border-gray-200 p-6 text-center text-gray-500">
          <h1 className="text-lg font-medium leading-6 text-gray-500">
            No campaigns available yet
          </h1>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ManageAdsPage;
