import * as React from "react";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";

export class TriggersContainer extends React.Component<any, any> {
  public render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Trigger"} />
        <div>TriggersContainer~~~~</div>
      </div>
    );
  }
}
