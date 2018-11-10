import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";

import { onAlertClicked } from "../utils/onAlertClicked";

export const alignItems = [
  {
    key: "left",
    text: "Left",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Left")
  },
  {
    key: "centerHorizontal",
    text: "Center (Horizontal)",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Center (Horizontal)")
  },
  {
    key: "right",
    text: "Right",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Right")
  },
  {
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "top",
    text: "Top",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Top")
  },
  {
    key: "middleVertically",
    text: "Middle (Vertically)",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Middle (Vertically)")
  },
  {
    key: "bottom",
    text: "Bottom",
    iconProps: {
      iconName: "Coffeescript"
    },
    onClick: onAlertClicked("Bottom")
  }
];
