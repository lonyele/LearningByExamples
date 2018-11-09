import * as React from "react";

import { Button } from "components/atoms/Button";
import { Header } from "./styles/Header.style";
// export interface IHeaderProps {

// }

export default class HeaderContainer extends React.Component<any, any> {
  public render() {
    return (
      <Header>
        <Button content={"Protopie"} />
        <Button content={"Features"} />
        <Button content={"Learn"} />
        <Button content={"Gallery"} />
        <Button content={"Resources"} />
        <Button content={"Pricing"} />
        <Button content={"Account"} />
        <Button content={"Free Trial"} />
      </Header>
    );
  }
}
