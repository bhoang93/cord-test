import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

const SideNavBar = ({ isOpen, toggleSideOpen }) => {
  /* Write the necessary functions to show and hide the side bar on small devices */

  return (
    <>
      <SideNavBarCont isOpen={isOpen}>
        <Cross onClick={toggleSideOpen} isOpen={toggleSideOpen}>
          <img src={Arrow} />
          <img src={Arrow} />
        </Cross>
        <InnerContainer>
          {/* Implement a hamburger icon slide in effect for small devices */}
          <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
            Wesley
            <NavIcon arrow>
              <img src={Arrow} />
            </NavIcon>
          </SideNavMainLink>
          <SideNavMainLink className="menu_nav_link" to="/discover" currentPage>
            Discover
            <NavIcon search>
              <img src={SearchWhite} />
            </NavIcon>
          </SideNavMainLink>
          <SideNavWrapper>
            <SideNavHeader>
              <HeaderText>Watched</HeaderText>
            </SideNavHeader>
            <NavLink className="menu_nav_link" to="/watched/movies">
              Movies
            </NavLink>
            <NavLink className="menu_nav_link" to="/watched/tv-shows">
              TV Shows
            </NavLink>
          </SideNavWrapper>
          <SideNavWrapper>
            <SideNavHeader>
              <HeaderText>Saved</HeaderText>
            </SideNavHeader>
            <NavLink className="menu_nav_link" to="/saved/movies">
              Movies
            </NavLink>
            <NavLink className="menu_nav_link" to="/saved/tv-shows">
              Tv Shows
            </NavLink>
          </SideNavWrapper>
        </InnerContainer>
      </SideNavBarCont>
    </>
  );
};

export default SideNavBar;

const InnerContainer = styled.div`
  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
`;

const Cross = styled.div`
  display: flex;
  flex-direction: column;

  & img:nth-of-type(2) {
    transform: scaleY(-1);
    margin-top: -2px;
  }
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 999;
  color: black;
  cursor: pointer;
`;

const SideNavWrapper = styled.div`
  margin-top: 40px;
`;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    display: none;
    width: 100vw;

    ${(props) =>
      props.isOpen &&
      `
        display: block;
        transition: 1s;
        left: -70vw;
        -webkit-animation: slide 0.5s forwards;
        -webkit-animation-delay: 2s;
        animation: slide 0.5s forwards;

        @keyframes slide {
            100% { left: 0; }
        }
`}
  }
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: flex;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  padding-left: 35px;
  padding-top: 35px;
  padding-bottom: 25px;
  ${(props) => props.currentPage && `background-color: ${colors.primaryColor}`};
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  /* top: 50%; */
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div`
  font-size: 22px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  color: white;
  margin-left: 35px;
`;

const NavLink = styled(Link)`
  display: block;
  color: ${colors.lightBackground};
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 300;
  margin-left: 35px;
`;
