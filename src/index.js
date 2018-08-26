import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import Home from "./Home";
import "./index.scss";
import "../src/assets/style/main.scss";

const Chart = () => <div>This is Chart</div>;
const Notification = () => <div>This is a Notification</div>;
const Calendar = () => <div>This is a Calendar</div>;
const Folder = () => <div>This is Folder</div>;

const BaseLayout = () => (
  <div>
    <Route exact path="/" exact component={Home} />
    <Route exact path="/chat" component={Chart} />
    <Route exact path="/notification" component={Notification} />
    <Route exact path="/calendar" component={Calendar} />
    <Route exact path="/folder" component={Folder} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
