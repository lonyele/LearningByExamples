import { Icon } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";
import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

export class PlayButton extends React.Component<any, any> {
  public render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40px",
          cursor: "pointer"
        }}
        onClick={onAlertClicked("Play")}
      >
        <Icon
          iconName="Play"
          style={{ fontSize: "30px", alignSelf: "center" }}
        />
        <span style={{ alignSelf: "center", fontSize: "10px" }}>Play</span>
      </div>
    );
  }
}
