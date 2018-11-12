import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";
import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

export class ContainerButton extends React.Component<any, any> {
  public render() {
    return (
      <DefaultButton
        id="ContainerButton"
        text="Container"
        style={{
          height: "40px",
          width: "40px",
          minWidth: "40px",
          backgroundColor: "white"
        }}
        iconProps={{ iconName: "BorderDash" }}
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
          shouldFocusOnMount: true,
          items: [
            {
              key: "container",
              text: "Container",
              iconProps: {
                iconName: "BorderDash",
                style: { color: "black" }
              },
              secondaryText: "N",
              onClick: onAlertClicked("Text")
            },
            {
              key: "scrollContainer",
              text: "Scroll Container",
              iconProps: {
                iconName: "BorderDash",
                style: { color: "black" }
              },
              onClick: onAlertClicked("Scroll Container")
            },
            {
              key: "pagingContainer",
              text: "Paging Container",
              iconProps: {
                iconName: "BorderDash",
                style: { color: "black" }
              },
              onClick: onAlertClicked("Paging Container")
            }
          ]
        }}
      />
    );
  }
}
