import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";
import { onAlertClicked } from "../utils/onAlertClicked";

export class ViewMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  public render() {
    return (
      <DefaultButton
        id="ViewMenu"
        text="View"
        // style={{ width: "50px", minWidth: "20px" }}
        styles={{ menuIcon: { display: "none" } }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "zoomIn",
              text: "Zoom In",
              secondaryText: "Ctrl + =",
              onClick: onAlertClicked("Zoom In")
            },
            {
              key: "zoomOut",
              text: "Zoom Out",
              secondaryText: "Ctrl + -",
              onClick: onAlertClicked("Zoom Out")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "actualSize",
              text: "Actual Size",
              secondaryText: "Ctrl + 0",
              onClick: onAlertClicked("Actual Size")
            },
            {
              key: "centerCanvas",
              text: "Center Canvas",
              secondaryText: "Ctrl + 1",
              onClick: onAlertClicked("Center Canvas")
            },
            {
              key: "toggleLayerPanel",
              text: "Toggle Layer Panel",
              secondaryText: "Alt + Ctrl + 1",
              onClick: onAlertClicked("Toggle Layer Panel")
            },
            {
              key: "toggleInteractionPanel",
              text: "Toggle Interaction Panel",
              secondaryText: "Alt + Ctrl + 2",
              onClick: onAlertClicked("Toggle Interaction Panel")
            },
            {
              key: "toggleLayerAndInteractionPanels",
              text: "Toggle Layer and Interaction Panels",
              secondaryText: "Alt + Ctrl + 3",
              onClick: onAlertClicked("Toggle Layer and Interaction Panels")
            }
          ]
        }}
      />
    );
  }
}
