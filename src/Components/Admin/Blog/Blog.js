import React from 'react';
import { useState } from 'react'
import BlogTable from './BlogTable'
import BlogForm from './BlogForm'



export default function Blog() {
    const [cmpSwitch, setCmpSwitch] = useState(true);
    const toggleForm = () => {
        setCmpSwitch(!cmpSwitch);
    }
    return (
        <React.Fragment>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Blog Page</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    {/* Form Area start */}
                    <button
                        onClick={toggleForm}
                        type="button"
                        className="mb-4 inline-flex items-center px-8 py-2.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {cmpSwitch ? 'Add New' : 'Back'}
                    </button>
                    <div className='shadow sm:rounded-md sm:overflow-hidden pb-6'>
                        {
                            cmpSwitch ? <BlogTable /> : <BlogForm />
                        }



                        {/* Table START */}
                        {/* <SeasonPassTable /> */}

                    </div>
                </div>
                {/* /End replace */}
            </div>
        </React.Fragment>
    )
}
