import { Routes, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./Pages/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route index='/Home' element={<Home />} />
    <Route path='/Home' element={<Home />} />
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
