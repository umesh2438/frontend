import { createTheme, responsiveFontSizes } from "@mui/material";
import merge from "lodash.merge";
import {
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from "./themeColors";
const fontSize = 13;

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const baseOptions = {
  direction: "ltr",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "75%",
          width: "75%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          boxShadow: 3,
          //padding: "0.6rem 1.5rem",
        },
        outlinedPrimary: {
          borderColor: primary.secondary,
          color: primary.main,
          "&:hover": {
            variant: "contained",
            backgroundColor: primary.main,
            boxShadow: 3,
            color: "white",
          },
        },
        containedPrimary: {
          borderColor: primary[500],
          color: "white",
          "&:hover": {
            backgroundColor: primary.purple,
            boxShadow: 3,
            color: "black",
          },
        },
        containedError: {
          borderColor: error.main,
          color: error.main,
          "&:hover": {
            backgroundColor: error.main,
            boxShadow: 3,
            color: "black",
          },
        },
        outlinedError: {
          borderColor: error.main,
          color: error.main,
          "&:hover": {
            variant: "contained",
            backgroundColor: error.main,
            boxShadow: 3,
            color: "white",
          },
        },
        outlinedSuccess: {
          color: success,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100vh",
          width: "100vw",
        },
        
        body: {
          height: "100%",
          width: "100vw",
          overflow: "auto"
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        "#root": {
          height: "100vh",
          width: "100vw",
        },
        "#nprogress .bar": {
          zIndex: "9999 !important",
          backgroundColor: "#61A9FF !important",
          width: "100%",
          position: "fixed",
        },
        "input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button":
          {
            WebkitAppearance: "none",
            margin: 0,
          },
          '&::-webkit-scrollbar': {
            display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
    },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "#E5EAF2",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "10px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: primary.main,

        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 0,
          "&.Mui-expanded": {
            minHeight: "auto",
          },
          ".MuiAccordionSummary-content": {
            margin: 0,
          },
          ".MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#FFD600",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root:last-of-type": {
            "& .MuiTableCell-root": {
              borderBottom: 0,
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#94A4C4",
          textTransform: "none",
          fontSize: 10,
          fontWeight: 500,
          padding: 0,
          minWidth: "auto",
          marginLeft: "1rem",
          marginRight: "1rem",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiButtonBase-root:first-of-type": {
            marginLeft: 0,
          },
          "& .MuiButtonBase-root:last-of-type": {
            marginRight: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          "& .MuiPopover-paper": {
            boxShadow: 4,
            borderRadius: "8px",
            border: "2px solid #E5EAF2",
          },
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: secondary[400],
            opacity: 1,
          },
          "& label": {
            color: secondary[400],
            opacity: 1,
            fontWeight: 500,
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 400,
    },
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "4.25rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "4rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      
      fontSize,
    },
    body2: {
      fontSize,
    },
  },
};
const themesOptions = {
  [THEMES.LIGHT]: {
    palette: {
      primary,
      secondary,
      error,
      warning,
      success,
      info,
      divider: primary[500],
      background: {
        default: "#e2e8ff",
        paper: "#f0f8ff"
      },
      text: {
        primary: secondary[900],
        secondary: secondary[300],
        disabled: secondary[400],
      },
      mode: "light",
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "saturate(100%) blur(10px)",
            boxShadow: "inset 1px -1px 2px 2px hsla(0,0%,100%,.1)",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "saturate(180%) blur(23px)",
            color: secondary[900],
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#94A4C4",
          },
        },
      },
    },
  },
  [THEMES.DARK]: {
    palette: {
      primary,
      error,
      warning,
      success,
      info,
      background: {
        default: "rgb(2, 13, 26)",
        paper: "rgb(15, 20, 37)",
      },

      mode: "dark",
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: "none",
            boxShadow: 4,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            "& .MuiPopover-paper": {
              border: "1px solid rgba(255, 255, 255, 0.12)",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(15, 20, 37,.8)",
            backdropFilter: "saturate(100%) blur(20px)",
            boxShadow: 3,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedSecondary: {
            color: "white",
            backgroundColor: primary[900],
            "&:hover": {
              backgroundColor: primary[500],
              boxShadow: 3,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "rgb(34, 43, 54, 0.6)",
            boxShadow:
              "rgba(0, 0, 0, 0.03) 0px 2px 1px -1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
        },
      },
      // MuiCard: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: "rgba(10, 20, 2, 0)",
      //       backdropFilter: "saturate(100%) blur(10px)",
      //       boxShadow: "inset 1px -1px 2px 2px hsla(0,0%,100%,.1)",
      //     },
      //   },
      // },
    },
  },
};
export const customTheme = (config) => {
  let themeOption = themesOptions[config.theme];

  if (!themeOption) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOption = themesOptions[THEMES.LIGHT];
  } //@ts-ignore

  const merged = merge({}, baseOptions, themeOption, {
    direction: config.direction,
  }); //@ts-ignore

  let theme = createTheme(merged);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  } // theme shadows

  theme.shadows[1] = "0px 3px 5px rgba(0, 0, 235, .1)";
  theme.shadows[2] = "0px 3px 5px 1px rgba(0, 0, 235, 0.1)";
  theme.shadows[3] = "1px 1px 5px 1px rgba(0, 0, 235, 0.7)";
  theme.shadows[4] = "1px 1px 10px 1px rgba(0, 0, 235, 0.1),-3px -3px 5px -1px rgba(0, 0, 235, 0.1)"; // console.log(theme);

  return theme;
};
