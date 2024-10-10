// components/icons/YouTubeIcon.tsx
import React from "react";

const YouTubeIcon = ({
  size = 24,
  color = "#FF0000",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 576 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* YouTube SVG Path */}
    <path
      d="M549.655 124.083c-6.281-23.773-24.843-42.333-48.633-48.616C458.3 64 288 64 288 64s-170.3 0-213.022 11.467c-23.79 6.281-42.352 24.843-48.633 48.616C16 166.8 16 256 16 256s0 89.2 10.345 131.918c6.281 23.773 24.843 42.333 48.633 48.616C117.7 448 288 448 288 448s170.3 0 213.022-11.467c23.79-6.281 42.352-24.843 48.633-48.616C560 345.2 560 256 560 256s0-89.2-10.345-131.918zM232 334.7V177.3L347.2 256 232 334.7z"
      fill={color}
    />
  </svg>
);

export default YouTubeIcon;
