import {createTheme} from '@mui/material';

export const theme = createTheme({
    palette: {
        mode: 'dark', // Enables dark mode
        primary: {
            main: '#90CAF9', // Light blue as the primary color
            light: '#E3F2FD', // Lighter blue for hover effects
            dark: '#42A5F5', // Darker blue for contrast
            contrastText: '#FFFFFF', // White text for contrast
        },
        secondary: {
            main: '#FF4081', // Pink as the secondary color
            light: '#F8BBD0', // Lighter pink
            dark: '#F50057', // Darker pink for shadows
            contrastText: '#FFFFFF', // White text for contrast
        },
        background: {
            default: '#121212', // Dark background for the app
            paper: '#1E1E1E', // Slightly lighter dark background for cards and papers
        },
        error: {
            main: '#EF5350', // Red for error states
        },
        warning: {
            main: '#FFCA28', // Yellow for warning states
        },
        info: {
            main: '#29B6F6', // Blue for info states
        },
        success: {
            main: '#66BB6A', // Green for success states
        },
        text: {
            primary: '#E0E0E0', // Light gray text for readability
            secondary: '#B0BEC5', // Dimmed gray for secondary text
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            color: '#FFFFFF',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#90CAF9', // Primary color for headers
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 500,
            color: '#E0E0E0',
        },
        body1: {
            fontSize: '1rem',
            color: '#B0BEC5', // Secondary text
        },
        button: {
            textTransform: 'none', // No uppercase text
            fontWeight: 600,
            color: '#FFFFFF', // White button text for dark theme
        },
    },
    shape: {
        borderRadius: 8, // Rounded corners for components
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20, // Rounded button corners
                    textTransform: 'none',
                    fontWeight: 'bold',
                },
                containedPrimary: {
                    backgroundColor: '#90CAF9', // Light blue for primary buttons
                    '&:hover': {
                        backgroundColor: '#42A5F5', // Darker blue on hover
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1E1E1E', // Dark card background
                    boxShadow: '0px 3px 6px rgba(0,0,0,0.2)', // Subtle shadow for depth
                    borderRadius: 12,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#333333', // Darker app bar background
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#616161', // Dark tooltips
                    color: '#FFFFFF',
                },
            },
        },
    },
});
