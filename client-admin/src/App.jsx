import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Images from "./pages/Images"
import Products from "./pages/products"
import Styles from "./pages/Styles"
import Users from "./pages/Users"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {path: '/', element: <Products/>},
            {path: '/images', element: <Images/>},
            {path: '/styles', element: <Styles/>},
            {path: '/users', element: <Users/>},
        ],
    },
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
