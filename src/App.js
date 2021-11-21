import { BrowserRouter, Switch, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/Home/AboutUs/About";
import AllDoctors from "./Pages/Home/AllDoctors/AllDoctors/AllDoctors";
import AllServices from "./Pages/Home/AllServices/AllServices";
import Contact from "./Pages/Home/Contact/Contact";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Home/Navbar/Navbar";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import SignUp from "./Pages/Login/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/alldoctors">
              <AllDoctors></AllDoctors>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <AllServices></AllServices>
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
