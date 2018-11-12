import { observer } from "mobx-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

import { IObject } from "src/mobx-state-tree/stores/object/Object";
import {
  icons,
  IObjectStore
} from "src/mobx-state-tree/stores/object/ObjectStore";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";

@observer
export default class ObjectContainer extends React.Component<
  { objects: IObjectStore },
  any
> {
  public state = {
    onTextfieldFocused: false
  };
  public render() {
    const { onTextfieldFocused } = this.state;
    const { objects } = this.props.objects;
    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Object"} />
        {objects.map((object: IObject) => {
          return (
            <div
              key={object.id}
              style={{
                display: "flex",
                border: "1px solid black",
                padding: "3px"
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
                styles={{ root: { marginLeft: "5px", width: "150px" } }}
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
