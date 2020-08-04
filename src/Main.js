import React from "react";
import DynamicVariables from "./components/DynamicVariables/DynamicVariables";
import BrandSort from "./components/BrandSort/BrandSort";
import Daily from "./components/Daily/Daily";
import Compaigns from "./components/Compaigns/Compaigns";
import Reports from "./components/Reports/Reports";
import Overview from "./components/Overview/Overview";
import { DatePicker } from "./components/DatePicker/DatePicker";
import { Switch, Route } from "react-router-dom";
import { Assets } from "./components/Assets/Assets";

const Main = () => {
  return (
    <div className="main-content">
      <div className="top-line">
        <DatePicker />
        <BrandSort />
      </div>
      <Switch>
        <Route exact path="/admin/overview" component={Overview} />
        <Route path="/admin/dynamic_variable" component={DynamicVariables} />
        <Route path="/admin/daily" component={Daily} />
        <Route path="/admin/compaigns" component={Compaigns} />
        <Route path="/admin/assets" component={Assets} />
        <Route path="/admin/reports" component={Reports} />
      </Switch>
    </div>
  );
};

export default Main;
