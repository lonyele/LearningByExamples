import styled from "styled-components";

export const GridContainer = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-areas: "Layer Canvas Actions Details Preview";
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 84.5vh;
`;
