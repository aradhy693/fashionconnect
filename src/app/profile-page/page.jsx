"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import PostShareCard from '@/components/PostShareCard';
import PostFlow from '@/components/PostFlow';

const Page = () => {
    const router = useRouter();

    const handleEditClick = () => {
        router.push('/profile-edit-info');
    };

    return (
        <div className="max-w-3xl px-4 pt-6 pb-10 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-2xl mx-auto space-y-6">

                {/* Profile Section */}
                <section className="bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="relative">
                        <img
                            alt="Cover"
                            className="w-full h-32 object-cover"
                            src="https://storage.googleapis.com/a1aa/image/IygUtJWhtDEFQDSKiYU3aXOJ9q6NUHsdntNvP70jLLw.jpg"
                        />
                        <img
                            alt="Profile"
                            className="absolute bottom-0 left-4 translate-y-1/2 h-24 w-24 rounded-full border-4 border-white shadow"
                            src="https://storage.googleapis.com/a1aa/image/jDxWSp7hwbXu6J3k6dzZIvt5jFJBvli7tmJSVTlac4E.jpg"
                        />
                    </div>

                    <div className="px-4 pt-16 pb-6 relative">
                        <button
                            type="button"
                            onClick={handleEditClick}
                            aria-label="Edit intro"
                            className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
                                alt="Edit"
                                className="h-7 w-7"
                            />
                        </button>
                        <h2 className="text-3xl font-bold lg:text-5xl">Aradhy singh</h2>
                        <p className="text-lg text-gray-800">Headline</p>
                        <p className="text-lg text-gray-800">Location (City, Region/Country)</p>
                    </div>
                </section>

                {/* About Section */}
                <section className="bg-white px-6 py-5 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold md:text-3xl">About</h2>
                        <p className="text-lg text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nemo ratione nam inventore quaerat...
                        </p>
                    </div>
                </section>

                {/* Post Create */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold md:text-3xl">Post create</h2>
                </div>
                <section>
                    <PostFlow />
                </section>


                {/* Activity */}
                <section className="bg-white px-6 py-5 border border-gray-300 rounded-md">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold md:text-3xl">Activity</h2>
                    </div>

                    {/* Activity Card */}
                    <section className="bg-white px-6 py-5 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition duration-300 max-w-xl mx-auto mt-6">
                        {/* User Info */}
                        <div className="flex items-center gap-x-4 border-b border-gray-200 pb-6 mb-6">
                            <a href="#" className="shrink-0">
                                <img
                                    className="w-12 h-12 rounded-full object-cover"
                                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Avatar"
                                />
                            </a>
                            <div className="flex flex-col">
                                <h5 className="text-sm font-semibold text-gray-800 hover:text-gray-600 transition">Leyla Ludic</h5>
                                <p className="text-xs text-gray-500">UI/UX enthusiast • Jan 18, 2023</p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <p className="text-base text-gray-800 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec justo id velit fermentum...
                        </p>

                        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                            <img
                                alt="Post"
                                className="w-full h-full object-cover"
                                src="https://storage.googleapis.com/a1aa/image/8Ko4ajAjdS5-TtTun-gsRWknqLNh0F9YVRcVZgGBoVY.jpg"
                            />
                        </div>

                        {/* Reactions Section */}
                        <div className="flex justify-between text-sm text-gray-600 mb-3">
                            {/* Like Button */}
                            <div>
                                <button
                                    type="button"
                                    aria-pressed="false"
                                    aria-label="React Like"
                                    className="flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
                                        alt="Like Icon"
                                        className="w-4 h-4"
                                    />
                                    <span>Like</span>
                                </button>
                            </div>
                            {/* Emoji Reactions */}
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
                                <button
                                    type="button"
                                    className="hover:underline hover:text-blue-600 transition"
                                    aria-label="View reactions"
                                >
                                    11 people reacted
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* Footer */}
                    <footer className="mt-6">
                        <a
                            href="/more-post-page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full text-sm font-medium text-blue-700 border border-blue-200 rounded-lg py-2 px-4 hover:bg-blue-50 transition"
                        >
                            Show all posts
                            <svg
                                className="ml-2 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </footer>

                </section>

                {/* Profile Contact Details */}
                <section className="bg-white px-8 py-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold text-gray-900">Contact</h2>

                        <div className="text-gray-700 text-base leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nemo ratione nam inventore quaerat...
                            </p>

                            {/* Example of structured contact details (optional) */}
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">📧</span>
                                    <span>email@example.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">📞</span>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">📍</span>
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default Page;
