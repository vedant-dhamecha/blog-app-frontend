import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiAlignLeftSimpleFill } from "react-icons/pi";
import { images } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/user";
import { Link, useNavigate } from "react-router-dom";

const NavItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Blog", type: "link", href: "/blog" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "Faq", type: "link", href: "/faq" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <Link to={item.href} className="px-4 py-2">
            {item.name}
          </Link>
          <span className="cursor-pointer text-blue-500 dark:text-[#C9E0F2] absolute trnsition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            <PiAlignLeftSimpleFill />
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-light-pink dark:bg-[#9aa9b4] lg:bg-white text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="hover:bg-dark-pink lg:hover:bg-dark-hard dark:hover:bg-[#3a576d] hover:text-white px-4 py-2 text-white lg:text-black dark:text-[#1e496a]"
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = ({isDarkMode}) => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [profileDrowpdown, setProfileDrowpdown] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  // const [isDarkMode, setIsDarkMode] = useState(false); //darkmode

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white shadow-lg dark:shadow-gray-700/50 dark:bg-[#050e15]">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/">
          {isDarkMode ? (
            <img className="w-16" src={images.LogoFooter} alt="logo" />
          ) : (
            <img className="w-16" src={images.Logo} alt="logo" />
          )}
        </Link>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6 dark:text-white"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6 dark:text-white" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard dark:bg-[#050e15] lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-black dark:text-[#1E496A] flex flex-col lg:flex-row gap-x-2 font-semibold">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-blue-500 bg-light-pink  lg:bg-white dark:bg-[#101010] text-blue-500  px-6 py-2 rounded-full lg:text-blue-500 font-semibold hover:bg-blue-500  hover:text-white transition-all duration-300"
                    onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDrowpdown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="bg-dark-soft lg:bg-white dark:bg-[#1E496A] text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {userState?.userInfo?.admin && (
                        <button
                          onClick={() => navigate("/admin")}
                          type="button"
                          className="hover:bg-dark-hard dark:hover:bg-[#3a576d] hover:text-white px-4 py-2 text-white lg:bg-transparent bg-light-pink dark:bg-[#9aa9b4] lg:text-black dark:text-[#1E496A]"
                        >
                          Admin Dashboard
                        </button>
                      )}
                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="hover:bg-dark-hard dark:hover:bg-[#3a576d] hover:text-white px-4 py-2 text-white lg:bg-transparent bg-light-pink dark:bg-[#9aa9b4] lg:text-black dark:text-[#1E496A]"
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover:bg-dark-hard dark:hover:bg-[#3a576d] hover:text-white px-4 py-2 text-white lg:bg-transparent bg-light-pink dark:bg-[#9aa9b4] lg:text-black dark:text-[#1E496A]"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="mt-5 lg:mt-0 border-2 bg-light-pink dark:bg-[#101010] lg:bg-white border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
