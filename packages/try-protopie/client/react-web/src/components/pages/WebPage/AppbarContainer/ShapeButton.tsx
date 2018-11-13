import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";
import { ObjectType } from "src/mobx-state-tree/stores/object/Object";

export class ShapeButton extends React.Component<any, any> {
  public render() {
    const { addObject } = this.props;
    return (
      <DefaultButton
        id="ShapeButton"
        text="Shape"
        style={{
          height: "40px",
          width: "40px",
          minWidth: "40px",
          backgroundColor: "white",
          marginRight: "5px"
        }}
        iconProps={{ iconName: "6PointStar" }}
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
              key: "rectangle",
              text: "Rectangle",
              secondaryText: "V",
              iconProps: {
                iconName: "RectangleShapeSolid",
                style: { color: "black" }
              },
              onClick: () => addObject(ObjectType.Rectangle)
            },
            {
              key: "oval",
              text: "Oval",
              secondaryText: "O",
              iconProps: {
                iconName: "Record2",
                style: { color: "black" }
              },
              onClick: () => addObject(ObjectType.Oval)
            }
          ]
        }}
      />
    );
  }
}
