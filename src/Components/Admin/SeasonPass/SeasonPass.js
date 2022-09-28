import React from 'react'
import SeasonPassTable from './SeasonPassTable'
import SeasonPassData from './SeasonPassData'
import SeasonPassForm from './SeasonPassForm'
import { useState } from 'react'



export default function SeasonPass() {
    const [cmpSwitch, setCmpSwitch] = useState(true);
    const toggleForm = () => {
        setCmpSwitch(!cmpSwitch);
    }
    return (
        <React.Fragment>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Season Page</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}

                    {/* Form Area start */}
                    <button 
                        onClick={toggleForm}
                        type="button"
                        className="mb-4 inline-flex items-center px-8 py-2.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {cmpSwitch ? 'Add New' :'Back'}
                    </button>
                    <div className='shadow sm:rounded-md sm:overflow-hidden pb-6'>
                        {
                            cmpSwitch ? <SeasonPassData /> : <SeasonPassForm />
                        }
                        
                        

                        {/* Table START */}
                        <SeasonPassTable />

                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
