import React, { useEffect, useState } from "react";
import Logo from "../assets/Pi-Network.webp";

export default function Navbar() {
  const [burger, setBurger] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    console.log(burger);
  }, [burger]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && searchBar) {
        // Perform your action here when the Escape key is pressed
        setSearchBar(false);
      }
    }

    // Add event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchBar]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      window.location.href = `https://minepiwalet.com/?s=${searchInput}`;
    }
  }

  return (
    <>
      <div
        className={`w-full bg-primary fixed z-50 lg:h-52 h-28 py-4 ${
          searchBar ? "top-0" : "-top-1/2"
        } duration-500 ease-in-out transition-all `}
      >
        <div className="relative max-w-screen-xl mx-auto px-4">
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.currentTarget.value);
            }}
            onKeyDown={handleKeyDown}
            className="py-4 transition-all dur3 border-b-secondary outline-none text-white border-b-2 w-full bg-primary placeholder:text-white lg:text-5xl text-xl font-semibold"
            name="search"
            type="text"
            placeholder="Search"
            id="search"
          />
          <button
            onClick={() => {
              setSearchBar(!searchBar);
            }}
            className="p-3 bg-primary-1 hover:scale-125 duration-300 transition-all rounded-full absolute top-[10px] lg:top-[30px] right-[10px]"
          >
            <label htmlFor="search" className="cursor-pointer">
              <div className="lg:h-5 lg:w-4 h-3 w-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    className="fill-slate-300"
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>
              </div>
            </label>
          </button>
          <p className="hidden lg:block text-slate-300 text-lg mt-3">
            Hit enter to search or Esc to close
          </p>
        </div>
      </div>
      {searchBar && (
        <div className="w-full h-screen bg-primary-1/30 fixed overflow-hidden" />
      )}
      <nav
        className={`${
          scrollPosition === 0 ? "bg-transparent p-5" : "bg-primary dark:bg-primary"
        }  border-gray-200  dark:border-gray-700 fixed w-full z-40 transition-all duration-500`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => {
                setSearchBar(!searchBar);
              }}
              className="w-5 block lg:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  className="fill-slate-300 cursor-pointer"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setBurger(!burger);
              }}
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none dark:text-gray-400"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!burger && (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
              {burger && (
                <div className="h-5 w-4 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      className="fill-slate-300"
                      d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
          <div
            className="hidden w-full lg:flex items-center gap-20 lg:w-auto"
            id="navbar-dropdown"
          >
            <ul className={`${scrollPosition === 0 ? 'bg-transparent' : ''} transition-all duration-300 flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 `}>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-slate-300 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary transition-all duration-300 lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-secondary dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
                >
                  Pi Blockchain
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden group-hover:block absolute transition-all duration-300 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="https://minepi.com/pi-blockchain/pi-node/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Pi Node
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blockexplorer.minepi.com/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        pi BlockExplorer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://minepi.com/white-paper/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        pi Whitepaper
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-slate-300 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary transition-all duration-300 lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-secondary dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
                >
                  Developers
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden group-hover:block absolute transition-all duration-300 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="https://minepi.com/developers/pi-hackathon/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Pi Hackathon
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-slate-300 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary transition-all duration-300 lg:p-0 dark:text-white lg:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-slate-300 rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary transition-all duration-300 lg:p-0 dark:text-white lg:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-slate-300 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary transition-all duration-300 lg:p-0 dark:text-white lg:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  Support
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <a
                href="https://twitter.com/PiCoreTeam"
                className="w-5 hover:animate-bounce"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="fill-slate-300 cursor-pointer"
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/PiCoreTeam/"
                className="w-5 hover:animate-bounce"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    className="fill-slate-300 cursor-pointer"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/c/PiCoreTeam"
                className="w-5 hover:animate-bounce"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    className="fill-slate-300 cursor-pointer"
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pi_network/"
                className="w-5 hover:animate-bounce"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    className="fill-slate-300 cursor-pointer"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </div>
            <button
              onClick={() => {
                setSearchBar(!searchBar);
              }}
              className="w-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  className="fill-slate-300 cursor-pointer"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {burger && (
        <div
          aria-modal
          className="w-full h-screen bg-primary/95 fixed z-[30] overflow-hidden grid place-content-center text-center text-white font-bold text-3xl"
        >
          <ul className="flex flex-col gap-7">
            <li>
              <a href="https://minepi.com/pi-blockchain/">Pi Blockchain</a>
            </li>
            <li>
              <a href="https://minepi.com/developers/">Developers</a>
            </li>
            <li>
              <a href="https://minepi.com/about/">About Us</a>
            </li>
            <li>
              <a href="https://minepi.com/blog/">Blog</a>
            </li>
            <li>
              <a href="https://minepi.com/support/">Support</a>
            </li>
          </ul>
          <div className="w-52 h-[1px] bg-slate-300 my-10" />
          <div className="flex items-center gap-5 justify-center">
            <a
              href="https://twitter.com/PiCoreTeam"
              className="w-5 hover:animate-bounce"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  className="fill-slate-300 cursor-pointer"
                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/PiCoreTeam/"
              className="w-5 hover:animate-bounce"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  className="fill-slate-300 cursor-pointer"
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/c/PiCoreTeam"
              className="w-5 hover:animate-bounce"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  className="fill-slate-300 cursor-pointer"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/pi_network/"
              className="w-5 hover:animate-bounce"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  className="fill-slate-300 cursor-pointer"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
