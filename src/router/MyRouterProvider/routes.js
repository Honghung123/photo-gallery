import React from "react";
import GalleryPage from "./../../pages/GalleryPage";
import ImageDetailPage from "./../../pages/ImageDetailPage";
import NotFoundPage from "../../pages/NotFoundPage";
import HomePage from "../../pages/HomePage";

export const routes = [
    // User routes
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
        children: [],
    },
    {
        path: "/photos",
        element: <GalleryPage />,
        errorElement: <NotFoundPage />,
        children: [],
    },
    {
        path: "/photos/:id",
        element: <ImageDetailPage />,
        errorElement: <NotFoundPage />,
    },
];
