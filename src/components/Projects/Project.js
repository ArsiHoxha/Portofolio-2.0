import React from 'react';
import Navbar from '../NavBar/NavBar';

export default function Project() {

  const go = () => {
    window.location = 'https://github.com/ArsiHoxha'
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Ai Moon Landing Reinforcment Model</h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded" onClick={go}>View More</button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Ai Path Finding Algorithm Using Reinforcment Lerning</h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded" onClick={go} >View More</button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Fashion E-Commerce Store </h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded" onClick={go} >View More</button>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">A Voice Controlled mini-game with pure JavaScript </h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded" onClick={go} >View More</button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Social Media WEB APP</h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded" onClick={go} >View More</button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Honey Store </h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded" onClick={go} >View More</button>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-full max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://img.goodfon.com/original/1920x1080/b/16/3d-robot-belyy-fon.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Harry Fultz Inventory System  </h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">View More</button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-full max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://commercelab.shop/templates/yootheme/cache/8f/edd-braintree-updated-nov2020s-8fb37e38.png"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Google Oath2 Braintree Payment Web App Demo</h2>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">View More</button>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-full max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Coming Soon</h2>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Coming Soon </h2>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Coming Soon</h2>
          </div>
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 group-hover:rotate-y-180"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white rounded-lg backface-hidden transform rotate-y-180">
            <h2 className="text-lg mb-2">Coming Soon</h2>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
