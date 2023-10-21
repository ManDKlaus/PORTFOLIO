import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image'
import ContactW from "../../../public/img/ContactW.png"
import { Emblema_One } from 'next/font/google'
const emblemaOne = Emblema_One({ subsets: ['latin'], weight: ["400"] })

function Contact() {
  const [state, handleSubmit] = useForm("mleydpeo");
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 10000);
      formRef.current.reset();
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleAlertClick = () => {
    setShowAlert(false);
  };

  return (
    <section id='Contact' className='relative h-auto lg:min-h-[calc(100vh/10*8)] w-full mb-8 lg:mb-0 snap-start snap-always flex flex-col justify-center z-30'>
      <h2 className={`lg:indent-6 text-white dark:text-slate-950 opacity-70  text-4xl lg:text-[80px] text-center font-semibold ${emblemaOne.className} leading-[80px] custom-text-shadow z-0`} >Contact Me</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='w-3/5 mx-auto lg:ml-[calc(100%/5+10px)] flex flex-col gap-2 items-center text-white dark:text-gray-950 ' >
        <input
          className='w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-l 
          
          dark:from-white dark:to-gray-200 
          
          from-slate-500 via-slate-500 to-slate-700
          
          border border-gray-600
          
          shadow-inner shadow-slate-950 dark:shadow-slate-700'
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        <input
          className='w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-l
          
          dark:from-gray-100 dark:via-gray-200 dark:to-gray-300
          
          from-slate-500 via-slate-500 to-slate-700 
          
          border border-gray-400 dark:border-gray-700
          
          shadow-inner shadow-slate-900 dark:shadow-slate-700'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <input
          className='w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-l
          
          dark:from-gray-200 dark:via-gray-300 dark:to-gray-300
          
          from-slate-500 to-slate-700
          
          border border-gray-400 dark:border-gray-600 
          
          shadow-inner shadow-slate-800 dark:shadow-slate-600'
          type='text'
          name='subject'
          placeholder='Subject'
          required
        />
        <textarea
          className='w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-bl
          
          dark:from-gray-200 dark:via-gray-300 dark:to-gray-400
          
          from-slate-500 to-slate-950
          
          border border-gray-500 dark:border-gray-600
          
          shadow-inner shadow-slate-700 dark:shadow-slate-500'
          name='message'
          placeholder='Message'
          rows='5'
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="self-end mr-8 scale-90">
          <button type='submit' disabled={state.submitting} className="relative inline-flex items-center pl-12 py-1 overflow-hidden dark:text-yellow-600 text-yellow-400 mt-2 rounded-full group">
            <span className="absolute right-0 flex items-center justify-center w-7 h-7 duration-1000 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-100 dark:from-yellow-800 dark:to-yellow-300 group-hover:h-full group-hover:top-0 transform translate-x-full group-hover:translate-x-0 ease">
              <Image width="20" height="20" src={ContactW} alt="Logo contact" />
            </span>
            <span className="relative text-shadow-md group-hover:-translate-x-9 duration-1000 ease">Send Message</span>
          </button>
        </div>
      </form>

      {showAlert && (
        <div
          id="marketing-banner"
          onClick={handleAlertClick}
          className="fixed z-50 flex flex-col md:flex-row w-[calc(100vw-96px-25vw)] p-3 bg-white border rounded-lg shadow-sm lg:max-w-7xl right-20 top-4 bg-green-700 border-2 border-green-800 dark:border-green-700 indent-0"
        >
          <div className="flex items-center md:border-r mr-3 mb-3 md:mb-0 w-1/5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3"
              alt="Flowbite Logo"
            />
            <span className="pr-3 text-lg font-semibold text-white">Message</span>
          </div>
          <p className="flex items-center justify-center text-sm text-gray-100 w-full">
            Successfully sent!
          </p>
        </div>
      )}
    </section>
  );
}

export default Contact;