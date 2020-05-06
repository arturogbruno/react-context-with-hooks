import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import PageContent from './components/PageContent';
import Navbar from './components/Navbar';
import Form from "./components/Form";

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;