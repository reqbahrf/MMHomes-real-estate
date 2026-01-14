import { motion } from 'motion/react';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonialDummy } from '@/data/testimonialDummy';

export default function TestimonialSection() {
  const duplicatedTestimonials = [...testimonialDummy, ...testimonialDummy];

  return (
    <section
      id='testimonials'
      className='bg-gray-50 px-6 py-24 lg:px-40 dark:bg-[#111921]'
    >
      <div className='mx-auto max-w-[1440px]'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-[#111418] lg:text-4xl dark:text-white'>
            Client Testimonials
          </h2>
          <div className='bg-primary mx-auto mb-6 h-1 w-16'></div>
          <p className='mx-auto max-w-2xl text-gray-500 dark:text-gray-400'>
            Hear what our satisfied clients have to say about their experience
            working with us.
          </p>
        </div>

        <div className='relative overflow-hidden py-6'>
          <motion.div
            className='flex gap-6'
            animate={{
              x: [0, -50 * duplicatedTestimonials.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className='w-80 shrink-0'>
                <TestimonialCard
                  rating={testimonial.rating}
                  quote={testimonial.quote}
                  authorName={testimonial.authorName}
                  authorTitle={testimonial.authorTitle}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
