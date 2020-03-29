import React, {
  ReactElement
} from "react";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import "./index.scss";

interface ShellMainProps
{

}

export default function ShellMain(
  _props : ShellMainProps
) : ReactElement
{
  const renderHome = () : ReactElement =>
  {
    return (
      <p>Hello, World!</p>
    )
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact   = {true}
          path    = "/"
          render  = {renderHome}
        />
      </Switch>
    </BrowserRouter>
  );
}
