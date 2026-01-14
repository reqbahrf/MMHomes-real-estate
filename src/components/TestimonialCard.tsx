import { RiStarFill, RiStarHalfFill } from '@remixicon/react';

interface TestimonialCardProps {
  rating: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatar?: string;
}

export default function TestimonialCard({
  rating = 0,
  quote,
  authorName,
  authorTitle,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
      {/* Star Rating */}
      <div className='mb-4 flex gap-1'>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          const isFullStar = ratingValue <= Math.floor(rating);
          const isHalfStar =
            ratingValue === Math.ceil(rating) && rating % 1 !== 0;

          if (isFullStar) {
            return (
              <RiStarFill key={index} size={20} className='text-blue-500' />
            );
          } else if (isHalfStar) {
            return (
              <RiStarHalfFill key={index} size={20} className='text-blue-500' />
            );
          } else {
            return (
              <RiStarFill key={index} size={20} className='text-gray-300' />
            );
          }
        })}
      </div>

      {/* Quote */}
      <blockquote className='mb-6 text-gray-700 italic dark:text-gray-300'>
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className='flex items-center gap-4'>
        {avatar && (
          <img
            src={avatar}
            alt={authorName}
            className='h-12 w-12 rounded-full object-cover'
          />
        )}
        <div>
          <h4 className='font-semibold text-gray-900 dark:text-white'>
            {authorName}
          </h4>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            {authorTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
