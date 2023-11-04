import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Images from "./pages/Images"
import Products from "./pages/products"
import Styles from "./pages/Styles"
import Users from "./pages/Users"
import Login from "./pages/Login"
import LoginLayout from "./layouts/LoginLayout"
import { toast } from "react-toastify"

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginLayout/>,
        children: [{index:true, element: <Login/>}],
        loader: () => {
            if (localStorage.getItem('user')) {
                toast.error(`You've already logged in`)
                return redirect('/')
            }
            return null
        }
    },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {path: '/', element: <Products/>},
            {path: '/images', element: <Images/>},
            {path: '/styles', element: <Styles/>},
            {path: '/users', element: <Users/>},
        ],
        loader: () => {
            if (!localStorage.getItem('user')) {
                toast.error(`Please login first`)
                return redirect('/login')
            }
            return null
        }
    },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
