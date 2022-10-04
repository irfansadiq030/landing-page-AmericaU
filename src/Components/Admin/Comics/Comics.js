import React from 'react'
import { Link } from 'react-router-dom'

export default function Comics() {
    return (
        <React.Fragment>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Comics Page</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    <Link
                        to="add-new"
                        className="mb-4 inline-flex items-center px-8 py-2.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add New
                    </Link>
                </div>
                {/* /End replace */}
            </div>
        </React.Fragment>
    )
}
