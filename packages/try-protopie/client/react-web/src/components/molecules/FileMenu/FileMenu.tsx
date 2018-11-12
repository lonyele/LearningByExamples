import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";
import { openRecentItems } from "./openRecent";

export class FileMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  private onAlertClicked = (text: string) => (
    ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    alert(`${text} clicked~~~~~`);
    ev.preventDefault();
  };
  public render() {
    return (
      <DefaultButton
        id="FileMenu"
        text="File"
        styles={{
          menuIcon: { display: "none" }
        }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "file",
              text: "File",
              secondaryText: "Ctrl + N",
              onClick: this.onAlertClicked("File")
            },
            {
              key: "open",
              text: "Open",
              secondaryText: "Ctrl + O",
              onClick: this.onAlertClicked("Open")
            },
            {
              key: "divider_1",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "openRecent",
              text: "OpenRecent",

              subMenuProps: {
                items: openRecentItems
              }
            },
            {
              key: "close",
              text: "Close",
              secondaryText: "Ctrl + W",
              onClick: this.onAlertClicked("Close")
            },
            {
              key: "save",
              text: "Save",
              secondaryText: "Ctrl + S",
              onClick: this.onAlertClicked("Save")
            },
            {
              key: "saveAs",
              text: "SaveAs",
              secondaryText: "Ctrl + Shift + S",
              href: "http://bing.com",
              onClick: this.onAlertClicked("SaveAs")
            },
            {
              key: "divider_2",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "uploadToCloud",
              text: "Upload To Cloud",
              secondaryText: "Ctrl + U",
              href: "/cloud",
              onClick: this.onAlertClicked("Upload To Cloud")
            },
            {
              key: "divider_3",
              itemType: ContextualMenuItemType.Divider
            },
            {
              key: "exit",
              name: "Exit",
              href: "http://bing.com",
              onClick: this.onAlertClicked("Exit")
            }
          ]
        }}
      />
    );
  }
}
