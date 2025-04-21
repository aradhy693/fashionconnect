"use client";

import { VideoIcon, CameraIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";

const PostShareCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick} // Trigger onClick prop when card is clicked
      className="bg-white rounded-lg border border-gray-300 shadow-sm p-4 cursor-pointer hover:bg-gray-50"
    >
      {/* User avatar and prompt */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://storage.googleapis.com/a1aa/image/jDxWSp7hwbXu6J3k6dzZIvt5jFJBvli7tmJSVTlac4E.jpg"
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1 bg-gray-100 px-4 py-2 rounded-full text-gray-600 text-sm">
          Start a post
        </div>
      </div>

      {/* Buttons to create different types of posts */}
      <div
        className="flex justify-around border-t pt-3 mt-3 text-sm text-gray-600"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking buttons
      >
        {/* Video post button */}
        <button className="flex items-center gap-2 hover:text-blue-600">
          <VideoIcon className="w-4 h-4" />
          <span>Video</span>
        </button>
        
        {/* Photo post button */}
        <button className="flex items-center gap-2 hover:text-green-600">
          <CameraIcon className="w-4 h-4" />
          <span>Photo</span>
        </button>
        
        {/* Link to write an article */}
        <Link
          href="/article/new"
          className="flex items-center gap-2 hover:text-purple-600"
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking link
        >
          <FileTextIcon className="w-4 h-4" />
          <span>Write article</span>
        </Link>
      </div>
    </div>
  );
};

export default PostShareCard;

