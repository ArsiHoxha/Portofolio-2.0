import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Use the official emailjs-com package
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaInstagram, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Arsi HOxha" // Replace with your recipient's name
    };

    emailjs
      .send('service_bvbztr8', 'template_wmy96ou', templateParams, 'vTLRM0TDzwJ5suhgk')
      .then(
        () => {
          setSuccessMessage('Email successfully sent!');
          setErrorMessage('');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setErrorMessage('Failed to send email. Please try again later.');
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <section
    class="relative z-10 overflow-hidden bg-gray-900 border-t-4    dark:bg-dark py-20 lg:py-[120px]" id='contact'
    >
    <div class="container mx-auto">
       <div class="flex flex-wrap -mx-4 lg:justify-between">
          <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
             <div class=" max-w-[570px] lg:mb-0">
                <span class="block mb-3  text-white font-semibold text-primary">
                Contact Me
                </span>
                <p className="text-base flex justify-center leading-relaxed text-white dark:text-white-6 ">
   <a href="https://www.instagram.com/arsi0hoxha/" target="_blank" rel="noopener noreferrer" className="mr-4">
      <FaInstagram size={24} />
   </a>
   <a href="https://github.com/ArsiHoxha" target="_blank" rel="noopener noreferrer">
      <FaGithub size={24} />
   </a>
</p>
             </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
             <div
                class="relative p-8  rounded-lg shadow-lg  sm:p-12"
                >
             

             <form ref={form} onSubmit={sendEmail} className="space-y-3 bg-transparent p-6 rounded-lg shadow-lg">
  <div className="mb-6">
    <label className="block text-sm font-medium text-white dark:text-gray-400">Name</label>
    <input
      type="text"
      name="user_name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border-stroke dark:border-dark-3 dark:text-white-6 dark:bg-dark bg-transparent text-white focus:border-primary w-full rounded border py-3 px-4 text-base outline-none transition duration-300 ease-in-out transform hover:scale-105"
      required
    />
  </div>
  <div className="mb-6">
    <label className="block text-sm font-medium text-white dark:text-gray-400">Email</label>
    <input
      type="email"
      name="user_email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="border-stroke dark:border-dark-3 dark:text-white-6 dark:bg-dark bg-transparent text-white focus:border-primary w-full rounded border py-3 px-4 text-base outline-none transition duration-300 ease-in-out transform hover:scale-105"
      required
    />
  </div>
  <div className="mb-6">
    <label className="block text-sm font-medium text-white dark:text-gray-400">Message</label>
    <textarea
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows="6"
      className="border-stroke dark:border-dark-3 dark:text-white-6 dark:bg-dark bg-transparent text-white focus:border-primary w-full resize-none rounded border py-3 px-4 text-base outline-none transition duration-300 ease-in-out transform hover:scale-105"
      required
    ></textarea>
  </div>
  <div>
    <button
      type="submit"
      className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90 transform hover:scale-105"
    >
      Send Message
    </button>
  </div>
  {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
  {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
</form>





       
                <div>
                   <span class="absolute -top-10 -right-9 z-[-1]">
                      <svg
                         width="100"
                         height="100"
                         viewBox="0 0 100 100"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                            fill="#3056D3"
                            />
                      </svg>
                   </span>
                   <span class="absolute -right-10 top-[90px] z-[-1]">
                      <svg
                         width="34"
                         height="134"
                         viewBox="0 0 34 134"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle
                            cx="31.9993"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 31.9993 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 31.9993 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 31.9993 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 31.9993 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 31.9993 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 31.9993 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 31.9993 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 31.9993 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 31.9993 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 31.9993 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 17.3333 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 17.3333 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 17.3333 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 17.3333 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 17.3333 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 17.3333 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 17.3333 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 17.3333 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 17.3333 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 17.3333 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 2.66536 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 2.66536 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 2.66536 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 2.66536 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 2.66536 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 2.66536 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 2.66536 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 2.66536 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 2.66536 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 2.66536 1.66665)"
                            fill="#13C296"
                            />
                      </svg>
                   </span>
                   <span class="absolute -left-7 -bottom-7 z-[-1]">
                      <svg
                         width="107"
                         height="134"
                         viewBox="0 0 107 134"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle
                            cx="104.999"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 104.999 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 104.999 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 104.999 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 104.999 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 104.999 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 104.999 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 104.999 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 104.999 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 104.999 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="104.999"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 104.999 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 90.3333 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 90.3333 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 90.3333 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 90.3333 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 90.3333 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 90.3333 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 90.3333 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 90.3333 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 90.3333 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="90.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 90.3333 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 75.6654 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 31.9993 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 75.6654 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 31.9993 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 75.6654 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 31.9993 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 75.6654 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 31.9993 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 75.6654 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 31.9993 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 75.6654 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 31.9993 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 75.6654 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 31.9993 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 75.6654 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 31.9993 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 75.6654 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 31.9993 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="75.6654"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 75.6654 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="31.9993"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 31.9993 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 60.9993 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 17.3333 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 60.9993 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 17.3333 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 60.9993 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 17.3333 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 60.9993 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 17.3333 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 60.9993 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 17.3333 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 60.9993 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 17.3333 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 60.9993 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 17.3333 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 60.9993 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 17.3333 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 60.9993 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 17.3333 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="60.9993"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 60.9993 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="17.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 17.3333 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 46.3333 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="132"
                            r="1.66667"
                            transform="rotate(180 2.66536 132)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 46.3333 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 2.66536 117.333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 46.3333 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 2.66536 102.667)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 46.3333 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="88"
                            r="1.66667"
                            transform="rotate(180 2.66536 88)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 46.3333 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 2.66536 73.3333)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 46.3333 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="45"
                            r="1.66667"
                            transform="rotate(180 2.66536 45)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 46.3333 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="16"
                            r="1.66667"
                            transform="rotate(180 2.66536 16)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 46.3333 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="59"
                            r="1.66667"
                            transform="rotate(180 2.66536 59)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 46.3333 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 2.66536 30.6666)"
                            fill="#13C296"
                            />
                         <circle
                            cx="46.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 46.3333 1.66665)"
                            fill="#13C296"
                            />
                         <circle
                            cx="2.66536"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 2.66536 1.66665)"
                            fill="#13C296"
                            />
                      </svg>
                   </span>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default ContactUs;