import ThemeProvider from './ThemeContext.jsx';
import AuthProvider from './AuthContext.jsx';
import PropTypes from 'prop-types';

export default function Context({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}

Context.propTypes = {
  children: PropTypes.node,
};
