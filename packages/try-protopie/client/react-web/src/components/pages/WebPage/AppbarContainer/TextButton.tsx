import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";
import { ObjectType } from "src/mobx-state-tree/stores/object/Object";

export class TextButton extends React.Component<any, any> {
  public render() {
    const { addObject } = this.props;
    return (
      <DefaultButton
        id="TextButton"
        text="Text"
        style={{
          height: "40px",
          width: "40px",
          minWidth: "40px",
          backgroundColor: "white",
          marginRight: "5px"
        }}
        iconProps={{ iconName: "FontColorA" }}
        styles={{
          icon: {
            fontSize: "30px",
            height: "30px",
            marginTop: "10px",
            marginBottom: "-7px"
          },
          menuIcon: { display: "none" },
          flexContainer: { flexDirection: "column" },
          textContainer: { fontSize: "10px" }
        }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "text",
              text: "Text",
              iconProps: {
                iconName: "FontColorA",
                style: { color: "black" }
              },
              onClick: () => addObject(ObjectType.Text)
            },
            {
              key: "input",
              text: "Input",
              iconProps: {
                iconName: "TextField",
                style: { color: "black" }
              },
              onClick: () => addObject(ObjectType.Input)
            }
          ]
        }}
      />
    );
  }
}
