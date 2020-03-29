import React, {
  ReactElement
} from "react";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import {
  TopAppBar,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@rmwc/top-app-bar";

import "./index.scss";

interface ShellMainProps {

}

export default function ShellMain(
  _props: ShellMainProps
): ReactElement {
  const renderHome = (): ReactElement => {
    return (
      <p>Hello, World!</p>
    )
  };

  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>Digimon World 3/2003</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={renderHome}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}
