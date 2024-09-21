import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Deklarasikan UserContext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // get dari localstorage
  let name = '';
  const getNameFromLocalStorage = () => {
    name = localStorage.getItem('name');
    return name ? name : '';
  };
  getNameFromLocalStorage();
  //

  // Declare state user
  const [user, setUser] = useState({ name: name, email: '' });

  // Declare function toggleuser
  const toggleuser = () => {
    setUser(user === 'light' ? 'dark' : 'light');
  };

  return (
    <AuthContext.Provider value={{ user, toggleuser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
