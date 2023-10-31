import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/home/Home"
import Men from "./pages/gender/Men"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="men" element={<Men />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
