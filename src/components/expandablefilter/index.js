import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

const ExpandableFilter = ({ title, filters }) => {
  const [filtersShown, toggleFilters] = useState(false);

  return (
    <Container>
      <FilterTitle onClick={() => toggleFilters(!filtersShown)}>
        <h4>
          <span>{filtersShown ? "-" : "+"}</span> {title}
        </h4>
      </FilterTitle>
      {filtersShown &&
        filters.map((filter) => {
          return (
            <Filter key={filter.id}>
              <Checkbox label={filter.name} />
            </Filter>
          );
        })}
    </Container>
  );

  // You need to create your own checkbox component with a custom checkmark
};

const FilterTitle = styled.div`
  cursor: pointer;
`;

const Filter = styled.div`
  display: flex;

  & label {
    margin-left: 10px;
  }
`;

const Container = styled.div`
  width: 15vw;
`;

export default ExpandableFilter;
