import React from "react";
import { Link } from "react-router-dom";

const AddEvents = () => {
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Add Events</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Content Container */}
        <div className="py-4">
          {/* Buttons Container */}
          <div className="flex">
            <Link
              to="/admin/events"
              className="mb-4 inline-flex items-center px-8 py-2.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </Link>
          </div>

          {/* Form Area start */}
          <div className="w-6/12 mt-5 md:mt-0 md:col-span-2 mx-auto">
            <form action="#" method="POST">
              <div className="">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 rounded">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="p-2 border-gray-200 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Event Title"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        className="p-2 border border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="location"
                      className=" block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="Canada"
                    >
                      <option>Pakistan</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className=" block text-sm font-medium text-gray-700"
                    >
                      Display Filter
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="Canada"
                    >
                      <option>Specific User</option>
                      <option>Country</option>
                      <option>State</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="location"
                      className=" block text-sm font-medium text-gray-700"
                    >
                      Start Date
                    </label>
                    <input
                      className="p-2 border border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      type="datetime-local"
                      id="birthdaytime"
                      name="birthdaytime"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="location"
                      className=" block text-sm font-medium text-gray-700"
                    >
                      End Date
                    </label>
                    <input
                      className="p-2 border border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      type="datetime-local"
                      id="birthdaytime"
                      name="birthdaytime"
                    />
                  </div>
                  <div className="px-4 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* /End replace */}
      </div>
    </React.Fragment>
  );
};

export default AddEvents;
