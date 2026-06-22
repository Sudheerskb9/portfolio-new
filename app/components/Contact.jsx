'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Contact = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      setResult(data.message)
    }
  }

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-light dark:bg-darkTheme">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-light focus:border-darkTheme duration-500 dark:bg-darkHover/30 dark:border-white/50"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-light focus:border-darkTheme duration-500 dark:bg-darkHover/30 dark:border-white/50"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-light focus:border-darkTheme duration-500 dark:bg-darkHover/30 dark:border-white/50"
        />
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white dark:hover:bg-darkHover"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4 text-center text-sm">{result}</p>
      </form>
    </div>
  )
}

export default Contact
