import { ThemeOptions } from "@material-ui/core/styles/createTheme";

const defaultTheme: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#192a51ff",
    },
    secondary: {
      main: "#967aa1ff",
    },
    background: {
      default: "#FFE8D6",
      paper: "#f5e6e8ff",
    },
    success: {
      main: "#6AB966",
    },
    info: {
      main: "#46A4EE",
    },
    error: {
      main: "#d25347",
      contrastText: "#b6ff00",
    },
    warning: {
      main: "#F09A18",
    },
  },
};

export default defaultTheme;
