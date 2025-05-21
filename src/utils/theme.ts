// Utility function to check if the user prefers dark mode
export const userPrefersDarkMode = (): boolean => {
  return false; // Always return false to default to light mode
};

// Initialize theme based on user preference or stored value
export const initializeTheme = (): void => {
  const isDarkMode = localStorage.theme === 'dark';
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
};

// Toggle theme between light and dark
export const toggleTheme = (): void => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
};

// Get current theme
export const getCurrentTheme = (): 'dark' | 'light' => {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};