import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import json from "../../assets/photos.json";

// const API_URL = `https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&per_page=${import.meta.env.VITE_UNSPLASH_PER_PAGE}&page=`;

export default function GalleryPage() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchImages = async () => {
        if (images.length >= import.meta.env.VITE_MAX_IMAGES) {
            setHasMore(false);
            return;
        }
        console.log(page);
        try {
            console.log(import.meta.env.VITE_PHOTO_URL);
            // const response = await fetch(`${API_URL}${page}`);
            // let data = await response.json();
            console.log(json.photos.length);
            let data = json.photos.slice((page - 1) * 5, (page - 1) * 5 + 5); // test
            console.log(data);
            setTimeout(() => {
                setImages((prevImages) => [...prevImages, ...data]);
                setPage((prevPage) => prevPage + 1);
            }, 3000);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 h-screen  min-h-[65vh]">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="py-10">
                    <p className="text-center text-7xl">Gallery</p>
                </div>

                <InfiniteScroll
                    dataLength={images.length} //This is important field to render the next data
                    next={fetchImages}
                    hasMore={hasMore}
                    loader={<Loading />}
                    style={{
                        overflow: "hidden",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                    endMessage={
                        <p className="text-center text-2xl font-semibold mt-4 inline-flex justify-center items-center">
                            <b className="bg-sky-400 ">Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {images.map((image, index) => (
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
                </InfiniteScroll>
            </div>
        </div>
    );
}
