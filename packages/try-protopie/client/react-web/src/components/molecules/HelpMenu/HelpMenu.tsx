import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

import { onAlertClicked } from "../utils/onAlertClicked";

export class HelpMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  public render() {
    return (
      <DefaultButton
        id="HelpMenu"
        text="Help"
        // style={{ width: "50px", minWidth: "20px" }}
        styles={{ menuIcon: { display: "none" } }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "help",
              text: "Help",
              secondaryText: "Ctrl + =",
              onClick: onAlertClicked("Help")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "aboutProtoPie",
              text: "About ProtoPie",
              onClick: onAlertClicked("About ProtoPie")
            },
            {
              key: "acknowledgements",
              text: "Acknowledgements",
              onClick: onAlertClicked("Acknowledgements")
            },
            {
              key: "termsOfUse",
              text: "Terms of Use",
              onClick: onAlertClicked("Terms of Use")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "checkForUpdates",
              text: "Check for Updates...",
              onClick: onAlertClicked("Check for Updates...")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "preferences",
              text: "Preferences",
              secondaryText: "Ctrl + Comma",
              onClick: onAlertClicked("Preferences")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "license",
              text: "License...",
              onClick: onAlertClicked("License...")
            },
            {
              key: "userId",
              text: "skyrabbits1@gmail.com",
              onClick: onAlertClicked("user Info(skyrabbits1@gmail.com)")
            },
            {
              key: "goToCloud",
              text: "Go to Cloud",
              onClick: onAlertClicked("Go to Cloud")
            },
            {
              key: "logOut",
              text: "Log Out",
              onClick: onAlertClicked("Log Out")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "visitHomepage",
              text: "Visit Homepage",
              onClick: onAlertClicked("Visit Homepage")
            }
          ]
        }}
      />
    );
  }
}
