"use client";
import React, { useState, useEffect } from "react";
import { X, ImageIcon, VideoIcon, FileText, Upload } from "lucide-react";

const PostCreatePage = ({ onClose }) => {
  // State variables to manage post type, caption, file, preview URL, and loading state
  const [postType, setPostType] = useState("image");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Generate preview URL when file changes
  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // Cleanup URL on component unmount or file change
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  // Handle file selection and validation
  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Validate file type based on postType
    if (postType === "image" && !selectedFile.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    if (postType === "video" && !selectedFile.type.startsWith("video/")) {
      alert("Please upload a video file");
      return;
    }

    setFile(selectedFile);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that a file is selected for image/video posts
    if (!file && postType !== "article") {
      alert("Please select a file to upload");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API request (replace with real API integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Post created:", { postType, caption, file });
      onClose(); // Close modal after post creation
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Modal background overlay
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      {/* Modal container */}
      <div className="bg-white rounded-xl w-full max-w-2xl relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Create Post</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" /> {/* Close icon */}
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 max-h-[80vh] overflow-y-auto">
          
          {/* Post Type Selector (Image, Video, Article) */}
          <div className="flex gap-2 mb-6">
            {[
              { type: "image", label: "Photo", icon: ImageIcon },
              { type: "video", label: "Video", icon: VideoIcon },
              { type: "article", label: "Article", icon: FileText },
            ].map(({ type, label, icon: Icon }) => (
              <button
                key={type}
                onClick={() => setPostType(type)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg ${
                  postType === type
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* File Upload Section (for image and video types only) */}
          {postType !== "article" && (
            <div className="mb-6">
              <label className="block mb-2 font-medium">Add {postType}</label>
              
              {/* Upload area with preview */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                {preview ? (
                  postType === "image" ? (
                    // Image preview
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-lg object-cover"
                    />
                  ) : (
                    // Video preview
                    <video
                      src={preview}
                      controls
                      className="max-h-64 mx-auto rounded-lg"
                    />
                  )
                ) : (
                  // Upload instructions and file input
                  <div className="space-y-2">
                    <Upload className="w-8 h-8 mx-auto text-gray-400" />
                    <p className="text-gray-500">
                      Drag and drop or{" "}
                      <span className="text-blue-600 cursor-pointer">
                        browse files
                      </span>
                    </p>
                    <input
                      type="file"
                      accept={postType === "image" ? "image/*" : "video/*"}
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    {/* Label styled as upload button */}
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
                    >
                      Select File
                    </label>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Caption or Content Input */}
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">
                {postType === "article" ? "Content" : "Caption"}
              </label>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                rows={postType === "article" ? 6 : 3}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={
                  postType === "article"
                    ? "Write your article..."
                    : "Add a caption..."
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Posting..." : "Share Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreatePage;
