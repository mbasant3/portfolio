import React, { Component } from "react";
// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/layout";
import Routes from "./routes";
// import Footer from "./components/footer";
import store from "./store";

import "./assets/styles/bootstrap.css";
import "./assets/styles/bootstrap.overrides.css";
import "./assets/styles/main.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Routes />
              {/* <Footer /> */}
            </Layout>
            {/* <Footer /> */}
          </BrowserRouter>
          {/* <Footer /> */}
        </Provider>
      </div>
    );
  }
}
export default App;
