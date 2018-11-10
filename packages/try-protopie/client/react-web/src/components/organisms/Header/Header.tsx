import * as React from "react";

import { Link } from "components/atoms/Link";
import { Header } from "./styles/Header.style";
// export interface IHeaderProps {

// }
const links = [
  { name: "Protopie", url: "/" },
  { name: "Features", url: "/features" },
  { name: "Learn", url: "/learn" },
  { name: "Gallery", url: "/gallery" },
  { name: "Resources", url: "/resources" },
  { name: "Pricing", url: "/pricing" },
  { name: "Account", url: "/account" },
  { name: "Free Trial", url: "/freeTrial" }
];
export default class HeaderContainer extends React.Component<any, any> {
  public render() {
    return (
      <Header>
        {links.map((link: { name: string; url: string }) => (
          <Link key={link.name} name={link.name} url={link.url} />
        ))}
      </Header>
    );
  }
}
