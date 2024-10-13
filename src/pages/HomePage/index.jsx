import React from "react";
import { Link } from "react-router-dom";
import GithubIconSvg from "../../assets/svg/github.svg";

export default function HomePage() {
    return (
        <div className="flex p-10 mx-10 min-h-[65vh]">
            <div className="flex items-center w-full lg:w-1/2">
                <div className="max-w-2xl mb-8">
                    <h1 className="text-2xl sm:text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                        A Gallery sponsored by Unsplash
                    </h1>
                    <p className="py-5 text-xs sm:text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                        Nextly is a free landing page & marketing website template for startups and indie projects. Its
                        built with Next.js & TailwindCSS. And its completely open-source.
                    </p>

                    <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                        <Link
                            to="/photos"
                            className="px-2 py-1 sm:px-4 sm:py-2 xl:px-8 xl:py-4 text-md sm:text-lg font-medium text-center text-white bg-indigo-500 hover:bg-indigo-600 rounded-md "
                        >
                            Show gallery
                        </Link>
                        <a
                            href="https://github.com/Honghung123/photo-gallery"
                            target="_blank"
                            rel="noopener"
                            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
                        >
                            <img src={GithubIconSvg} alt="" className="w-6" />
                            <span className="text-md sm:text-lg hover:text-sky-500"> View on Github</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <div className="">
                    <img
                        src="https://png.pngtree.com/png-clipart/20230915/original/pngtree-flat-vector-illustration-of-girl-working-on-laptop-vector-png-image_12218757.png"
                        width="616"
                        height="617"
                        className={"object-cover"}
                        alt="Hero Illustration"
                        loading="eager"
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
}
