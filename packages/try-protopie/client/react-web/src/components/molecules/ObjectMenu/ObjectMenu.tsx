import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

// import { onAlertClicked } from "../utils/onAlertClicked";
import { alignItems } from "./align";
import { distributeItems } from "./distribute";

export class ObjectMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };

  public render() {
    return (
      <DefaultButton
        id="ObjectMenu"
        text="Object"
        // style={{ width: "50px", minWidth: "20px" }}
        styles={{ menuIcon: { display: "none" } }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "groupLayersWithContainer",
              text: "Group Layers With Container",
              secondaryText: "Ctrl + G",
              disabled: true
            },
            {
              key: "ungroupLayersFromContainer",
              text: "Ungroup Layers From Container",
              secondaryText: "Ctrl + Shift + G",
              disabled: true
            },

            {
              key: "duplicateLayer",
              text: "Duplicate Layer",
              secondaryText: "Ctrl + D"
              // onClick: "DF"
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "collapse",
              text: "Collapse",
              secondaryText: "Ctrl + ["
            },

            {
              key: "expand",
              text: "Expand",
              secondaryText: "Ctrl + ]"
            },
            {
              key: "collapseAllContainers",
              text: "Collapse All Containers"
            },
            {
              key: "divider_2",
              itemType: ContextualMenuItemType.Divider
            },

            {
              key: "align",
              text: "Align",
              subMenuProps: {
                items: alignItems
              }
            },
            {
              key: "distribute",
              text: "Distribute",
              subMenuProps: {
                items: distributeItems
              }
            }
          ]
        }}
      />
    );
  }
}
