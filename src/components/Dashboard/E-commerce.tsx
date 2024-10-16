"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import CreateCampaign from "../Campaign/CreateCampaign";
import ReportsSection from "../Reports/ReportsSection";
import ReportsTable from "../Reports/ReprotsTable";
import { campaignsData } from "@/data/ReportsData";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
            Welcome, Hammad 🙌
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Here&apos;s what&apos;s happening with your store today.
          </p>
        </div>
        <CreateCampaign />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-1 xl:grid-cols-2 2xl:gap-4">
        {/* New Ad Creation Card */}
        <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white p-6 shadow-lg dark:bg-boxdark">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/20"></div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-secondary/20"></div>
          <div className="relative z-10">
            <div className="my-auto flex flex-col justify-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Want to display your ads?
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Create and manage your advertising campaigns in just a few
                  clicks
                </p>
              </div>
              <CreateCampaign />
            </div>
          </div>
        </div>

        {/* Credit Card Style Balance Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#3e516f] to-primary opacity-90"></div>
          {/* Credit Card Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full border-4 border-white/30"></div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full border-4 border-white/30"></div>
            <div className="absolute right-12 top-12 h-16 w-16 rounded-full border-2 border-white/30"></div>
          </div>

          <div className="relative p-6">
            <div className="mb-4 flex justify-between">
              <div>
                <p className="text-sm font-medium text-white/80">
                  Your Balance
                </p>
                <h3 className="mt-1 text-2xl font-bold text-white">$3,456K</h3>
              </div>
              <div className="flex h-10 w-14 items-center justify-center rounded-md bg-white/20 backdrop-blur-sm">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button className="w-full rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30">
                Wallet
              </button>
              <button className="w-full rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30">
                Top Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-2 md:mt-6 md:gap-4 2xl:mt-7.5 2xl:gap-5">
        <div className="col-span-12 xl:col-span-12">
          <ReportsTable campaigns={campaignsData} />
        </div>
        {/* <ChartTwo /> */}
        {/* <ChartOne /> */}
      </div>
    </>
  );
};

export default ECommerce;
