// components/icons/ShahidIcon.tsx
import React from "react";

const ShahidIcon = ({
  size = 24,
  color = "#FF0000",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="-0.000488281"
      width="64.0006"
      height="63.9992"
      rx="12.623"
      fill="url(#paint0_radial_5274_30360)"
    ></rect>
    <path
      d="M15.5291 27.2937C18.388 27.2937 20.7056 24.9762 20.7056 22.1173C20.7056 19.2585 18.388 16.9409 15.5291 16.9409C12.6701 16.9409 10.3525 19.2585 10.3525 22.1173C10.3525 24.9762 12.6701 27.2937 15.5291 27.2937Z"
      fill="white"
    ></path>
    <path
      d="M31.5291 27.2937C34.388 27.2937 36.7056 24.9762 36.7056 22.1173C36.7056 19.2585 34.388 16.9409 31.5291 16.9409C28.6701 16.9409 26.3525 19.2585 26.3525 22.1173C26.3525 24.9762 28.6701 27.2937 31.5291 27.2937Z"
      fill="white"
    ></path>
    <path
      d="M48.4705 27.2937C51.3294 27.2937 53.647 24.9762 53.647 22.1173C53.647 19.2585 51.3294 16.9409 48.4705 16.9409C45.6116 16.9409 43.2939 19.2585 43.2939 22.1173C43.2939 24.9762 45.6116 27.2937 48.4705 27.2937Z"
      fill="white"
    ></path>
    <path
      d="M53.6471 47.0581V33.8818L10.3525 33.9864V42.3558L45.3854 42.2509V47.0581H53.6471Z"
      fill="white"
    ></path>
    <defs>
      <radialGradient
        id="paint0_radial_5274_30360"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-0.000488281) rotate(45.1251) scale(90.5068 122.705)"
      >
        <stop offset="0.238504" stop-color="#00CC99"></stop>
        <stop offset="1" stop-color="#0099FF"></stop>
      </radialGradient>
    </defs>
  </svg>
);

export default ShahidIcon;
