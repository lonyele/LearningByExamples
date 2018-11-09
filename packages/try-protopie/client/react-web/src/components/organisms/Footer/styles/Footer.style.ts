import styled from "styled-components";

export const Footer = styled.div`
  border: 1px solid black;
  background-color: #a9afb7;
  height: 350px;
  display: grid;
  justify-content: center;
  padding-top: 50px;
  grid-template-areas:
    "Protopie Learn Community Support Language"
    "Copyright Copyright Copyright Copyright Copyright";
  grid-template-columns: 216px 216px 216px 216px 216px;
  grid-template-rows: 1fr 70px;
`;
