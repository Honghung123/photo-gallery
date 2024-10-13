import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="border-b bg-slate-100 backdrop:fill-red-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </Link>
                </div>

                <div className="hidden md:flex lg:gap-x-12">
                    <Link to="/" className="text-md font-semibold leading-6 text-gray-900 px-3 hover:text-sky-400">
                        Home
                    </Link>
                    <Link
                        to="/photos"
                        className="text-md hover:text-sky-400 font-semibold leading-6 text-gray-900 px-3"
                    >
                        Gallery
                    </Link>
                </div>

                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-md font-semibold leading-6 text-gray-900 hover:text-sky-400">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            {open && (
                <div className="md:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6 flex flex-col gap-3">
                                    <Link
                                        to="/"
                                        onClick={() => setOpen(false)}
                                        className="text-md font-semibold leading-6 text-gray-900 hover:text-sky-400"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/photos"
                                        onClick={() => setOpen(false)}
                                        className="text-md font-semibold leading-6 text-gray-900 hover:text-sky-400"
                                    >
                                        Gallery
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        onClick={() => setOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:text-sky-400"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
