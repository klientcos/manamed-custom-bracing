import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Switch>
        <Route exact path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;