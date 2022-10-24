import React from 'react'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid'

const people = [
    { date: '28/09/2022', img: 'https://placeimg.com/640/480/51', publisher: 'irfansadiq', role: 'Member' },
    // More people...
]


const SeasonPassTable = () => {
    return (
        <div className=" mt-5">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Season Pass Data</h1>

                </div>

            </div>
            <div className="mt-4 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr className="divide-x divide-gray-200 text-center">
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-sm font-semibold text-gray-900 sm:pl-6">
                                            Date Posted
                                        </th>
                                        <th scope="col" className="px-4 py-3.5  text-sm font-semibold text-gray-900">
                                            Image Preview
                                        </th>
                                        <th scope="col" className="px-4 py-3.5  text-sm font-semibold text-gray-900">
                                            Published By
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-4  text-sm font-semibold text-gray-900 sm:pr-6">
                                            Active
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-4  text-sm font-semibold text-gray-900 sm:pr-6">
                                            Order
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-sm font-semibold text-gray-900 sm:pr-6">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.email} className="divide-x divide-gray-200 text-center">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.date}
                                            </td>
                                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                                <img className='w-20 rounded mx-auto' src={person.img} alt="" />
                                            </td>
                                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.publisher}</td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.role}</td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.role}</td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                                                <button
                                                    type="button"
                                                    className="mr-2 inline-flex items-center px-1.5 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    <PencilAltIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-1.5 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                >
                                                    <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeasonPassTable
