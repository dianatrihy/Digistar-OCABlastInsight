import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Deklarasikan ThemeContext
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const lightModeMediaQuery = window.matchMedia(
    '(prefers-color-scheme: light)'
  );
  const mode = lightModeMediaQuery.matches ? 'light' : 'dark';

  // Declare state theme
  const [theme, setTheme] = useState(mode);
  const [color] = useState('red');
  const [font] = useState('sans-serif');

  // Declare function toggleTheme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Jika value ada banyak bisa dibuat jadi object
  const themeValue = {
    theme: theme,
    toggleTheme: toggleTheme,
    font: font,
    color: color,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
