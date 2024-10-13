import React from "react";

export default function Navbar() {
    return (
        <div class="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5">
            <div class="border shadow-teal-300 shadow-md max-w-2xl p-6 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                <div class="w-full max-w-screen-xl px-10 mx-auto">
                    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium ">
                        <li>
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto dark:text-white"
                            >
                                All Categories
                                <svg
                                    class="w-4 h-4 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="dropdownNavbar"
                                class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44 dark:text-white"
                            >
                                <ul class="py-1 dark:text-white" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:text-white"
                                        >
                                            Mobiles
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:text-white"
                                        >
                                            Laptops & PCs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:text-white"
                                        >
                                            Cameras
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
                            >
                                Mobile Phones
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
                            >
                                Laptop & PC
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
                            >
                                Cameras
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
