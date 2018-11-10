import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";
import { layerItems } from "./layer";
import { responseItems } from "./response";
import { triggerItems } from "./trigger";
import { variableItems } from "./variable";

export class InsertMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };

  public render() {
    return (
      <DefaultButton
        id="InsertMenu"
        text="Insert"
        // style={{ width: "50px", minWidth: "20px" }}
        styles={{ menuIcon: { display: "none" } }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "layer",
              text: "Layer",
              subMenuProps: {
                items: layerItems
              }
            },
            {
              key: "variable",
              text: "Variable",
              subMenuProps: {
                items: variableItems
              }
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "trigger",
              text: "Trigger",
              subMenuProps: {
                items: triggerItems
              }
            },
            {
              key: "response",
              text: "Response",
              subMenuProps: {
                items: responseItems
              }
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "scene",
              text: "Scene"
            }
          ]
        }}
      />
    );
  }
}
