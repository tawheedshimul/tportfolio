import { createBrowserRouter } from "react-router-dom";
import EroorPage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Main from "../Layout/Main";
import Player from "../Pages/Player/Player";



export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <EroorPage></EroorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/services',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element: <Services></Services>
      },
      {
        path: '/player',
        element: <Player></Player>
      },
    ]
  }
])