'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    setMenuOpen(true)
    setTimeout(() => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }, 100)
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
    setTimeout(() => {
      setMenuOpen(false)
    }, 300)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [darkMode])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''
        }`}
      >
        <a href="#top">
          <Image src={assets.logo} alt="Sudheer" className="w-28 cursor-pointer dark:hidden" />
          <Image src={assets.logo_dark} alt="Sudheer" className="w-28 cursor-pointer hidden dark:block" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
          }`}
        >
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#mywork">My Work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode((prev) => !prev)}>
            <Image src={assets.moon_icon} alt="" className="w-6 dark:hidden" />
            <Image src={assets.sun_icon} alt="" className="w-6 hidden dark:block" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3 dark:hidden" />
            <Image src={assets.arrow_icon_dark} alt="" className="w-3 hidden dark:block" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6 dark:hidden" />
            <Image src={assets.menu_white} alt="" className="w-6 hidden dark:block" />
          </button>
        </div>

        {menuOpen && (
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
          >
            <div className="absolute right-6 top-6" onClick={closeMenu}>
              <Image src={assets.close_black} alt="" className="w-5 cursor-pointer dark:hidden" />
              <Image src={assets.close_white} alt="" className="w-5 cursor-pointer hidden dark:block" />
            </div>
            <li><a onClick={closeMenu} href="#top">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About me</a></li>
            <li><a onClick={closeMenu} href="#services">Services</a></li>
            <li><a onClick={closeMenu} href="#mywork">My Work</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar
