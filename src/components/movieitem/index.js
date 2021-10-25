import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

const MovieItem = ({ movie, genres }) => {
  const renderGenres = (genres) => {
    let genreString = "";

    const getMovieGenre = (id) => {
      for (let i = 0; i < genres.length; i++) {
        if (id === genres[i].id) {
          return genres[i].name;
        }
      }
    };

    for (let i = 0; i < movie.genre_ids.length; i++) {
      const genre = getMovieGenre(movie.genre_ids[i]);

      i === 0 ? (genreString += genre) : (genreString += ` | ${genre}`);
    }

    return genreString;
  };

  return (
    // Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
          />
        ) : (
          <div>
            <p>No poster found</p>
          </div>
        )}
      </LeftCont>
      <RightCont>
        <RightContHeader>
          <h3>{movie.title}</h3>
          <p>{movie.vote_average}</p>
        </RightContHeader>
        <GenreContainer>{renderGenres(genres)}</GenreContainer>
        <Content>{movie.overview}</Content>
        <Date>{movie.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  );
};

export default MovieItem;

const Date = styled.p`
  color: ${colors.primaryColor};
  margin-top: auto;
  font-weight: 300;
  line-height: 0;
  font-size: 12px;
`;

const RightContHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & * {
    margin-bottom: 0;

    @media screen and (max-width: 700px) {
      margin-top: 0;
    }
  }

  & p {
    background-color: ${colors.primaryColor};
    color: white;
    padding: 8px;
    border-radius: 5px;
    font-weight: bold;

    @media screen and (max-width: 700px) {
      padding: 4px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 700px) {
    & h3 {
      margin-right: 15px;
    }
  }
`;

const GenreContainer = styled.p`
  color: ${colors.primaryColor};
  margin-top: 0;

  @media screen and (max-width: 700px) {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
  }
`;

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;

  margin-bottom: 20px;
  padding: 20px;
`;

const LeftCont = styled.div`
  display: inline-block;
  margin-right: 20px;

  & img {
    max-width: 200px;

    @media screen and (max-width: 700px) {
      max-width: 125px;
    }
  }

  & div {
    width: 200px;
    background: #f6f7f9;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
      width: 150px;
      height: 222px;
    }
  }
`;

const Content = styled.p`
  @media screen and (max-width: 700px) {
    font-size: 14px;
    height: 95px;
    overflow: hidden;
    position: relative;

    &::after {
      content  : "";
      position : absolute;
      z-index  : 1;
      bottom   : 0;
      right     : 0;
      pointer-events   : none;
      background-image : linear-gradient(to bottom,
                        rgba(255,255,255, 0),
                        rgba(255,255,255, 1) 90%);
      width    : 100%;
      height   : 4em;
  }
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
