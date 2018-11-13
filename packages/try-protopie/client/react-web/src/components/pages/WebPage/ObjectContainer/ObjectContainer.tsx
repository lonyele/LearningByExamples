import { observer } from "mobx-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

import { IInput, Input } from "src/mobx-state-tree/stores/object/Input/Input";
import {
  IObject,
  Object,
  ObjectType
} from "src/mobx-state-tree/stores/object/Object";
import {
  icons,
  IObjectStore
} from "src/mobx-state-tree/stores/object/ObjectStore";
import { IOval, Oval } from "src/mobx-state-tree/stores/object/Oval/Oval";
import {
  IRectangle,
  Rectangle
} from "src/mobx-state-tree/stores/object/Rectangle/Rectangle";
import { IText, Text } from "src/mobx-state-tree/stores/object/Text/Text";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";

@observer
export default class ObjectContainer extends React.Component<
  { objects: IObjectStore },
  any
> {
  public state = {
    onTextfieldFocused: false
  };

  public createTempObject = (object: IObject) => {
    switch (object.object.type) {
      case ObjectType.Text: {
        const { id, name, x, y, width, height } = object;
        const { type, textContents } = object.object as IText;
        const newObject = Object.create({
          id,
          name,
          x,
          y,
          width,
          height,
          object: Text.create({ type, textContents })
        });
        return newObject;
      }
      case ObjectType.Input: {
        const { id, name, x, y, width, height } = object;
        const { type, inputContents } = object.object as IInput;
        const newObject = Object.create({
          id,
          name,
          x,
          y,
          width,
          height,
          object: Input.create({ type, inputContents })
        });
        return newObject;
      }
      case ObjectType.Rectangle: {
        const { id, name, x, y, width, height } = object;
        const { type, rectangleContents } = object.object as IRectangle;
        const newObject = Object.create({
          id,
          name,
          x,
          y,
          width,
          height,
          object: Rectangle.create({ type, rectangleContents })
        });
        return newObject;
      }
      case ObjectType.Oval: {
        const { id, name, x, y, width, height } = object;
        const { type, ovalContents } = object.object as IOval;
        const newObject = Object.create({
          id,
          name,
          x,
          y,
          width,
          height,
          object: Oval.create({ type, ovalContents })
        });
        return newObject;
      }
      default: {
        return "what???";
      }
    }
  };

  public render() {
    const { onTextfieldFocused } = this.state;
    const {
      objects,
      selectedObjects,
      changeSelectedObjects
    } = this.props.objects;
    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Object"} />
        {objects.map((object: IObject) => {
          const backgroundColor =
            selectedObjects[0].id === object.id ? "#bfbfbf" : "inherit";
          return (
            <div
              key={object.id}
              style={{
                display: "flex",
                border: "1px solid black",
                padding: "3px",
                backgroundColor
              }}
              onClick={() => {
                const result = this.createTempObject(object);
                if (result !== "what???") {
                  changeSelectedObjects(result);
                }
              }}
            >
              <Icon
                iconName={icons[object.object.type]}
                style={{
                  fontSize: "20px",
                  alignSelf: "center",
                  marginLeft: "20px"
                }}
              />
              <TextField
                styles={{
                  root: {
                    marginLeft: "5px",
                    width: "130px"
                  },
                  fieldGroup: {
                    backgroundColor
                  }
                }}
                value={object.name}
                borderless={!onTextfieldFocused}
                onFocus={() => this.setState({ onTextfieldFocused: true })}
                onBlur={() => this.setState({ onTextfieldFocused: false })}
                onChange={(e: any) => object.changeName(e.target.value)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
