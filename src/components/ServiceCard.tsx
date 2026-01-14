import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className='group flex flex-col items-start gap-6'>
      <div className='group-hover:bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 transition-colors dark:bg-gray-800'>
        <div className='text-primary text-3xl font-light'>{icon}</div>
      </div>
      <div>
        <h3 className='mb-3 text-xl font-bold text-[#111418] dark:text-white'>
          {title}
        </h3>
        <p className='leading-relaxed text-gray-600 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
}
