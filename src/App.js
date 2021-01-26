import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/ImagesF/Home";
import Portfolio from "./components/pages/Portfolio";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Portfolio from "./components/pages/About";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Portfolio} />
        {/* <Route exact path="/blog" component={Blog} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
