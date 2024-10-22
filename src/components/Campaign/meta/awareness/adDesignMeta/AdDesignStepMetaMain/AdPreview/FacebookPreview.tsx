import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

interface FacebookPreviewProps {
  mediaUrl?: string;
  mediaType?: string;
  headline?: string;
  campaignName: string;
}

const FacebookPreview: React.FC<FacebookPreviewProps> = ({
  mediaUrl,
  mediaType,
  headline,
  campaignName,
}) => (
  <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-white shadow-sm">
    {/* Header */}
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
          C
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Complete Growth</p>
          <p className="text-xs text-gray-500">Sponsored</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <BsThreeDots className="text-gray-600" />
        <IoCloseOutline className="text-gray-600" />
      </div>
    </div>

    {/* Primary Text */}
    <div className="px-3 py-2">
      <p className="text-sm text-gray-800">{headline || "Primary text"}</p>
    </div>

    {/* Media */}
    <div className="aspect-square w-full bg-gray-100">
      {mediaUrl ? (
        mediaType?.startsWith("image/") ? (
          <img
            src={mediaUrl}
            alt="Ad Media"
            className="h-full w-full object-cover"
          />
        ) : mediaType?.startsWith("video/") ? (
          <video src={mediaUrl} controls className="h-full w-full" />
        ) : null
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="text-4xl text-gray-300">📷</span>
        </div>
      )}
    </div>

    {/* Call to Action */}
    <div className="p-3">
      <button className="w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
        Learn More
      </button>
    </div>

    {/* Actions */}
    <div className="flex items-center justify-between border-t border-gray-200 px-3 py-2">
      <button className="flex items-center space-x-1 text-sm text-gray-600">
        <AiOutlineLike className="text-lg" />
        <span>Like</span>
      </button>
      <button className="flex items-center space-x-1 text-sm text-gray-600">
        <FaRegCommentAlt className="text-lg" />
        <span>Comment</span>
      </button>
      <button className="flex items-center space-x-1 text-sm text-gray-600">
        <RiShareForwardLine className="text-lg" />
        <span>Share</span>
      </button>
    </div>
  </div>
);

export default FacebookPreview;
