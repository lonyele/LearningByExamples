import { observer } from "mobx-react";
import * as React from "react";

import { IInput } from "src/mobx-state-tree/stores/object/Input/Input";
import { IObject, ObjectType } from "src/mobx-state-tree/stores/object/Object";
import { IOval } from "src/mobx-state-tree/stores/object/Oval/Oval";
import { IRectangle } from "src/mobx-state-tree/stores/object/Rectangle/Rectangle";
import { IText } from "src/mobx-state-tree/stores/object/Text/Text";
import { Position } from "./Position";
import { Size } from "./Size";
import { Title } from "./Title";

@observer
export class Details extends React.Component<{ selectedObject: IObject }, any> {
  private getSpecificContents = (object: IObject) => {
    switch (object.object.type) {
      case ObjectType.Text: {
        return (object.object as IText).textContents;
      }
      case ObjectType.Input: {
        return (object.object as IInput).inputContents;
      }
      case ObjectType.Rectangle: {
        return (object.object as IRectangle).rectangleContents;
      }
      case ObjectType.Oval: {
        return (object.object as IOval).ovalContents;
      }
      default: {
        return "what???";
      }
    }
  };

  public render() {
    const { selectedObject } = this.props;
    return (
      <div style={{ border: "1px solid black" }}>
        <Title selectedObject={selectedObject} />
        <Position selectedObject={selectedObject} />
        <Size selectedObject={selectedObject} />
        <div>{this.getSpecificContents(selectedObject)}~~~~</div>
      </div>
    );
  }
}
