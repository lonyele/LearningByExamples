import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

const conditionalList = [
  {
    key: "chain",
    text: "Chain",
    secondaryText: "C",
    onClick: onAlertClicked("Chain")
  },
  {
    key: "range",
    text: "Range",
    onClick: onAlertClicked("Range")
  },

  {
    key: "start",
    text: "Start",
    onClick: onAlertClicked("Start")
  },
  {
    key: "detect",
    text: "Detect",
    onClick: onAlertClicked("Detect")
  },
  {
    key: "divider"
  },
  {
    key: "mouseOver",
    text: "Mouse Over",
    onClick: onAlertClicked("Mouse Over")
  },
  {
    key: "mouseOut",
    text: "Mouse Out",
    onClick: onAlertClicked("Mouse Out")
  },
  {
    key: "divider"
  },
  {
    key: "press",
    text: "Press",
    onClick: onAlertClicked("Press")
  }
];
export class ConditionalMenu extends React.Component<any, any> {
  public render() {
    return (
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 5px 0px",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          height: "320px",
          backgroundColor: "white"
        }}
      >
        {conditionalList.map((touch: any) => {
          if (touch.key === "divider") {
            return (
              <div
                key={touch.key}
                style={{
                  width: "165px",
                  height: "1px",
                  backgroundColor: "black"
                }}
              />
            );
          }
          return (
            <DefaultButton
              key={touch.key}
              id={touch.key}
              text={touch.text}
              secondaryText={touch.secondaryText}
              onRenderText={() => (
                <span
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    marginLeft: "10px"
                  }}
                >
                  <span>{touch.text}</span>
                  <span style={{ marginLeft: "auto" }}>
                    {touch.secondaryText}
                  </span>
                </span>
              )}
              iconProps={{ iconName: "MarketDown" }}
              style={{
                width: "165px",
                minWidth: "20px"
              }}
              styles={{
                menuIcon: { display: "none" },
                root: { backgroundColor: "white" }
              }}
              onClick={onAlertClicked(touch.text)}
            />
          );
        })}
      </div>
    );
  }
}
