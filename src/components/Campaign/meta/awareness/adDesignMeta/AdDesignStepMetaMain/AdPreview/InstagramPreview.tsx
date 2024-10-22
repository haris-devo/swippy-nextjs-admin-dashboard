import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsSend, BsBookmark, BsChevronRight } from "react-icons/bs";

interface InstagramPreviewProps {
  mediaUrl?: string;
  mediaType?: string;
  campaignName: string;
}

const InstagramPreview: React.FC<InstagramPreviewProps> = ({
  mediaUrl,
  mediaType,
  campaignName,
}) => (
  <div className="w-full max-w-sm">
    <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-3">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
            C
          </div>
          <span className="text-sm font-semibold">Complete Growth</span>
        </div>
        <span className="text-xs text-gray-500">Sponsored</span>
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

      {/* Actions */}
      <div className="flex items-center justify-between p-3">
        <div className="flex space-x-4">
          <AiOutlineHeart size={24} />
          <AiOutlineMessage size={24} />
          <BsSend size={22} />
        </div>
        <BsBookmark size={22} />
      </div>

      {/* Call to Action */}
      <div className="px-3 pb-3">
        <button className="flex w-full items-center justify-between rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold">
          Learn More
          <BsChevronRight size={16} />
        </button>
      </div>
    </div>
    <div className="mt-4 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-3">
      <p className="text-sm text-yellow-800">
        <span className="font-semibold">Keep In Mind</span>
        <br />
        Keep your ad copy simple and direct to engage your audience early on in
        your campaign.
      </p>
    </div>
  </div>
);

export default InstagramPreview;
