// components/ActionButton.tsx
import React from "react";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ActionButton = ({ icon, label }: ActionButtonProps) => {
  return (
    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
