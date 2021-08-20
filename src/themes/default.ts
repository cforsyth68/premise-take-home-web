import { ThemeOptions } from "@material-ui/core/styles/createTheme";

const defaultTheme: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#93654B",
    },
    secondary: {
      main: "#DCCAB2",
    },
    background: {
      default: "#f5e6e8",
      paper: "#FFE8D6",
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
