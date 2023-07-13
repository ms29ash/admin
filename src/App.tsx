import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Users } from "./pages/users/Users";
import { User } from "./pages/user/User";
import { Products } from "./pages/products/Products";
import { Product } from "./pages/product/Product";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import './styles/global.scss'


const Layout = ()=>{
  return (
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
        <Menu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "product",
          element: <Product />,
        },
      ],
    },
  ]);

  return (
    <div>
<RouterProvider router={router} />
    </div>
  )
}

export default App
