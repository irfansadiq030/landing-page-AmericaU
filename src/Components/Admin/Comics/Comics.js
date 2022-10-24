import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import ComicsTable from './ComicsTable'

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

export default function Comics() {
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

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

                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="flex min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="w-4/12 h-auto p-5 m-2 rounded-md">
                                <h1 className="text-center text-xl font-semibold text-gray-900 uppercase">Slot 1</h1>
                                <Combobox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full rounded border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:border-none"
                                                displayValue={(person) => person.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <SelectorIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery('')}
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-red-500 ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredPeople.length === 0 && query !== '' ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nothing found.
                                                    </div>
                                                ) : (
                                                    filteredPeople.map((person) => (
                                                        <Combobox.Option
                                                            key={person.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                            <div className="w-4/12 h-auto p-5 m-2 rounded-md">
                                <h1 className="text-center text-xl font-semibold text-gray-900 uppercase">Slot 2</h1>
                                <Combobox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full rounded border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:border-none"
                                                displayValue={(person) => person.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <SelectorIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery('')}
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-red-500 ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredPeople.length === 0 && query !== '' ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nothing found.
                                                    </div>
                                                ) : (
                                                    filteredPeople.map((person) => (
                                                        <Combobox.Option
                                                            key={person.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                            <div className="w-4/12 h-auto p-5 m-2 rounded-md">
                                <h1 className="text-center text-xl font-semibold text-gray-900 uppercase">Slot 3</h1>
                                <Combobox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full rounded border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:border-none"
                                                displayValue={(person) => person.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <SelectorIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery('')}
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-red-500 ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredPeople.length === 0 && query !== '' ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nothing found.
                                                    </div>
                                                ) : (
                                                    filteredPeople.map((person) => (
                                                        <Combobox.Option
                                                            key={person.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>
                        </div>


                    </div>
                    <div className="">
                        <div className="mt-8 flex flex-col">
                            <ComicsTable />
                        </div>
                    </div>
                </div>
                {/* /End replace */}
            </div>
        </React.Fragment>
    )
}
