import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Hero, Footer } from "./components";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
