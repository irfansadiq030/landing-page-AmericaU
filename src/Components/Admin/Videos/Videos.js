import React from 'react'

export default function Videos() {
    return (
        <React.Fragment>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Videos Page</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    {/* Fom Area */}
                    <div>
                        <div className="md:grid md:grid-cols-3 md:gap-6">

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" method="POST">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6 mx-auto">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Video 1
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Season Pass 1"
                                                    />
                                                </div>
                                                <div className="mt-3">
                                                    <input
                                                        type="text"
                                                        name="videoURL"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="https://youtu.be/t6zLJOCVqD0"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Video 2
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Season Pass 1"
                                                    />
                                                </div>
                                                <div className="mt-3">
                                                    <input
                                                        type="text"
                                                        name="videoURL"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="https://youtu.be/t6zLJOCVqD0"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Video 3
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Season Pass 1"
                                                    />
                                                </div>
                                                <div className="mt-3">
                                                    <input
                                                        type="text"
                                                        name="videoURL"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="https://youtu.be/t6zLJOCVqD0"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Video 4
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Season Pass 1"
                                                    />
                                                </div>
                                                <div className="mt-3">
                                                    <input
                                                        type="text"
                                                        name="videoURL"
                                                        id="title"
                                                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="https://youtu.be/t6zLJOCVqD0"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /End replace */}
            </div>
        </React.Fragment>
    )
}
