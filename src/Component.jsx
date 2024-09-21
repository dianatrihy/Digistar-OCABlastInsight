import { useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { AuthContext } from './context/AuthContext';

export default function Component() {
  const { theme, toggleTheme, font, color } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const root = document.getElementById('root');

    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <div className="card">
      <h1>Hands-on React Context</h1>
      <p>
        Current Theme: {theme} {color} {font}
      </p>
      <p>Name: {user.name}</p>
      <button onClick={handleChangeTheme}>Change Theme</button>
    </div>
  );
}
