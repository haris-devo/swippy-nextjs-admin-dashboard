// LaunchStep.tsx

import React, { useState, useCallback, FC, ReactNode, useEffect } from "react";
import { FaWallet, FaPencilAlt, FaChevronDown, FaCheck } from "react-icons/fa";
import AdPreview from "./adDesignMeta/AdPreview";

interface LaunchStepProps {
  data?: CampaignData;
  updateData?: (newData: CampaignData) => void;
}

interface CampaignData {
  campaignType: string;
  campaignName: string;
  createdAt: string;
  adDesigns: AdDesign[];
  targetAudience: TargetAudience;
  biddingBudget: BiddingBudget;
}

interface AdDesign {
  id: number;
  brandName: string;
  headline: string;
  media?: File | null;
  attachmentTab?: number;
  attachmentData?: any;
}

interface TargetAudience {
  locations: string[];
  availableAudienceSize: string;
  language: string;
  gender: string;
  ageRange: string;
}

interface BiddingBudget {
  budgetDaily: string;
  duration: string;
}

interface ExpandableSectionProps {
  title: string;
  icon: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

// Reusable ExpandableSection Component
// eslint-disable-next-line react/display-name
const ExpandableSection: FC<ExpandableSectionProps> = React.memo(
  ({ title, icon, isExpanded, onToggle, children }) => {
    return (
      <div className="border-b border-gray-200 transition-all duration-300 last:border-none">
        <button
          type="button"
          className="mb-2 flex w-full cursor-pointer items-center justify-between rounded p-2 transition-colors hover:bg-gray-50"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={`${title}-content`}
        >
          <h3 className="text-base font-semibold text-black">{title}</h3>
          <div className="flex items-center">
            {icon}
            <FaChevronDown
              className={`ml-2 text-sm text-gray-400 transition-transform ${
                isExpanded ? "rotate-180 transform" : ""
              }`}
              aria-hidden="true"
            />
          </div>
        </button>
        {isExpanded && (
          <div
            id={`${title}-content`}
            className="mt-2 pb-4 pl-2 transition-all duration-300"
            role="region"
            aria-labelledby={`${title}-header`}
          >
            {children}
          </div>
        )}
      </div>
    );
  },
);

const LaunchStepMeta: FC<LaunchStepProps> = ({ data, updateData }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "design",
  );

  const toggleSection = useCallback((section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  }, []);

  // Initialize campaign data with adDesigns containing id
  const [campaignData, setCampaignData] = useState<CampaignData>({
    campaignType: data?.campaignType || "Awareness",
    campaignName: data?.campaignName || "Sweply-SA-462543089",
    createdAt: data?.createdAt || "15 Oct 24",
    adDesigns: data?.adDesigns || [
      {
        id: 1,
        brandName: "111aa",
        headline: "Aaa",
      },
    ],
    targetAudience: data?.targetAudience || {
      locations: ["Qatar"],
      availableAudienceSize: "195K - 1.1M",
      language: "English, Arabic",
      gender: "Male, Female",
      ageRange: "All",
    },
    biddingBudget: data?.biddingBudget || {
      budgetDaily: "150 SAR",
      duration: "15 Oct 2024 - 21 Oct 2024",
    },
  });

