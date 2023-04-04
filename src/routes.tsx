import {
    createBrowserRouter,
  } from "react-router-dom";
import RootLayout from "pages/RootLayout";
import Home from "pages/Home";
import Intro from "pages/Intro";
import PlayView from "pages/PlayView";
import ErrorPage from "pages/ErrorPage";


const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/intro",
                element: <Intro />,
            },
            {
                path: "/play/:side",
                element: <PlayView />,
            },
        ]
    }
]);

export default routes;