import { useThemeContext } from '@/hooks/useThemeContext';
import { RiSunFill, RiMoonFill } from '@remixicon/react';
const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <button
      title='Toggle Theme'
      onClick={toggleTheme}
      className='group fixed right-4 bottom-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800 transition-transform duration-300 ease-in-out hover:scale-125 dark:bg-gray-600 dark:text-white'
    >
      {isDarkTheme ? <RiSunFill /> : <RiMoonFill />}
    </button>
  );
};

export default ThemeToggle;
