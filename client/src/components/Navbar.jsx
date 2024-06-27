import React, { useState, useEffect } from "react";
import Navbuttons from "./NavBarButton/Navbuttons";
import Navbutton from "./NavBarButton/Navbutton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/userSlice";
import { Avatar } from "@material-tailwind/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [marginLeft, setMarginLeft] = useState("0rem");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(signOut());
    navigate("/Dashboard");
    console.log(currentUser);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 450) {
        setMarginLeft("0rem");
      } 
      else if (width >= 450 && width < 767) {
        setMarginLeft("-15vh");
      }
      // }else if (width < 800 && width >= 750) {
      //   setMarginLeft("26rem");
      // } else if (width < 750 ) {
      //   setMarginLeft("20rem");
      // } else if (width < 700) {
      //   setMarginLeft("20rem");
      // } 
      else {
        setMarginLeft("0rem");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const divStyle = {
    marginLeft: marginLeft,
  };

  return (
    <>
      <div className="navbar flex items-center justify-between h-16 w-full fixed top-0 bg-white shadow-md px-6 z-50">
        <div className="title flex items-center">
          <img
            src="./assets/logo.svg"
            className="w-12 h-12 object-contain mr-4"
            alt="logo"
          />
          <div className="name text-2xl font-bold">Achievo</div>
        </div>
        <div className="hidden md:flex">
          <Navbuttons />
        </div>
        
        <div style={divStyle}>
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="text-black hover:text-gray-700 transition-all ease-in-out"
              
            >
              LOG OUT
            </button>
          ) : (
            <Link to={"/Login"} className="text-black no-underline">
              <Navbutton title="LOG IN" />
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center" >
          <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "flex" : "hidden"} md:hidden mt-20 justify-center pl-20 bg-gray-400`}>
        <Navbuttons />
      </div>
    </>
  );
}
