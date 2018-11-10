import * as React from "react";

import { NavLink as Link } from "./styles/Link.style";

export interface ILinkProps {
  name: string;
  url: string;
}

export default class LinkContainer extends React.Component<ILinkProps, any> {
  public render() {
    const { name, url } = this.props;
    return (
      <Link to={url} onClick={() => console.log("버튼", name)}>
        {name}
      </Link>
    );
  }
}
