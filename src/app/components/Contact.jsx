import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import ContactW from "../../../public/img/ContactW.png";
import Titles from './Titles';

function Contact({ altoVentana }) {
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

  const dashboard = useSelector(state => state.dashboard);

  return (
    <section
      id='Contact'
      className={`relative h-[${altoVentana / 2}px] md:h-[${altoVentana}px] lg:min-h-full w-full 
    
      snap-start snap-always flex flex-col justify-center items-center`}
    >

      <Titles title="Contact Me" />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='w-3/5 mx-auto lg:ml-[calc(20%+10px)] flex flex-col gap-2 items-center text-white dark:text-gray-950 ' >
        <input
          className={`w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-r 
          
          ${dashboard ? "dark:from-emerald-50 dark:to-emerald-200 from-neutral-500 via-neutral-500 to-neutral-700" : "dark:from-white dark:to-gray-200 from-slate-500 via-slate-500 to-slate-700"}
          
          border border-gray-600
          
          shadow-inner ${dashboard ? "shadow-neutral-950 dark:shadow-neutral-700" : "shadow-slate-950 dark:shadow-slate-700"}`}
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        <input
          className={`w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-r
          
          ${dashboard ? "dark:from-emerald-100 dark:via-emerald-200 dark:to-emerald-300 from-neutral-500 via-neutral-500 to-neutral-700" : "dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-slate-500 via-slate-500 to-slate-700"}
          
          border border-gray-400 dark:border-gray-700
          
          shadow-inner ${dashboard ? "shadow-neutral-900 dark:shadow-neutral-700" : "shadow-slate-900 dark:shadow-slate-700"}`}
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
          className={`w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-r
          
          ${dashboard ? "dark:from-emerald-200 dark:via-emerald-300 dark:to-emerald-300 from-neutral-500 to-neutral-700" : "dark:from-gray-200 dark:via-gray-300 dark:to-gray-300 from-slate-500 to-slate-700"}
          
          border border-gray-400 dark:border-gray-600 
          
          shadow-inner ${dashboard ? "shadow-neutral-800 dark:shadow-neutral-600" : "shadow-slate-800 dark:shadow-slate-600"}`}
          type='text'
          name='subject'
          placeholder='Subject'
          required
        />
        <textarea
          className={`w-full py-1 px-2 rounded placeholder:text-gray-400 placeholder:opacity-60
          
          bg-gradient-to-br
          
          ${dashboard ? "dark:from-emerald-200 dark:via-emerald-300 dark:to-emerald-400 from-neutral-500 to-neutral-950" : "dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 from-slate-500 to-slate-950"}
          
          
          border border-gray-500 dark:border-gray-600
          
          shadow-inner ${dashboard ? "shadow-neutral-700 dark:shadow-neutral-500" : "shadow-slate-700 dark:shadow-slate-500"}`}
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
        <div className="w-full self-center scale-90 group">
          <button type='submit' disabled={state.submitting} className="relative w-full flex  inline-flex justify-center items-center transform duration-1000 ease bg-white/10 shadow-md rounded-t-sm p-2 overflow-hidden dark:text-yellow-600 text-yellow-400 rounded-full ">
            <span className="relative text-shadow-md translate-x-5 group-hover:-translate-x-2 duration-1000 ease">Send Message</span>
            <span className="flex items-center justify-center w-7 h-7 mx-2 duration-1000 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-100 dark:from-yellow-800 dark:to-yellow-300 transform translate-x-[450px] group-hover:translate-x-0 ease">
              <Image width="20" height="20" src={ContactW} alt="Logo contact" />
            </span>
          </button>
        </div>
      </form>

      {showAlert && (
        <div
          id="marketing-banner"
          onClick={handleAlertClick}
          className="fixed top-4 mx-auto z-50 flex flex-col justify-center md:flex-row w-[calc(75vw/3*2)] min-w-52 gap-4 p-3 border rounded-lg shadow-sm lg:max-w-7xl bg-green-900 border-2 border-green-800 dark:border-green-700 indent-0"
        >
          <div className="w-52 flex items-center justify-between gap-4 px-4 ">
            <img
              src='https://img.icons8.com/pulsar-line/24/paper-plane.png'
              className="h-6 invert"
              alt="Flowbite Logo"
            />
            <span className="text-lg text-white font-semibold">Message</span>
          </div>
          <p className="w-full flex items-center justify-center text-sm text-gray-100 md:border-l">
            Successfully sent!
          </p>
        </div>
      )}
    </section>
  );
}

export default Contact;