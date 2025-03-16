import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        glass: {
            main: 'rgba(0, 0, 0, 0.5)',
        },
    },
    typography: {
        fontFamily: 'Outfit, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px", // 🔵 Lekerekített gombok
                    textTransform: "none", // 🔵 Kisbetűs gombszöveg (nem csupa nagy)
                    fontWeight: "bold",
                    padding: "5px",
                },
                containedPrimary: {
                    backgroundColor: "#e91e63", // 🔴 Egyedi alapértelmezett primary szín
                    "&:hover": {
                        backgroundColor: "#c2185b", // 🔴 Hover szín
                    },
                },
                containedSecondary: {
                    backgroundColor: "#ff5722", // 🟠 Egyedi secondary szín
                    "&:hover": {
                        backgroundColor: "#e64a19",
                    },
                },
                outlined: {
                    borderWidth: "2px",
                    "&:hover": {
                        borderWidth: "3px",
                    },
                },
            },
        },
    },
});

export default muiTheme;
