import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/home/Home"
import GenderPage from "../pages/GenderPage"
import ShoeDetail from "../pages/ShoeDetail"

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
                path: ':gender',
                element: <GenderPage/>
            },
            {
                path: ':gender/:slug',
                element: <ShoeDetail/>
            }
        ],
    },
])

export default router
