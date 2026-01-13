import logo from '@/assets/logo.webp';
import { useState } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='flex justify-between bg-white dark:bg-gray-800 w-full h-[10dvh] fixed top-0 z-50 px-6'>
      <div className='p-2'>
        <div className='bg-white rounded-md p-1'>
          <img
            src={logo}
            alt='Logo'
            className='w-full h-16 object-contain'
          />
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden p-2 text-black dark:text-white'
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          )}
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } items-center justify-center space-x-6 flex-col md:flex md:flex-row absolute md:static top-[10dvh] left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent p-6 md:p-0 border-b md:border-none border-gray-200 dark:border-gray-700 space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ease-in-out`}
      >
        <ul className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 '>
          {['Home', 'Listings', "Let's move", 'About Us'].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                className='text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 text-sm md:text-lg font-bold md:font-normal'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
