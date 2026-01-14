import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
} from '@remixicon/react';
import logo from '@/assets/logo.webp';

export default function Footer() {
  return (
    <footer className='border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111921]'>
      <div className='mx-auto max-w-7xl px-6 py-14'>
        <div className='grid gap-10 md:grid-cols-4'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-lg font-semibold'>
              <div className='p-1'>
                <img
                  src={logo}
                  alt='Logo'
                  className='h-16 w-full object-contain dark:invert'
                />
              </div>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-300'>
              Redefining luxury real estate with integrity, discretion, and
              market expertise. Your partner in exceptional living.
            </p>

            <div className='flex gap-3'>
              <a
                href='https://www.facebook.com/MarciHomes/'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300'
              >
                <RiFacebookFill size={18} />
              </a>
              <a
                href='https://www.instagram.com/marciandlauren_nvrealtors/'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300'
              >
                <RiInstagramLine size={18} />
              </a>
              <a
                href='https://www.linkedin.com/in/marci-metzger-30642496/'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300'
              >
                <RiLinkedinLine size={18} />
              </a>
              <a
                href='https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300'
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  width='18'
                  height='18'
                  data-ux='IconSocial'
                  className='x-el x-el-svg c1-1 c1-2 c1-99 c1-1v c1-2h c1-ek c1-el c1-em c1-b c1-c c1-en c1-eo c1-d c1-ep c1-eq c1-er c1-es c1-et c1-eu c1-ev c1-ew c1-e c1-f c1-g'
                >
                  <path d='M9.988 14.158c-.037.01-3.983 1.134-4.224 1.134-.554-.029-.674-.515-.726-.99a6.35 6.35 0 0 1 .011-1.487c.07-.596.201-1.431.883-1.396.175 0 2.447.822 4.11 1.41.624.215.679 1.136-.054 1.33zm2.112-3.616c.065 1.213-.93 1.54-1.722.454L6.501 5.663c-.055-.21.011-.394.193-.553.57-.523 3.626-1.263 4.432-1.082.273.06.441.194.503.4.048.263.42 5.314.47 6.114zm-.051 5.232c0 .146.007 3.696-.062 3.857-.084.19-.256.308-.522.356-.368.054-.988-.06-1.86-.34-.803-.257-2.068-.682-1.798-1.349.102-.219 1.874-1.994 2.82-2.971.437-.483 1.45-.175 1.422.447zm6.572-3.74c-.204.118-4.041.896-4.307.972l.01-.02c-.66.15-1.29-.586-.85-1.098.136-.117 2.404-2.933 2.656-3.08.19-.113.412-.12.667-.018.671.28 2.01 2.003 2.094 2.686-.004.092.044.371-.27.558zm.368 4.15c-.098.654-1.623 2.33-2.327 2.571-.251.083-.47.064-.645-.063-.183-.111-2.254-3.083-2.367-3.248-.398-.514.248-1.263.933-1.054 0 0 4.03 1.133 4.184 1.25.19.131.262.312.222.544z'></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className='mb-4 font-semibold text-gray-900 dark:text-white'>
              Explore
            </h4>
            <ul className='space-y-3 text-sm text-gray-600 dark:text-gray-400'>
              {[
                'Current Listings',
                'Sold Properties',
                'Market Reports',
                'Neighborhood Guides',
                'Home Valuation',
              ].map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='hover:text-blue-600 dark:hover:text-blue-400'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='mb-4 font-semibold text-gray-900 dark:text-white'>
              Contact
            </h4>
            <ul className='space-y-4 text-sm text-gray-600 dark:text-gray-400'>
              <li className='flex items-start gap-3'>
                <RiMapPinLine className='mt-0.5 text-blue-600' size={18} />
                <span>
                  123 Luxury Lane, Suite 100
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <RiPhoneLine className='text-blue-600' size={18} />
                <a href='tel:+13105550123' className='hover:text-blue-600'>
                  +1 (310) 555-0123
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <RiMailLine className='text-blue-600' size={18} />
                <a
                  href='mailto:marcimetzger@gmail.com'
                  className='hover:text-blue-600'
                >
                  marcimetzger@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className='mb-4 font-semibold text-gray-900 dark:text-white'>
              Stay Connected
            </h4>
            <p className='mb-4 text-sm text-gray-600 dark:text-gray-400'>
              Receive off-market updates and exclusive invitations.
            </p>
            <form className='flex overflow-hidden rounded-lg border border-gray-300'>
              <input
                type='email'
                placeholder='Email address'
                className='w-full px-4 py-2 text-sm outline-none'
              />
              <button
                type='submit'
                className='flex items-center justify-center bg-blue-600 px-4 text-white transition hover:bg-blue-700'
              >
                <RiArrowRightLine size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-200'>
        <div className='mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between'>
          <p>
            © 2024 Marci Metzger Real Estate. All rights reserved. | DRE
            #01234567
          </p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-blue-600'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-blue-600'>
              Terms of Service
            </a>
            <a href='#' className='hover:text-blue-600'>
              Fair Housing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
