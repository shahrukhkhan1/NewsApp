import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <News pageSize={6} country={"in"} category="general" /> */}
       
          <Switch>
            {/* <Route path="/"><News pageSize={6} country={'in'} category='general'/> </Route>
            <Route path="/business"><News pageSize={6} country={'in'} category='business'/> </Route>
            <Route path="/entertainment"><News pageSize={6} country={'in'} category='entertainment'/> </Route>
            <Route path="/science"><News pageSize={6} country={'in'} category='science'/> </Route>
            <Route path="/sports"><News pageSize={6} country={'in'} category='sports'/> </Route>
            <Route path="/health"><News pageSize={6} country={'in'} category='health'/> </Route>
            <Route path="/technology"><News pageSize={6} country={'in'} category='technology'/> </Route> */}
            <Route exact={true} path="/">
              <News
                key="Home"
                pageSize={6}
                country={"in"}
                category="general"
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={6}
                country={"in"}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={6}
                country={"in"}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={6}
                country={"in"}
                category="entertainment"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={6}
                country={"in"}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={6}
                country={"in"}
                category="sports"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={6}
                country={"in"}
                category="health"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={6}
                country={"in"}
                category="technology"
              />
            </Route>
          </Switch>
      </div>
    );
  }
}

export default App;
