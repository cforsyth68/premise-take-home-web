import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from "@material-ui/core";
import defaultTheme from "./themes/default";

const theme = createTheme(defaultTheme);

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        Clean app
      </ThemeProvider>
    </div>
  );
}

export default App;
