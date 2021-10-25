import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getGenreList, getPopularMovies, getMovieSearch } from "../../fetcher";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

const Discover = ({ toggleSideOpen }) => {
  console.log(toggleSideOpen);

  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState(0);
  const [results, setResults] = useState([]);
  const [loadedResults, setLoadedResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);
  const [ratingOptions, setRatingOptions] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ]);
  const [languageOptions, setLanguageOptions] = useState([
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ]);

  // Write a function to preload the popular movies when page loads & get the movie genres
  useEffect(() => {
    getPopularMovies(setResults, setTotalCount, setLoadedResults);
  }, []);

  useEffect(() => {
    getGenreList(setGenreOptions);
  }, []);

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  const searchMovies = (keyword, year) => {
    const formattedYear = Number(year) > 1895 ? year : null;
    if (keyword) {
      console.log(keyword + " " + formattedYear);
      getMovieSearch(keyword, formattedYear, setResults, setTotalCount);
    } else {
      setResults(loadedResults);
    }
  };

  return (
    <DiscoverWrapper>
      <BurgerMenu>
        <div onClick={toggleSideOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <MobilePageTitle>Discover</MobilePageTitle>{" "}
      </BurgerMenu>
      {/* MobilePageTitle should become visible on small screens & mobile devices*/}
      {totalCount > 0 && (
        <TotalCounter>
          {totalCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} movies
        </TotalCounter>
      )}
      <DiscoverInner>
        <MovieResults>
          {results && totalCount > 0 ? (
            <MovieList movies={results || []} genres={genreOptions || []} />
          ) : (
            <NoResults>No results found</NoResults>
          )}
        </MovieResults>
        {totalCount > 0 && (
          <TotalCounter mobile>
            {totalCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} movies
          </TotalCounter>
        )}
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => searchMovies(keyword, year)}
          />
        </MovieFilters>
      </DiscoverInner>
    </DiscoverWrapper>
  );
};

export default Discover;

const NoResults = styled.p`
  width: 100%;
`;

const DiscoverInner = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const DiscoverWrapper = styled.main`
  padding: 60px 45px;

  @media screen and (max-width: 700px) {
    padding: 30px 25px;
  }
`;

const TotalCounter = styled.div`
  margin: 20px 0;
  ${(props) => (props.mobile ? `display: none;` : `display: block;`)}

  @media screen and (max-width: 1200px) {
    ${(props) => (props.mobile ? `display: block;` : `display: none;`)}
  }
`;

const MovieResults = styled.div`
  background-color: #f6f7f9;
  width: 100%;
`;

const MovieFilters = styled.div`
  margin-left: 15px;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

const MobilePageTitle = styled.header`
  font-size: 30px;
`;

const BurgerMenu = styled.div`
  display: none;
  margin-bottom: 50px;

  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
  }

  & div {
    margin-right: 30px;
    cursor: pointer;
  }

  & span {
    display: block;
    width: 35px;
    height: 3px;
    margin-bottom: 10px;
    position: relative;

    background: #31475f;
    border-radius: 3px;

    z-index: 1;
  }
`;
