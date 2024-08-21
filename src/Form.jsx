import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function Form() {
  const currentTheme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;
  const updatedTheme = currentTheme === 'light' ? 'dark' : 'light';
  return (
    <Panel title="Welcome">
      <Button>Sign Up</Button>
      <Button>Log In</Button>
      <button onClick={() => setTheme(updatedTheme)}>Toggle Theme</button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext).theme;
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext).theme;
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}
