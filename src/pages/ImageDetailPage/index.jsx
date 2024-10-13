import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

export default function ImageDetailPage() {
    // Get image id from url
    const imgId = useParams().id;
    // A state used to store the image has id above
    const [image, setImage] = useState(null);
    // A state used to indicate that loading will show when fetching images
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        const API_URL = `https://api.unsplash.com/photos/${imgId}?client_id=${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }`;
        try {
            const response = await fetch(API_URL);
            const targetImage = await response.json();
            // Wait 1s to demo loading state
            setTimeout(() => {
                setImage(targetImage?.id ? targetImage : null);
                setLoading(false);
            }, 1000);
        } catch (error) {
            alert("Error on fetching images");
            setLoading(false);
        }
    };

    // Fetch images one time when user access this page
    useEffect(() => {
        fetchImages();
    }, [imgId]);

    return (
        <div className="image-detail text-center min-h-[65vh] mx-24 py-6">
            {loading ? (
                <div className="flex justify-center items-center p-3">
                    <Loading />
                </div>
            ) : image ? (
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-2xl font-bold py-2">Image Detail Page</h1>
                    <img className="w-fit" src={image?.urls?.raw} alt="" />
                    <h3 className="py-1 font-bold">Title:</h3>
                    <p>{image?.title ?? "An untitled beautiful image from Unsplash"}</p>
                    <h3 className="py-1 font-bold">Author:</h3>
                    <p>{image?.user?.name ?? "An unknown author"}</p>
                    <h3 className="py-1 font-bold">Description:</h3>
                    <p>{image?.description ?? image.alt_description}</p>
                </div>
            ) : (
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-2xl font-bold text-rose-400 py-2">Image Not Found</h1>
                </div>
            )}
            <div className="text-center">
                <Link
                    to="/photos"
                    className="inline-block text-md sm:text-lg px-2 py-1 sm:px-4 sm:py-2 font-medium text-white bg-sky-400 hover:bg-sky-600 my-6 rounded-full"
                >
                    Back to gallery
                </Link>
            </div>
        </div>
    );
}
