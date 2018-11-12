import { Icon } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";
import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

export class PreviewButton extends React.Component<any, any> {
  public render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40px",
          marginRight: "5px"
        }}
        onClick={onAlertClicked("Preview")}
      >
        <Icon
          iconName="TVMonitor"
          style={{ fontSize: "30px", alignSelf: "center" }}
        />
        <span style={{ alignSelf: "center", fontSize: "10px" }}>Preview</span>
      </div>
    );
  }
}
