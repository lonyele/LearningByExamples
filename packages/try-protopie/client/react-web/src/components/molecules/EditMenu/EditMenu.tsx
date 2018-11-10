import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

import { onAlertClicked } from "../utils/onAlertClicked";

export class EditMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  public render() {
    return (
      <DefaultButton
        id="EditMenu"
        text="Edit"
        // style={{ width: "50px", minWidth: "20px" }}
        styles={{ menuIcon: { display: "none" } }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "undo",
              text: "Undo",
              secondaryText: "Ctrl + Z",
              onClick: onAlertClicked("Undo")
            },
            {
              key: "redo",
              text: "Redo",
              secondaryText: "Ctrl + Shift + Z",
              onClick: onAlertClicked("Redo")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "copy",
              text: "Copy",
              secondaryText: "Ctrl + C",
              onClick: onAlertClicked("Copy")
            },
            {
              key: "paste",
              text: "Paste",
              secondaryText: "Ctrl + V",
              onClick: onAlertClicked("Paste")
            },
            {
              key: "delete",
              text: "Delete",
              secondaryText: "Backspace",
              onClick: onAlertClicked("Delete")
            },
            {
              key: "selectAll",
              text: "Select All",
              secondaryText: "Ctrl + A",
              onClick: onAlertClicked("Select All")
            }
          ]
        }}
      />
    );
  }
}
