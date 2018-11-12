import * as React from "react";
import { IObject } from "src/mobx-state-tree/stores/object/Object";
import { Position } from "./Position";
import { Title } from "./Title";

export class Details extends React.Component<{ selectedObject: IObject }, any> {
  public render() {
    const { selectedObject } = this.props;
    return (
      <div style={{ border: "1px solid black" }}>
        <Title selectedObject={selectedObject} />
        <Position selectedObject={selectedObject} />
      </div>
    );
  }
}
