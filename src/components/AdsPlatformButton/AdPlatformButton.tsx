// components/AdPlatformButton.tsx
import React from "react";

interface AdPlatformButtonProps {
  platform: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const AdPlatformButton = ({
  platform,
  icon,
  isActive = false,
  onClick,
}: AdPlatformButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out ${
        isActive
          ? "border-2 border-[#9263FF] text-[#9263FF]"
          : "bg-white text-gray-600 hover:bg-gray-50"
      } border border-gray-200`}
    >
      {icon}
      <span>{platform}</span>
    </button>
  );
};

export default AdPlatformButton;
