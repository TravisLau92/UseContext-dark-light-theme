import { useState } from 'react';
import "./App.css";
import ThemeContext from './ThemeContext';
import Form from './Form'
import Footer from './Footer';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Form />
    <label>
      <input
      type="checkbox"
      checked={theme === 'dark'}
      onChange={(e) => {
        setTheme(e.target.checked ? 'dark' : 'light');
      }}
      />
      Use Dark Mode
      </label>
      <Footer />
      </ThemeContext.Provider>
  );
}