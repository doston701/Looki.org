import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./components/Login/Login";
import CheckLogin from "./components/Check/CheckLogin";
import RegisterPage from "./components/Register/Register";
import Admin from "./components/Admin";
import { AddToCart } from "./components/addToCart/AddToCart";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Servicess/Services";
import Product from "./components/Product/Product";
import OurProduct from "./components/OurProduct/OurProduct";
import Latest from "./components/Latest/Latest";
import Service from "./components/Deliver/Service";
import Footer from "./components/Footer/Footer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RootLayout />
      </>
    ),
  },
  {
    path: "/addToCart",
    element: (
      <>
        <Header />
        <AddToCart />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <Header />
        <Admin />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/checkLogin",
    element: (
      <>
        <Header />
        <CheckLogin />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <RegisterPage />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
        <Services />
        <Footer />
      </>
    ),
  },
]);
