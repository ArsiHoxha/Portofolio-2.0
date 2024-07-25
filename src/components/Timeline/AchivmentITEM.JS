// src/components/AchievementItem.js

import React from 'react';

export default function AchievementItem({ title, date, description }) {
  return (
    <li className="relative">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full ring-2 ring-white dark:bg-green-900 dark:ring-gray-900">
          <svg className="w-4 h-4 text-green-800 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l5.5 3-1.4-6.1 4.9-4.3-6.2-.5L10 1 8.2 7.1l-6.2.5 4.9 4.3L4.5 18z"/>
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 ml-4"></div>
      </div>
      <div className="ml-14 sm:ml-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </li>
  );
}