  // Ad Preview State
  const [ads, setAds] = useState<AdDesign[]>(campaignData.adDesigns);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);

  // Handlers for AdPreview
  const handlePrevAd = () => {
    setCurrentAdIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextAd = () => {
    setCurrentAdIndex((prev) => (prev < ads.length - 1 ? prev + 1 : prev));
  };

  // Optional: Update campaignData when ads change
  useEffect(() => {
    const updatedCampaignData = {
      ...campaignData,
      adDesigns: ads,
    };
    setCampaignData(updatedCampaignData);
    if (updateData) {
      updateData(updatedCampaignData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ads]);

  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* Left Section */}
      <div className="h-max w-full rounded-lg border border-gray-300 bg-white p-4 shadow-sm md:w-3/5">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Your campaign preview
        </h2>
        <div className="space-y-6">
          {/* Design Section */}
          <ExpandableSection
            title="Design"
            icon={<FaPencilAlt className="text-gray-400 hover:text-gray-600" />}
            isExpanded={expandedSection === "design"}
            onToggle={() => toggleSection("design")}
          >
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign type</span>
                <span className="font-medium">{campaignData.campaignType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign name</span>
                <span className="font-medium">{campaignData.campaignName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Created at</span>
                <span className="font-medium">{campaignData.createdAt}</span>
              </div>
            </div>
          </ExpandableSection>

          {/* Ad Design Section */}
          <ExpandableSection
            title="Ad design"
            icon={<FaPencilAlt className="text-gray-400 hover:text-gray-600" />}
            isExpanded={expandedSection === "adDesign"}
            onToggle={() => toggleSection("adDesign")}
          >
            <div className="rounded bg-gray-50 p-4">
              {campaignData.adDesigns.map((ad, index) => (
                <div key={ad.id} className="space-y-3">
                  <h4 className="mb-3 font-semibold text-gray-700">
                    Ad {index + 1}
                  </h4>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Brand Name</span>
                    <span className="font-medium">{ad.brandName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Headline</span>
                    <span className="font-medium">{ad.headline}</span>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableSection>

          {/* Ad Preview Section */}
          <ExpandableSection
            title="Ad preview"
            icon={<FaPencilAlt className="text-gray-400 hover:text-gray-600" />}
            isExpanded={expandedSection === "adPreview"}
            onToggle={() => toggleSection("adPreview")}
          >
            <div className="px-20 py-4">
              <AdPreview
                isLaunching
                adData={ads[currentAdIndex]}
                currentAdIndex={currentAdIndex}
                totalAds={ads.length}
                handlePrevAd={handlePrevAd}
                handleNextAd={handleNextAd}
              />
            </div>
          </ExpandableSection>

          {/* Target Audience Section */}
          <ExpandableSection
            title="Target audience"
            icon={<FaPencilAlt className="text-gray-400 hover:text-gray-600" />}
            isExpanded={expandedSection === "targetAudience"}
            onToggle={() => toggleSection("targetAudience")}
          >
            <div className="space-y-3">
              <div>
                <span className="text-gray-600">Locations</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {campaignData.targetAudience.locations.map(
                    (location, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800"
                      >
                        <FaCheck className="mr-1" /> {location}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Available audience size</span>
                <span className="font-medium">
                  {campaignData.targetAudience.availableAudienceSize}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Language</span>
                <span className="font-medium">
                  {campaignData.targetAudience.language}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Gender</span>
                <span className="font-medium">
                  {campaignData.targetAudience.gender}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Age range</span>
                <span className="font-medium">
                  {campaignData.targetAudience.ageRange}
                </span>
              </div>
            </div>
          </ExpandableSection>

          {/* Bidding and Budget Section */}
          <ExpandableSection
            title="Bidding and budget"
            icon={<FaPencilAlt className="text-gray-400 hover:text-gray-600" />}
            isExpanded={expandedSection === "biddingBudget"}
            onToggle={() => toggleSection("biddingBudget")}
          >
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Budget daily</span>
                <span className="font-medium">
                  {campaignData.biddingBudget.budgetDaily}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">
                  {campaignData.biddingBudget.duration}
                </span>
              </div>
            </div>
          </ExpandableSection>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full flex-1 md:w-2/5">
        {/* Wallet Balance */}
        <div className="rounded-t-lg bg-purple-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Your Balance</p>
              <p className="text-2xl font-bold">0.00 SAR</p>
            </div>
            <div className="flex items-center">
              <FaWallet className="mr-2" />
              <span>Wallet</span>
            </div>
          </div>
        </div>

        {/* Campaign Summary */}
        <div className="rounded-b-lg bg-white p-4 text-sm shadow-md">
          <h3 className="mb-4 font-semibold">Campaign summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span>{campaignData.biddingBudget.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Daily budget</span>
              <span>{campaignData.biddingBudget.budgetDaily}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Campaign total budget</span>
              <span>1,050.00 SAR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VAT Fee (15%)</span>
              <span>157.50 SAR</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>1,207.50 SAR</span>
            </div>
          </div>

          {/* Estimated Campaign Performance */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">Estimated Campaign Performance</h3>
              <FaChevronDown className="text-gray-500" />
            </div>
            <div className="flex space-x-2">
              <button className="w-full border bg-gray-200 font-semibold text-blue-500">
                Daily
              </button>
              <button className="w-full border border-gray-200 text-gray-500">
                Weekly
              </button>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Reach</span>
                <span className="font-semibold">25K - 74K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Impressions</span>
                <span className="font-semibold">28K - 84K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchStepMeta;
