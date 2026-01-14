import { motion } from 'motion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  RiHotelBedLine,
  RiDropLine,
  RiLayoutMasonryLine,
} from '@remixicon/react';

type PropertyCardProps = {
  image: string;
  price: string;
  status?: 'JUST LISTED' | 'PENDING';
  title: string;
  city: string;
  address: string;
  beds: number;
  baths: number;
  size: string;
};

export default function PropertyCard({
  image,
  price,
  status,
  title,
  city,
  address,
  beds,
  baths,
  size,
}: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className='overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md dark:border-gray-800 dark:bg-gray-800'
    >
      {/* Image */}
      <div className='relative'>
        {status && (
          <span className='absolute top-4 left-4 z-10 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white dark:bg-black/60'>
            {status}
          </span>
        )}

        <LazyLoadImage
          src={image}
          alt={title}
          effect='blur'
          className='h-60 w-full object-cover'
        />

        <div className='absolute right-4 bottom-4 text-lg font-semibold text-white drop-shadow-md dark:text-white'>
          {price}
        </div>
      </div>

      {/* Content */}
      <div className='space-y-3 p-5'>
        <div className='flex items-start justify-between'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            {title}
          </h3>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {city}
          </span>
        </div>

        <p className='text-sm text-gray-500 dark:text-gray-400'>{address}</p>

        {/* Meta */}
        <div className='flex gap-5 pt-2 text-sm text-gray-700 dark:text-gray-300'>
          <div className='flex items-center gap-1'>
            <RiHotelBedLine className='h-4 w-4 text-amber-500' />
            <span className='text-gray-900 dark:text-gray-300'>
              {beds} Beds
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <RiDropLine className='h-4 w-4 text-amber-500' />
            <span className='text-gray-900 dark:text-gray-300'>
              {baths} Baths
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <RiLayoutMasonryLine className='h-4 w-4 text-amber-500' />
            <span className='text-gray-900 dark:text-gray-300'>{size}</span>
          </div>
        </div>

        {/* CTA */}
        <button className='mt-4 w-full rounded-xl border border-blue-600 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:hover:bg-blue-900/20'>
          View Details
        </button>
      </div>
    </motion.div>
  );
}
