import * as React from "react";

import { Link } from "./styles/Link.style";
import { ILink } from "./types/Link.type";

export default class LinkContainer extends React.Component<ILink> {
  public render() {
    const { name } = this.props;
    return <Link key={name}>{name}</Link>;
  }
}
