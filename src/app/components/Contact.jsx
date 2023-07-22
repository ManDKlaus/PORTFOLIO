import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

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
    <section id='Contact' className='min-h-screen w-full snap-start snap-always flex flex-col justify-center'>
      <h2 className='text-3xl font-semibold mb-4'>Contact Me</h2>
      <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
        <input
          className='py-1 px-2 rounded placeholder:text-gray-200 dark:text-gray-950'
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        <input
          className='py-1 px-2 rounded placeholder:text-gray-200 dark:text-gray-950'
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
          className='py-1 px-2 rounded placeholder:text-gray-200 dark:text-gray-950'
          type='text'
          name='subject'
          placeholder='Subject'
          required
        />
        <textarea
          className='py-1 px-2 rounded placeholder:text-gray-200 dark:text-gray-950'
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
        <button type='submit' disabled={state.submitting} className='mt-2'>Send Message</button>
      </form>
      {showAlert && (
        <div onClick={handleAlertClick} className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
            Successfully sent!
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;