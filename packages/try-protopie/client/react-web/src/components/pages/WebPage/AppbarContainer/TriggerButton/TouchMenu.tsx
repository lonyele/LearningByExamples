import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

const touchList = [
  {
    key: "tap",
    text: "Tap",
    secondaryText: "T",
    onClick: onAlertClicked("Tap")
  },
  {
    key: "doubleTap",
    text: "Double Tap",
    onClick: onAlertClicked("Double Tap")
  },
  {
    key: "touchDown",
    text: "Touch Down",
    onClick: onAlertClicked("Touch Down")
  },
  {
    key: "touchUp",
    text: "Touch Up",
    secondaryText: "Ctrl + 1",
    onClick: onAlertClicked("Touch Up")
  },
  {
    key: "longPress",
    text: "Long Press",
    onClick: onAlertClicked("Long Press")
  },
  {
    key: "fling",
    text: "Fling",
    onClick: onAlertClicked("Fling")
  },
  {
    key: "pull",
    text: "Pull",
    onClick: onAlertClicked("Pull")
  },

  {
    key: "drag",
    text: "Drag",
    secondaryText: "D",
    onClick: onAlertClicked("Drag")
  },
  {
    key: "pinch",
    text: "Pinch",
    onClick: onAlertClicked("Pinch")
  },
  {
    key: "rotate",
    text: "Rotate",
    onClick: onAlertClicked("Rotate")
  }
];
export class TouchMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  public render() {
    return (
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 5px 0px"
        }}
      >
        {touchList.map((touch: any) => {
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
