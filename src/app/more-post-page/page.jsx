import React from 'react'

const page = () => {
    return (
        <div>
            <div className="max-w-3xl px-4 pt-6 pb-10 sm:px-6 lg:px-8 mx-auto">
                <div className="max-w-2xl mx-auto space-y-6">

                    {/* Activity */}
                    <section className='bg-white px-8 py-8 border border-gray-300 rounded-md '>
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold md:text-3xl">All Activity</h2>
                        </div>
                        {/* Activity Cards */}
                        <section className="bg-white px-6 py-5 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition duration-300 max-w-xl mx-auto">
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
                        {/* Activity Cards */}
                        <section className="bg-white px-6 py-5 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition duration-300 max-w-xl mx-auto">
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

                    </section>

                </div>
            </div>
        </div>
    )
}

export default page