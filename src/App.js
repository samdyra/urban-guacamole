import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import Features from "./screens/Features/Features";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import RTRWMapScreen from "./screens/RTRWScreen/RTRWMapScreen";
import UHIMapScreen from "./screens/UHIMapScreen/UHIMapScreen";
import NetizenScreen from "./screens/NetizenScreen/NetizenScreen";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <HomeScreen></HomeScreen>
          <Features></Features>
          <Footer></Footer>
        </Route>
        <Route exact path="/RTRWScreen">
          <RTRWMapScreen></RTRWMapScreen>
        </Route>
        <Route exact path="/UHIScreen">
          <UHIMapScreen></UHIMapScreen>
        </Route>
        <Route exact path="/NetizenScreen">
          <NetizenScreen></NetizenScreen>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
