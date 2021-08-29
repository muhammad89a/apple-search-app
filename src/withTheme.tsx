import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";

// Augument the Palette interface
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    tertiary: {
      main: string;
    };
    icon: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface PaletteOptions {
    tertiary?: {
      main?: string;
    };
    icon: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  }
}
function customTheme(options: ThemeOptions) {
  return createTheme({
    palette: {
      primary: {
        light: "#f00",
        main: "#fa0",
        dark: "#f0f",
        contrastText: "#000",
      },
      secondary: {
        light: "#ff5e50",
        main: "#fa0",
        dark: "#f0f",
        contrastText: "#f0f",
      },
      background: {
        paper: "#fafafa",
        default: "#fafafa",
      },
      text: {
        primary: "#000",
      },
      tertiary: {
        main: "#ffd900",
      },
      icon: {
        light: "#ff5e50",
        main: "#e41e26",
        dark: "#fff",
        contrastText: "#fff",
      },
    },
    ...options,
  });
}

const lightTheme = customTheme({});

const darktheme = customTheme({
  palette: {
    primary: {
      light: "#323232",
      main: "#2C2C2C",
      dark: "#121212",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff5e50",
      main: "#fff",
      dark: "#0f0",
      contrastText: "#f0f",
    },
    background: {
      paper: "#323232",
      default: "#222222",
    },
    text: {
      primary: "#fff",
    },
    icon: {
      light: "#f00",
      main: "#2C2C2C",
      dark: "#363839",
      contrastText: "#0ff",
    },
    tertiary: {
      main: "#fff",
    },
  },
});

export function withTheme(Component: any) {
  function WithTheme(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    const isDarkTheme = useSelector(
      (state: RootState) => state.theme.isDarkTheme
    );
    return (
      <ThemeProvider theme={!isDarkTheme ? lightTheme : darktheme}>
        {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithTheme;
}
