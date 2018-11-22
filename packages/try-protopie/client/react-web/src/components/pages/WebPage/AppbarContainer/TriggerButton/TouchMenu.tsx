import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

import { onAlertClicked } from "src/components/molecules/utils/onAlertClicked";

const touchList = [
  {
    key: "Tap",
    text: "Tap",
    secondaryText: "T",
    onClick: "addTap" //  onAlertClicked("Tap")
  },
  {
    key: "DoubleTap",
    text: "Double Tap",
    onClick: "addDoubleTap" // onAlertClicked("Double Tap")
  },
  {
    key: "TouchDown",
    text: "Touch Down",
    onClick: "addTouchDown" // onAlertClicked("Touch Down")
  },
  {
    key: "TouchUp",
    text: "Touch Up",
    secondaryText: "Ctrl + 1",
    onClick: "addTouchUp" // onAlertClicked("Touch Up")
  },
  {
    key: "LongPress",
    text: "Long Press",
    onClick: onAlertClicked("Long Press")
  },
  {
    key: "Fling",
    text: "Fling",
    onClick: onAlertClicked("Fling")
  },
  {
    key: "Pull",
    text: "Pull",
    onClick: onAlertClicked("Pull")
  },

  {
    key: "Drag",
    text: "Drag",
    secondaryText: "D",
    onClick: onAlertClicked("Drag")
  },
  {
    key: "Pinch",
    text: "Pinch",
    onClick: onAlertClicked("Pinch")
  },
  {
    key: "Rotate",
    text: "Rotate",
    onClick: onAlertClicked("Rotate")
  }
];
export class TouchMenu extends React.Component<any, any> {
  public state = {
    showCallout: false
  };
  public render() {
    const { triggers } = this.props;
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
              onClick={() => triggers[touch.onClick]()}
            />
          );
        })}
      </div>
    );
  }
}
