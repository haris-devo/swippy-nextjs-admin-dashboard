import React, { useState, useEffect } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

interface MediaUploaderProps {
  media: File | null;
  onMediaChange: (media: File | null) => void;
}

const MediaUploader: React.FC<MediaUploaderProps> = ({
  media,
  onMediaChange,
}) => {
  const [preview, setPreview] = useState<string | null>(
    media ? URL.createObjectURL(media) : null,
  );

  useEffect(() => {
    // Clean up the object URL when component unmounts
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onMediaChange(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Uploaded Media"
            className="h-auto w-full rounded-lg"
          />
          <button
            className="absolute right-2 top-2 rounded-full bg-white p-1 text-red-500 shadow-md"
            onClick={() => {
              onMediaChange(null);
              setPreview(null);
            }}
          >
            ✕
          </button>
        </div>
      ) : (
        <label className="flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-6 text-gray-700 hover:bg-gray-50">
          <IoMdAddCircleOutline className="mr-2 text-2xl text-gray-500" />
          <span className="text-lg">Add media</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleMediaUpload}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default MediaUploader;
