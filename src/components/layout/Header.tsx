import logo from '@/assets/logo.webp';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useRef } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > lastScrollY.current && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  return (
    <motion.header
      className='fixed top-0 z-50 flex h-[10dvh] w-full justify-between bg-white px-6 dark:bg-gray-800'
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className='p-2'>
        <div className='p-1'>
          <img
            src={logo}
            alt='Logo'
            className='h-16 w-full object-contain dark:invert'
          />
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 text-black md:hidden dark:text-white'
      >
        <svg
          className='h-8 w-8'
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
        } absolute top-[10dvh] left-0 w-full flex-col items-center justify-center space-y-4 space-x-6 border-b border-gray-200 bg-white p-6 transition-all duration-300 ease-in-out md:static md:flex md:w-auto md:flex-row md:space-y-0 md:space-x-6 md:border-none md:bg-transparent md:p-0 dark:border-gray-700 dark:bg-gray-800`}
      >
        <ul className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6'>
          {['Home', 'Listings', "Let's move", 'About Us'].map((item) => (
            <li key={item}>
              <a
                href='#'
                className={`${item === 'Home' ? 'font-bold!' : ''} text-sm font-bold text-black hover:text-blue-500 md:text-lg md:font-normal dark:text-white dark:hover:text-blue-400`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className='my-4 hidden rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 md:block dark:bg-blue-500 dark:shadow-blue-900/20 dark:hover:bg-blue-600'>
        Work with me
      </button>
    </motion.header>
  );
}
