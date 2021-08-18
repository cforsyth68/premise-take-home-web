import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, createTheme, ThemeProvider, Typography } from "@material-ui/core";
import defaultTheme from "./themes/default";
import Home from "./pages/Home"
import Characters from "./pages/Characters";
//import Masthead from "./components/Masthead";
import MenuAppBar from "./components/AppBar";

const theme = createTheme(defaultTheme);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <MenuAppBar />
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl">
            <Switch>
              <Route path="/characters">
                <Characters />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
