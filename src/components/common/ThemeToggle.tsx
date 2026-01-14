import { useThemeContext } from '@/hooks/useThemeContext';
import { RiSunFill, RiMoonFill } from '@remixicon/react';
const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <button
      title='Toggle Theme'
      onClick={toggleTheme}
      className='group fixed right-2 bottom-2 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125 md:right-4 md:bottom-4 dark:bg-gray-600 dark:text-white'
    >
      {isDarkTheme ? <RiSunFill /> : <RiMoonFill />}
    </button>
  );
};

export default ThemeToggle;
