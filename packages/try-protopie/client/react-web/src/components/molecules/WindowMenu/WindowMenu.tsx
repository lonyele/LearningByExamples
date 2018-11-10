import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

import { onAlertClicked } from "../utils/onAlertClicked";

export class WindowMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  public render() {
    return (
      <DefaultButton
        id="WindowMenu"
        text="Window"
        // style={{ width: "50px", minWidth: "20px" }}
        styles={{ menuIcon: { display: "none" } }}
        menuProps={{
          shouldFocusOnMount: true,
          items: [
            {
              key: "minimize",
              text: "Minimize",
              secondaryText: "Ctrl + M",
              onClick: onAlertClicked("Minimize")
            }
          ]
        }}
      />
    );
  }
}
