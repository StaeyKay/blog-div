import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import HomePage from "./pages/HomePage"
import Blog from "./pages/Blog"
import AddNew from "./pages/AddNew"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'add-new',
        element: <AddNew />
      }
    ]
  }
 ])

function App() {
 

  return <RouterProvider router={router} />
}

export default App
