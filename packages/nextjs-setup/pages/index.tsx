// import * as React from "react";
import styled from "styled-components";

export default () => (
  <div>
    <Title>My First Next.js Page</Title>
    <What name="name!" content="yo what's up" />
  </div>
);

const What = (props: { name: string; content: string }) => {
  const { name, content } = props;
  return <div>{name + content}</div>;
};

const Title = styled.h1`
  color: red;
`;
