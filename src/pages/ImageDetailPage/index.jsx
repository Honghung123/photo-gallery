import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

export default function ImageDetailPage() {
    const imgId = useParams().id;
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        const API_URL = `https://api.unsplash.com/photos/${imgId}?client_id=${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }`;
        try {
            const response = await fetch(API_URL);
            const targetImage = await response.json();
            setTimeout(() => {
                setImage(targetImage?.id ? targetImage : null);
                setLoading(false);
            }, 1000);
        } catch (error) {
            alert("Error on fetching images");
            setLoading(false);
        }
    };

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
        </div>
    );
}
