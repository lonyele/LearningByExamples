import styled from "styled-components";

// interface IFooterLinkProps {
//   gridName: string;
// }

// export const FooterLink = styled<IFooterLinkProps, any>("div")`
//   grid-area: ${props => props.gridName};
//   border: 1px solid black;
// `;

export const FooterLink = styled<any>("div")`
  grid-area: ${(props: any) => props.gridName};
  border: 1px solid black;
`;
