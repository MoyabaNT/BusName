import { Routes, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route index='/Home' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<About />} />
  </>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
