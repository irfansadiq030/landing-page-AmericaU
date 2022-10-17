import React from 'react'
import { Link } from 'react-router-dom'

const AddNewComics = () => {
    return (
        <React.Fragment>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Add Comics</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Content Container */}
                <div className="py-4">
                    {/* Buttons Container */}
                    <div className="flex">
                        <Link
                            to="/admin/comics"
                            className="mb-4 inline-flex items-center px-8 py-2.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Back
                        </Link>

                    </div>

                    {/* Form Area start */}
                    <div className='shadow sm:rounded-md sm:overflow-hidden pb-6'>
                        <div className="w-6/12 mt-5 md:mt-0 md:col-span-2 mx-auto">
                            <form action="#" method="POST">
                                <div className="">
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Comics Title"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Comics Description
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    rows={4}
                                                    name="comment"
                                                    id="comment"
                                                    className="p-2 border border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <label htmlFor="location" className=" block text-sm font-medium text-gray-700">
                                                File Names
                                            </label>
                                            <select
                                                id="location"
                                                name="location"
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                defaultValue="Canada"
                                            >
                                                <option>Img 1</option>
                                                <option>Img 2</option>
                                                <option>Img 3</option>

                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Comics Images</label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="px-4 py-3 text-right sm:px-6">
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
                {/* /End replace */}
            </div>
        </React.Fragment>
    )
}

export default AddNewComics
