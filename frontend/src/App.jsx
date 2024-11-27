import { useState } from "react";
import Footer from "./components/footer/Footer";
import Navigationbar from "./components/header/Navigationbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Listing from "./components/listing/Listing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import AddCar from "./components/addcar/AddCar";
import PageNotFound from "./components/notfound/PageNotFound";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import CarDetails from "./components/listing/CarDetails";

const App = () => {
  return (
    <>
      {/* header section  */}
      <Navigationbar />

      {/* react router setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Listing />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* footer section */}
      <Footer />
    </>
  );
};

export default App;
