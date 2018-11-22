import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";
import { ConditionalMenu } from "./ConditionalMenu";
import { InputMenu } from "./InputMenu";
// import { FileMenu } from "src/components/molecules/FileMenu/FileMenu";
// import { VideoButton } from "../VideoButton";
import { TouchMenu } from "./TouchMenu";
// import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

export class TriggerButton extends React.Component<any, any> {
  public render() {
    const { triggers } = this.props;
    return (
      <DefaultButton
        id="TriggerButton"
        text="Trigger"
        style={{
          height: "40px",
          width: "40px",
          minWidth: "40px",
          backgroundColor: "white",
          marginRight: "5px"
        }}
        iconProps={{ iconName: "FontColorA" }}
        styles={{
          icon: {
            fontSize: "30px",
            height: "30px",
            marginTop: "10px",
            marginBottom: "-7px"
          },
          menuIcon: { display: "none" },
          flexContainer: { flexDirection: "column" },
          textContainer: { fontSize: "10px" }
        }}
        menuProps={{
          items: []
        }}
        menuAs={() => (
          <div style={{ display: "flex" }}>
            {/* <TouchMenu />
            <TouchMenu />
            <TouchMenu /> */}
            <div>
              <TouchMenu triggers={triggers} />
            </div>
            <div>
              <ConditionalMenu />
            </div>
            <div>
              <InputMenu />
            </div>
          </div>
        )}
      />
    );
  }
}
