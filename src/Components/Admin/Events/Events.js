import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';


const people = [
    { date: '28/09/2022', img: 'https://placeimg.com/640/480/51', publisher: 'irfansadiq', role: 'Member' },
    // More people...
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Events() {
    return (
        <React.Fragment>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Events Page</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Content Container */}
                <div className="py-4">
                    {/* Buttons Container */}
                    <div className="flex">
                        <Link
                            to="add-new"
                            className="mb-4 inline-flex items-center px-8 py-2.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add New School Event
                        </Link>

                        <Menu as="div" className="relative inline-block text-left ml-auto">
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Filter
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    My Posts
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Users Posts
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Country
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    State
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    School
                                                </a>
                                            )}
                                        </Menu.Item>

                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                    {/* Form Area start */}
                    <div className="">
                        {/* <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h1 className="text-xl font-semibold text-gray-900">Events</h1>

                                </div>

                            </div> */}
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr className="divide-x divide-gray-200 text-center">
                                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-sm font-semibold text-gray-900 sm:pl-6">
                                                        Event Date
                                                    </th>
                                                    <th scope="col" className="px-4 py-3.5  text-sm font-semibold text-gray-900">
                                                        Event Title
                                                    </th>
                                                    <th scope="col" className="px-4 py-3.5  text-sm font-semibold text-gray-900">
                                                        Published By
                                                    </th>
                                                    <th scope="col" className="py-3.5 pl-4 pr-4  text-sm font-semibold text-gray-900 sm:pr-6">
                                                        Targeting
                                                    </th>
                                                    <th scope="col" className="py-3.5 pl-4 pr-4  text-sm font-semibold text-gray-900 sm:pr-6">
                                                        Status
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
                                                            Event Title
                                                        </td>
                                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.publisher}</td>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                                                            Philipines
                                                        </td>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                                                            <div className="relative flex items-center justify-center">
                                                                <div className="flex items-center h-5">
                                                                    <input
                                                                        id="comments"
                                                                        aria-describedby="comments-description"
                                                                        name="comments"
                                                                        type="checkbox"
                                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                    />
                                                                </div>

                                                            </div>
                                                        </td>
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
                </div>
                {/* /End replace */}
            </div>
        </React.Fragment>
    )
}
