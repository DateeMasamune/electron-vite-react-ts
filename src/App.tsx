import { useEffect } from 'react'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <NavLink to={`/taste-laboratory/${2}`}>click</NavLink>
    </div>
  },
  {
    path: '/taste-laboratory/:id',
    element: <div>Page</div>
  }
])



function App() {
  useEffect(() => {
    document.getElementById("back-button")?.addEventListener("click", () => {
      history.back();
    });
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
