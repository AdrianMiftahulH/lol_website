import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/artikel",
        element: ""
    },
    {
        path: "/artikel/:id",
        element: ""
    },
]);

export {router};