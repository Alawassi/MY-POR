import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

import About from './Component/About';
import Education from './Component/Education';
import Projects from './Component/Projects';
import Skill from './Component/Skill';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';

import StarryBackground from './Component/StarryBackground';

const App = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is small (e.g., mobile)

    // Load the dark mode preference from localStorage, default to false if not set
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Theme configuration with responsive breakpoints
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? '#2f2f2f' : '#fbfbf0',
            },
            text: {
                primary: darkMode ? '#f6f6dc' : '#2f2f2f',
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            // Save the new mode in localStorage
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {darkMode && <StarryBackground />} 
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Router>
                <div style={{ padding: isMobile ? '1rem' : '3rem' }}> 
                    <About />
                    <Education />
                    <Projects />
                    <Skill />
                    <Contact />
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
