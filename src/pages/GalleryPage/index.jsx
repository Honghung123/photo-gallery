import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";

const API_URL = `https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`;

export default function GalleryPage() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const [openSetting, setOpenSetting] = useState(false);
    const [tempPerPage, setTempPerPage] = useState(perPage);
    const [maxLoadingImages, setMaxLoadingImages] = useState(import.meta.env.VITE_MAX_IMAGES);
    const [tempMaxLoadingImages, setTempMaxLoadingImages] = useState(maxLoadingImages);

    const handleOpenSettings = () => {
        setOpenSetting(!openSetting);
    };

    const handleChangedPerPage = () => {
        setPerPage(tempPerPage);
        setMaxLoadingImages(tempMaxLoadingImages);
        setOpenSetting(false);
        setPage(1);
        setImages([]);
        setHasMore(true);
        alert("Scroll down to load images");
    };

    const fetchImages = async () => {
        if (images.length >= maxLoadingImages) {
            setHasMore(false);
            return;
        }
        try {
            const response = await fetch(`${API_URL}&per_page=${perPage}&page=${page}`);
            let data = await response.json();
            setTimeout(() => {
                if (!data?.errors) {
                    setImages((prevImages) => [...prevImages, ...data]);
                } else {
                    setError(data?.errors[0]);
                    setHasMore(false);
                }
                setPage((prevPage) => prevPage + 1);
            }, 1000);
        } catch (error) {
            setError("Error on fetching images! Please try again later.");
            setHasMore(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 h-screen min-h-[80vh] h-auto pb-8">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="p-10">
                    <p className="text-center text-7xl">Gallery</p>
                    <div className="flex justify-end">
                        <div className="relative">
                            <button onClick={() => handleOpenSettings()}>
                                <img
                                    className="w-6 h-6 hover:rotate-180 transition-all duration-500"
                                    src="https://www.svgrepo.com/show/13688/settings.svg"
                                    alt=""
                                />
                            </button>
                            {openSetting && (
                                <ul className="border rounded-xl p-4 z-50 absolute bottom-0 right-0 bg-white shadow-lg translate-y-full min-w-[20rem]">
                                    <li className="p-2 flex gap-4 items-center">
                                        <span className="font-semibold">Per page: </span>
                                        <input
                                            type="number"
                                            className="border rounded-3 p-2"
                                            value={tempPerPage}
                                            onChange={(e) => setTempPerPage(e.target.value)}
                                            min="5"
                                            max="15"
                                        />
                                    </li>
                                    <li className="p-2 flex gap-4">
                                        <span className="font-semibold">Max loading images: </span>
                                        <input
                                            type="number"
                                            className="border rounded-3 p-2"
                                            value={tempMaxLoadingImages}
                                            onChange={(e) => setTempMaxLoadingImages(e.target.value)}
                                            min="30"
                                            step="5"
                                            max="100"
                                        />
                                    </li>
                                    <button
                                        className="bg-sky-400 hover:bg-sky-600 rounded-md px-4 py-2 text-white font-semibold"
                                        onClick={handleChangedPerPage}
                                    >
                                        Save
                                    </button>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                {error && (
                    <p className="text-center text-2xl font-semibold mt-4 text-rose-500">
                        Failed to load images! Please try again later
                    </p>
                )}
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
                        !error && (
                            <p className="text-center text-2xl font-semibold mt-4 inline-flex justify-center items-center">
                                <b className="bg-sky-700 p-4 text-white">Yay! You have seen it all</b>
                            </p>
                        )
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
