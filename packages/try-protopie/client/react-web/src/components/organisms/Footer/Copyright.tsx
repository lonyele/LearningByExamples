import * as React from "react";

import { Copyright } from "./styles/Copyright.style";
// export interface IHeaderProps {

// }

export default class CopyrightContainer extends React.Component<{
  content: string;
}> {
  public render() {
    return <Copyright>{this.props.content}</Copyright>;
  }
}
