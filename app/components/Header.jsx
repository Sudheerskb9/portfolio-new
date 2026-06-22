'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <div className="flex flex-col items-center">
        <Image
          src={assets.profile_img}
          alt="Sudheer"
          className="rounded-full w-32 sm:w-40"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Sudheer
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software Developer Engineer based in India.
      </h1>
      <p className="max-w-2xl font-Ovo text-gray-700 dark:text-gray-300">
        With 5 years of experience, I build scalable web applications, robust
        APIs, and clean user experiences — turning complex problems into
        elegant software solutions.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:border-black dark:text-black"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4 dark:hidden" />
          <Image src={assets.right_arrow} alt="" className="w-4 hidden dark:block" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  )
}

export default Header
