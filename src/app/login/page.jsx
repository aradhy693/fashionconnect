import React from 'react'

const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <section className="w-full max-w-md">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-md">
                    <div className="p-6 sm:p-8">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800">
                                login
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                Don't have an account yet?{' '}
                                <a
                                    className="text-blue-600 hover:underline font-medium"
                                    href="../examples/html/signup.html"
                                >
                                    Sign up here
                                </a>
                            </p>
                        </div>
                        <div className="mt-6">
                            <form>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm mb-2 text-gray-700"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="py-2.5 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                            required
                                            aria-describedby="email-error"
                                        />
                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                            Please include a valid email address so we can get back to you
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm text-gray-700"
                                            >
                                                Password
                                            </label>
                                            <a
                                                className="text-sm text-blue-600 hover:underline font-medium"
                                                href="../examples/html/recover-account.html"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="py-2.5 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                            required
                                            aria-describedby="password-error"
                                        />
                                        <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                            8+ characters required
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                                    >
                                        login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
