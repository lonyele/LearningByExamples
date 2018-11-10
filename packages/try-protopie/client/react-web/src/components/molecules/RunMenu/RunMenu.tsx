import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

import { onAlertClicked } from "../utils/onAlertClicked";

export class RunMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  public render() {
    return (
      <DefaultButton
        id="RunMenu"
        text="Run"
        // style={{ width: "50px", minWidth: "20px" }}
        styles={{ menuIcon: { display: "none" } }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "connectedDevices",
              text: "Connected Devices...",
              onClick: onAlertClicked("Connected Devices...")
            },
            {
              key: "run",
              text: "Run",
              secondaryText: "Ctrl + R",
              onClick: onAlertClicked("Run")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "togglePreview",
              text: "Toggle Preview",
              secondaryText: "Ctrl + P",
              onClick: onAlertClicked("Toggle Preivew")
            },
            {
              key: "bringPreviewToFront",
              text: "Bring Preview to Front",
              secondaryText: "Ctrl + Tab",
              onClick: onAlertClicked("Bring Preview to Front")
            }
          ]
        }}
      />
    );
  }
}
