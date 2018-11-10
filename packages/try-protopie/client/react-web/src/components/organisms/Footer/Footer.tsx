import * as React from "react";

import Copyright from "./Copyright";
import FooterLink from "./FooterLink";
import { Footer } from "./styles/Footer.style";
import { IFooterLink } from "./types/FooterLink.type";

const footerDatas: IFooterLink[] = [
  {
    title: "Protopie",
    links: [
      { name: "Gallery", url: "" },
      { name: "Download", url: "" },
      { name: "Pricing", url: "" }
    ]
  },
  {
    title: "Learn",
    links: [
      { name: "Tutorials", url: "" },
      { name: "Basics", url: "" },
      { name: "Connect to Player", url: "" },
      { name: "Import", url: "" },
      { name: "Bridge", url: "" },
      { name: "Cloud", url: "" }
    ]
  },
  {
    title: "Community",
    links: [
      { name: "Facebook", url: "" },
      { name: "Twitter", url: "" },
      { name: "Dribble", url: "" },
      { name: "Medium", url: "" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", url: "" },
      { name: "Resources", url: "" },
      { name: "Updates", url: "" },
      { name: "Privacy Policy", url: "" },
      { name: "Terms of Service", url: "" },
      { name: "GDPR", url: "" }
    ]
  },
  {
    title: "Language",
    links: [{ name: "English", url: "" }, { name: "Chinese", url: "" }]
  }
];

const copyrightText = "© 2017 by Studio XID, Inc. All rights reserved.";
export default class FooterContainer extends React.Component<any> {
  public render() {
    return (
      <Footer>
        {footerDatas.map((data: IFooterLink) => (
          <FooterLink key={data.title} title={data.title} links={data.links} />
        ))}
        <Copyright content={copyrightText} />
      </Footer>
    );
  }
}
