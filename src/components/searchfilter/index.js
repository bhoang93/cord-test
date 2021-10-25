import React, { useState } from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

const SearchFilters = ({ genres, ratings, languages, searchMovies }) => {
  const [showOptionsMobile, toggleShowOptionsMobile] = useState(false);

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
        <SearchBar
          searchMovies={searchMovies}
          toggleShowOptionsMobile={() =>
            toggleShowOptionsMobile(!showOptionsMobile)
          }
        />
      </SearchFiltersCont>

      <MobileWrapper showOptionsMobile={showOptionsMobile}>
        <SearchFiltersCont>
          <CategoryTitle>Movie</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          <ExpandableFilter title={"Select genre(s)"} filters={genres} />
          <ExpandableFilter title={"Select min. vote"} filters={ratings} />
          <ExpandableFilter title={"Select language"} filters={languages} />
        </SearchFiltersCont>
      </MobileWrapper>
    </FiltersWrapper>
  );
};

export default SearchFilters;

const MobileWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    ${(props) => !props.showOptionsMobile && `display none;`}
  }
`;

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1200px) {
    background-color: #f6f7f9;
    padding: 0;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div`
  font-weight: bold;
`;
