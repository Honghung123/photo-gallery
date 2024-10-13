import React from "react";
import { Link } from "react-router-dom";

export default function Gallery({ photos }) {
    return (
        <>
            {photos.map((image, index) => (
                <Link
                    to={`/photos/${image.id}`}
                    key={index}
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 grow basis-[10rem] sm:basis-[20rem]"
                >
                    <img
                        src={image.urls.small}
                        loading="lazy"
                        alt={image.alt_description}
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />

                    <span className="relative ml-4 mb-3 block text-sm text-white text-center md:ml-5 md:text-lg">
                        {image.user.name || "No description available"}
                    </span>
                </Link>
            ))}
        </>
    );
}
