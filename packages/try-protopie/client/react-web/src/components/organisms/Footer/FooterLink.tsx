import * as React from "react";

import Link from "./Link";
import { FooterLink } from "./styles/FooterLink.style";
import { Title } from "./styles/Title.style";
import { IFooterLink } from "./types/FooterLink.type";
import { ILink } from "./types/Link.type";

export default class FooterLinkContainer extends React.Component<IFooterLink> {
  public render() {
    const { title, links } = this.props;
    return (
      <FooterLink key={title} gridName={title}>
        <Title>{title}</Title>
        {links.map((link: ILink) => (
          <Link key={link.name + link.url} name={link.name} url={link.url} />
        ))}
      </FooterLink>
    );
  }
}
