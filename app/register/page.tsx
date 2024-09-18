import Link from "next/link"
import React from "react"

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500">
            <div className="bg-white p-8 my-8 rounded-lg shadow-lg w-full max-w-4xl flex">
                <div className="w-1/2 pr-8">
                    <Link
                        href="/"
                        className="text-sm text-blue-500 mb-4 block hover:underline"
                    >
                        &larr; Back to Home
                    </Link>
                    <h2 className="text-2xl font-semibold mb-6">Create An Account</h2>
                    <form>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Email id
                            </label>
                            <input
                                type="email"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <Link href='/usertype'>
                            <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-md">
                                Register
                            </button>
                        </Link>

                    </form>
                </div>

                <div className="w-1/2 pl-8 border-l">
                    <div className="flex items-center justify-center">
                        <img src="/startupgujrat.png" alt="Startup India" className="h-32 mb-6" />
                    </div>
                    <div className="text-center mb-6">
                        <p className="text-sm text-gray-500">
                            Signup with your social accounts
                        </p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button className="bg-red-500 p-2 rounded-full text-white">
                                <i className="fab fa-google"></i> G+
                            </button>
                            <button className="bg-blue-500 p-2 rounded-full text-white">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </button>
                            <button className="bg-black p-2 rounded-full text-white">
                                <i className="fab fa-twitter"></i> X
                            </button>
                            <button className="bg-blue-700 p-2 rounded-full text-white">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                    <div className="text-sm text-gray-400">
                        <p>Industries Commisionerate,</p>
                        <p>Government of Gujrat</p>
                        <p className="mt-2">INVEST GUJRAT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage