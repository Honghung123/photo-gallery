import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import json from "../../assets/photos.json";
import Loading from "../../components/Loading";

export default function ImageDetailPage() {
    const imgId = useParams().id;
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        try {
            let targetImage = json.photos.filter((photo) => photo.id === imgId)[0]; // test
            console.log(targetImage);
            setTimeout(() => {
                setImage(targetImage);
                setLoading(false);
            }, 3000);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="image-detail text-center min-h-[65vh] mx-24 py-6">
            {loading ? (
                <div className="flex justify-center items-center p-3">
                    <Loading />
                </div>
            ) : (
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-2xl font-bold py-2">Image Detail Page</h1>
                    <img className="w-fit" src={image?.urls.raw} alt="" />
                    <h3 className="py-1 font-bold">Title:</h3>
                    <p>{image?.alt_description}</p>
                    <h3 className="py-1 font-bold">Author:</h3>
                    <p>{image?.user.name}</p>
                    <h3 className="py-1 font-bold">Description:</h3>
                    <p>{image?.description ?? alt_description}</p>
                </div>
            )}
        </div>
    );
}
