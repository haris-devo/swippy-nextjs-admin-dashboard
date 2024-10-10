// components/icons/CalendarIcon.tsx
import React from "react";

const CalendarIcon = ({
  size = 16,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Calendar SVG Path */}
    <path
      d="M400 64h-48V16c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v48h-128V16c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v48H48c-26.51 0-48 21.49-48 48v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM400 464H48V160h352v304z"
      fill={color}
    />
  </svg>
);

export default CalendarIcon;
