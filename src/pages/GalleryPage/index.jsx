import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import Gallery from "../../components/Gallery";
import MenuSetting from "../../components/MenuSetting";

const API_URL = `https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`;

export default function GalleryPage() {
    // A state used to store fetched images
    const [images, setImages] = useState([]);
    // A state used to store the current page
    const [page, setPage] = useState(1);
    // A state used to store the current page
    const [perPage, setPerPage] = useState(10);
    // A state used to indicate that there are more images to load or not
    const [hasMore, setHasMore] = useState(true);
    // A state used to indicate that there is any error has occurred or not when fetching images
    const [error, setError] = useState(null);
    // A state used to store the value of the input field for perPage
    const [tempPerPage, setTempPerPage] = useState(perPage);
    // A state used to store the maximum number of images to load
    const [maxLoadingImages, setMaxLoadingImages] = useState(import.meta.env.VITE_MAX_IMAGES);
    // A state used to store the value of the input field for the maximum number of images to load
    const [tempMaxLoadingImages, setTempMaxLoadingImages] = useState(maxLoadingImages);

    const handleChangedPerPage = () => {
        setPerPage(tempPerPage);
        setMaxLoadingImages(tempMaxLoadingImages);
        setPage(1);
        setImages([]);
        setHasMore(true);
        // Scroll on Y axis, 0 on X axis. This is used to trigger fetching images
        window.scrollBy(0, (2 * 96) / 2.54);
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
        <div className="bg-white dark:bg-gray-800 min-h-[80vh] h-auto pb-8">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="p-10">
                    <p className="text-center text-7xl">Gallery</p>
                    <div className="flex justify-end">
                        <MenuSetting
                            style={{
                                position: "absolute",
                                right: "0",
                                bottom: "0",
                                zIndex: "99",
                                transform: "translateY(100%)",
                                minWidth: "300px",
                            }}
                        >
                            <ul className="border rounded-xl p-4 bg-white shadow-lg">
                                <li className="p-2 flex gap-4 items-center justify-between">
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
                                <div className="text-center">
                                    <button
                                        className="bg-sky-400 hover:bg-sky-600 rounded-md px-4 py-2 text-white font-semibold inline-block"
                                        onClick={handleChangedPerPage}
                                    >
                                        Save
                                    </button>
                                </div>
                            </ul>
                        </MenuSetting>
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
                    <Gallery photos={images} />
                </InfiniteScroll>
            </div>
        </div>
    );
}
