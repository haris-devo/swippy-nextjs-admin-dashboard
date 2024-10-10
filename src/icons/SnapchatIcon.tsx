// components/icons/SnapchatIcon.tsx
import React from "react";

const SnapchatIcon = ({
  size = 24,
  color = "#FFFC00",
  title = "Snapchat",
}: {
  size?: number;
  color?: string;
  title?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <title>{title}</title>
    {/* SVG Path */}
    <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 21.8182C6.84916 21.8182 2.18182 17.1508 2.18182 12C2.18182 6.84916 6.84916 2.18182 12 2.18182C17.1508 2.18182 21.8182 6.84916 21.8182 12C21.8182 17.1508 17.1508 21.8182 12 21.8182Z" />
  </svg>
);

export default SnapchatIcon;
