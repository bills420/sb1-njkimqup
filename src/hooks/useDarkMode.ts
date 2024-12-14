import { useState, useEffect } from 'react';
import { toggleDarkMode, getInitialTheme } from '../utils/theme';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    toggleDarkMode(isDark);
  }, [isDark]);

  return [isDark, setIsDark] as const;
};