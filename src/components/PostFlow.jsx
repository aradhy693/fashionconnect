"use client";

import { useState } from "react";
import PostShareCard from "./PostShareCard";
import PostCreatePage from "./PostCreatePage";

export default function PostFlow() {
  // State to control the visibility of the post creation modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card where user clicks to create a new post */}
      <PostShareCard onClick={() => setIsModalOpen(true)} />

      {/* Conditional rendering of the PostCreatePage modal */}
      {isModalOpen && (
        // Modal overlay (semi-transparent background)
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside the inner modal
        >
          {/* Prevent closing the modal when clicking inside the modal content */}
          <div onClick={(e) => e.stopPropagation()}>
            {/* Post creation form */}
            <PostCreatePage onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
