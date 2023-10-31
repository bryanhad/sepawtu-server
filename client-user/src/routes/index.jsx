import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/home/Home"
import GenderPage from "../pages/GenderPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "men",
                element: <GenderPage />,
            },
            {
                path: "women",
                element: <GenderPage />,
            },
            {
                path: "kids",
                element: <GenderPage />,
            },
        ],
    },
])

export default router
