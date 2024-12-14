export const toggleDarkMode = (isDark: boolean) => {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('darkMode', JSON.stringify(isDark));
};

export const getInitialTheme = (): boolean => {
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) {
    return JSON.parse(saved);
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};