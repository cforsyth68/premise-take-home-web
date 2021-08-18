import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from "@material-ui/core";
import defaultTheme from "./themes/default";
import Home from "./pages/Home"
import Characters from "./pages/Characters";
import Masthead from "./components/Masthead";

const theme = createTheme(defaultTheme);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Masthead />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
