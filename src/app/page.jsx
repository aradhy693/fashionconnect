"use client";
import PostFlow from "@/components/PostFlow";
import PostShareCard from "@/components/PostShareCard";
import React, { useState } from "react";

const Page = () => {
  // State for handling the current index of images (used for a slider if needed)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample image list
  const images = [
    "https://storage.googleapis.com/a1aa/image/lGwWBTB2XLzFIcSVS0FvAPXwllkQ1-oik1DG5px-rCs.jpg",
    "https://storage.googleapis.com/a1aa/image/VGlSn2h4FS-UwI5MAiDIgRxKRfRMLsG0OOy3lCtjNNI.jpg"
  ];

  const totalItems = images.length;

  // Function to go to the previous image in the slider
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalItems - 1));
  };

  // Function to go to the next image in the slider
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalItems - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* === MAIN CONTENT SECTION === */}
          <div className="lg:col-span-2 space-y-8">

            {/* Post Feed (Component) */}
            <PostFlow/>

            {/* Individual Post Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-6">
              
              {/* === User Info Section === */}
              <div className="flex items-center gap-4 border-b pb-6">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="User Avatar"
                />
                <div>
                  <h5 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition">
                    Leyla Ludic
                  </h5>
                  <p className="text-sm text-gray-500">UI/UX enthusiast • Jan 18, 2023</p>
                </div>
              </div>

              {/* === Post Text === */}
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec justo id velit fermentum...
              </p>

              {/* === Post Image === */}
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://storage.googleapis.com/a1aa/image/8Ko4ajAjdS5-TtTun-gsRWknqLNh0F9YVRcVZgGBoVY.jpg"
                  alt="Post"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* === Reactions Section === */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                {/* Like Button */}
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
                    alt="Like"
                    className="w-4 h-4"
                  />
                  <span>Like</span>
                </button>

                {/* Reaction Avatars and Count */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                      alt="like"
                      className="w-5 h-5 rounded-full border"
                    />
                    <img
                      src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                      alt="celebrate"
                      className="w-5 h-5 rounded-full border"
                    />
                  </div>
                  <button className="text-blue-600 hover:underline">11 people reacted</button>
                </div>
              </div>
            </div>
          </div>

          {/* === SIDEBAR SECTION === */}
          <aside className="sticky top-8 h-fit">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
              
              {/* Cover Image and Profile Picture */}
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/a1aa/image/IygUtJWhtDEFQDSKiYU3aXOJ9q6NUHsdntNvP70jLLw.jpg"
                  alt="Cover"
                  className="w-full h-24 object-cover"
                />
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/jDxWSp7hwbXu6J3k6dzZIvt5jFJBvli7tmJSVTlac4E.jpg"
                    alt="Profile"
                    className="h-20 w-20 rounded-full border-4 border-white shadow-md"
                  />
                </div>
              </div>

              {/* User Info in Sidebar */}
              <div className="pt-14 pb-6 px-6 text-center">
                <h2 className="text-lg font-semibold text-gray-900">Profile Name</h2>
                <p className="text-sm text-gray-600 mt-1">Headline</p>
                <p className="text-sm text-gray-600">Location (City, Region/Country)</p>
                <hr className="my-4 border-gray-200" />
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                  View Full Profile
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
