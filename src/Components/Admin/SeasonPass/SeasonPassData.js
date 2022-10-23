import React from 'react'

const SeasonPassData = () => {
    return (
        <div className="md:grid md:grid-cols-1 md:gap-6 m-8 rounded-lg ">
            <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 rounded-md">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Main Page Title
                        </label>
                        <div className="mt-1 rounded border border-gray-100 p-2">
                            <p>S1: THE RISE OF DARKSTAR</p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Main Page Description
                        </label>
                        <div className="mt-1">
                            <div className="mt-1 rounded border border-gray-100 p-2 ">
                                <p>Lord DarkStar is hiding somewhere in the pirate caves. It’s up to you and your classmates to search pirates caves for his secret base. Complete the season pass to earn the Cap of Light and Justice! Only available until August 20th!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SeasonPassData
