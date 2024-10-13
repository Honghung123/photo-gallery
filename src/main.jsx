import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyRouterProvider from "./router/MyRouterProvider";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MyRouterProvider />
    </StrictMode>
);
