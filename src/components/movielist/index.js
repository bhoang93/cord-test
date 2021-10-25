import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

const MovieList = ({ movies, genres }) => {
  return (
    <MoviesWrapper>
      {/* Finish the MovieItem component and use it here to display the movie results */}
      {movies.map((movie) => {
        return <MovieItem movie={movie} genres={genres} key={movie.id} />;
      })}
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  position: relative;
`;

export default MovieList;
