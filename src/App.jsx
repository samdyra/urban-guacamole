import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import Features from "./screens/Features/Features";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import RTRWMapScreen from "./screens/RTRWScreen/RTRWMapScreen";
import UHIMapScreen from "./screens/UHIMapScreen/UHIMapScreen";
import NetizenScreen from "./screens/NetizenScreen/NetizenScreen";
import ChartScreen from "./screens/Chart/Chart.jsx";
import { LoginScreen, Form } from "./Store";
import FormScreen from "./screens/FormScreen/FormScreen";

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
        <Route exact path="/Chart">
          <ChartScreen></ChartScreen>
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
        <Route exact path="/Login">
          <LoginScreen></LoginScreen>
        </Route>
        <Route exact path="/Admin">
          <Form></Form>
        </Route>
        <Route exact path="/Form">
          <Form></Form>
        </Route>
        <Route exact path="/FormScreen">
          <FormScreen></FormScreen>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
