import React from 'react';

const Page = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-xl mx-auto bg-white border border-gray-200 p-6 sm:p-10 rounded-lg shadow-sm">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                            Edit your profile
                        </h1>
                        <p className="mt-1 text-gray-600">
                            Fill out the form below to edit your profile.
                        </p>
                    </div>

                    {/* Form */}
                    <form>
                        <div className="grid gap-6">
                            {/* File Uploads */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Profile Picture */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Profile picture
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor="profile_pic" className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                                            Upload Photo
                                        </label>
                                        <span className="text-sm text-gray-500">JPG, PNG, etc.</span>
                                        <input id="profile_pic" type="file" accept="image/*" className="hidden" />
                                    </div>
                                </div>

                                {/* Banner */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">
                                        Profile banner
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor="profile_banner" className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                                            Upload Banner
                                        </label>
                                        <span className="text-sm text-gray-500">JPG, PNG, etc.</span>
                                        <input id="profile_banner" type="file" accept="image/*" className="hidden" />
                                    </div>
                                </div>
                            </div>

                            {/* First & Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        id="first-name"
                                        type="text"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        id="last-name"
                                        type="text"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Headline */}
                            <div>
                                <label htmlFor="headline" className="block mb-2 text-sm font-medium text-gray-700">
                                    Headline
                                </label>
                                <input
                                    id="headline"
                                    type="text"
                                    placeholder="e.g., Frontend Developer | Open to Remote Roles"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-800 mb-2">Location</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-700">
                                            Country/Region
                                        </label>
                                        <input
                                            id="country"
                                            type="text"
                                            placeholder="e.g., United States"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            id="city"
                                            type="text"
                                            placeholder="e.g., New York"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* About Me */}
                            <div>
                                <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-700">
                                    About Me
                                </label>
                                <textarea
                                    id="about"
                                    rows={4}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Save Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-lg transition"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
