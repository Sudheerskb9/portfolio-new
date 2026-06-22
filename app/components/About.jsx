'use client'

import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../assets/assets'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <Image
            src={assets.user_image}
            alt="Sudheer"
            className="w-64 sm:w-80 rounded-3xl"
          />
          <div className="w-1/2 sm:w-3/4 aspect-square absolute right-0 bottom-0 border-4 border-white rounded-xl" />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300">
            I&apos;m Sudheer, a Software Developer Engineer with 5 years of
            experience crafting high-quality software. I specialize in full-stack
            development, building everything from responsive frontends to
            scalable backend services. I thrive on solving challenging problems
            and delivering products that make a real impact.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <li
                key={i}
                className="border border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={icon} alt="" className="w-7 mt-3 dark:hidden" />
                <Image src={iconDark} alt="" className="w-7 mt-3 hidden dark:block" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, i) => (
              <li
                key={i}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white"
              >
                <Image src={tool} alt="" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
