import React, { useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import FilterIcon from "../../images/filter-icon.png";

const SearchBar = ({ searchMovies, toggleShowOptionsMobile }) => {
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState(null);

  return (
    <SearchContainer>
      <DesktopWrapper>
        <InputContainer>
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Keyword"
            onChange={(e) => {
              setKeyword(e.target.value);
              searchMovies(e.target.value, year);
            }}
          />
        </InputContainer>
        <InputContainer>
          <img src={CalendarIcon} />
          <input
            type="number"
            placeholder="Year of release"
            onChange={(e) => {
              setYear(e.target.value);
              searchMovies(keyword, e.target.value);
            }}
          />
        </InputContainer>
      </DesktopWrapper>
      <MobileWrapper>
        <InputContainer>
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Search for movies"
            onChange={(e) => {
              setKeyword(e.target.value);
              searchMovies(e.target.value, year);
            }}
          />
        </InputContainer>
        <img src={FilterIcon} onClick={toggleShowOptionsMobile} />
      </MobileWrapper>
    </SearchContainer>
  );
};

const DesktopWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    display none;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  align-items: center;

  & > img {
    cursor: pointer;
    padding-bottom: 5px;
    border-bottom: 2px solid ${colors.primaryColor};
    margin-top: -19px;
    margin-left: 15px;
  }

  @media screen and (min-width: 1200px) {
    display none;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  & img {
    position: absolute;
  }
`;

const SearchContainer = styled.div`
  & input {
    border: none;
    border-bottom: 2px solid ${colors.primaryColor};
    width: 100%;
    padding-bottom: 15px;
    padding-left: 40px;
    font-size: 20px;
    font-weight: bold;
    color: ${colors.primaryColor};
    margin-bottom: 20px;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      font-weight: normal;
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default SearchBar;
