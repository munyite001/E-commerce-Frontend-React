import "./App.css";
import Navbar  from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";
import Slider from "./components/Slider";

export default function App() {

  // States
  const categories = ["electronics","jewellery","men's clothing","women's clothing"];
  const [openMenu, setOpenMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [images, setImages] = useState([
    {
      url: "/images/image-slider-1.jpg",
      text: "Electronics"
    },
    {
      url: "/images/image-slider-2.jpg",
      text: "Men's Clothing"
    },
    {
      url: "/images/image-slider-3.jpg",
      text: "Women's Clothing"
    },
    {
      url: "/images/image-slider-4.jpg",
      text: "Jewllery"
    },

  ])
  //  Functions
  const openMenuHandler = () => {
    setOpenMenu(true);
  }

  const closeMenuHandler = () => {
    setOpenMenu(false);
  }

  return (
    <div className="container">
      <Navbar 
        categories={categories}
        openMenuHandler={openMenuHandler}
        isSmallScreen={isSmallScreen}
        />
      <MobileMenu
        categories={categories}
        openMenu={openMenu}
        closeMenuHandler={closeMenuHandler}
        />
      <Slider 
        slides={images}
      />
    </div>
  )
}