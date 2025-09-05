
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <SignUp /> }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App
