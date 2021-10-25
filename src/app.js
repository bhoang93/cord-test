import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.css";

const App = () => {
  const [isSideOpen, toggleSideOpen] = useState(false);

  return (
    <Router>
      <PageContainer>
        <SideNavBar
          isOpen={isSideOpen}
          toggleSideOpen={() => toggleSideOpen(!isSideOpen)}
        />
        <ContentWrapper>
          <Switch>
            <Route path="/discover">
              <Discover toggleSideOpen={() => toggleSideOpen(!isSideOpen)} />
            </Route>
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
};

export default App;

const ContentWrapper = styled.main`
  padding-left: 265px;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
