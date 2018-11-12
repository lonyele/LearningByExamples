import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

const inputList = [
  {
    key: "focus",
    text: "Focus",
    onClick: onAlertClicked("Focus")
  },
  {
    key: "return",
    text: "Return",
    onClick: onAlertClicked("Return")
  },
  {
    key: "divider"
  },
  {
    key: "tilt",
    text: "Tilt",
    onClick: onAlertClicked("Tilt")
  },
  {
    key: "sound",
    text: "Sound",
    onClick: onAlertClicked("Sound")
  },

  {
    key: "compass",
    text: "Compass",
    onClick: onAlertClicked("Compass")
  },
  {
    key: "3dTouch",
    text: "3D Touch",
    onClick: onAlertClicked("3D Touch")
  },

  {
    key: "proximity",
    text: "Proximity",
    onClick: onAlertClicked("Proximity")
  },
  {
    key: "receive",
    text: "Receive",
    onClick: onAlertClicked("Receive")
  }
];
export class InputMenu extends React.Component<any, any> {
  public render() {
    return (
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 5px 0px",
          height: "320px",
          backgroundColor: "white"
        }}
      >
        {inputList.map((touch: any) => {
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
