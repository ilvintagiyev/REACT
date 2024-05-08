import { createBrowserRouter, RouterProvider} from "react-router-dom"
import {ROUTES} from "./routes/ROUTES"
import './App.css'
import ButtonAppBar from "./components/Main/Navbar"

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router = {routes}/>
    </>
  )
}

export default App
zerifhuseynzader49t85
