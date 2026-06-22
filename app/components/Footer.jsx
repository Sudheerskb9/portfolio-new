'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <Image src={assets.logo_dark} alt="" className="w-36 mx-auto mb-2 hidden dark:block" />

        <div className="w-max flex gap-2 mx-auto mb-2">
          <Image src={assets.mail_icon} alt="" className="w-6 dark:hidden" />
          <Image src={assets.mail_icon_dark} alt="" className="w-6 hidden dark:block" />
          <a href="mailto:sudheerskb9@gmail.com" className="hover:underline">
            sudheerskb9@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 dark:border-white/50">
        <p className="text-sm dark:text-white/80">
          © {new Date().getFullYear()} Sudheer. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="#top" className="hover:underline dark:text-white/80">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline dark:text-white/80">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline dark:text-white/80">
              Services
            </a>
          </li>
          <li>
            <a href="#mywork" className="hover:underline dark:text-white/80">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline dark:text-white/80">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
