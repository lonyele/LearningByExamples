import { onAlertClicked } from "../utils/onAlertClicked";

export const distributeItems = [
  {
    key: "horizontal",
    text: "Horizontal",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Horizontal")
  },
  {
    key: "vertical",
    text: "Vertical",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Vertical")
  }
];
