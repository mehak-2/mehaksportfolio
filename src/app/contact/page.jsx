"use client"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from 'emailjs-com'; // Importing emailjs

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const test = "Let's Connect"

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        }
      )
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <motion.div
          className="h-auto lg:h-full lg:w-1/2 flex items-center justify-center text-6xl mb-12 lg:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="text-center">
            {test.split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  {letter}
                </motion.span>
              )
            })}
          </div>
        </motion.div>

        {/* FORM CONTAINER */}
        <motion.form
          onSubmit={sendEmail}
          ref={form}
          className="h-auto lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-8 sm:p-12 lg:p-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block font-semibold">Dear, Mehak</span>
            <textarea
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none w-full mt-2"
              name="user_email"
              placeholder="Write your message here..."
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block font-semibold">My email address</span>
            <input
              name="user_email"
              type="email"
              className="bg-transparent border-b-2 border-b-black outline-none w-full mt-2"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="block font-semibold">Regards</span>
            <motion.button
              type="submit"
              className="bg-purple-200 rounded font-semibold text-gray-600 p-4 mt-4 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Send
            </motion.button>
          </motion.div>

          {/* Success and Error Messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={success ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {success && (
              <span className="text-green-600 font-semibold mt-4 block">
                Your message has been sent successfully!
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={error ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {error && (
              <span className="text-red-600 font-semibold mt-4 block">
                Something went wrong.
              </span>
            )}
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default ContactPage
