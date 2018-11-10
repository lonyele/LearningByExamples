import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";

import { onAlertClicked } from "../utils/onAlertClicked";

export const responseItems = [
  {
    key: "move",
    text: "Move",
    secondaryText: "M",
    onClick: onAlertClicked("Move")
  },
  {
    key: "scale",
    text: "Scale",
    secondaryText: "S",
    onClick: onAlertClicked("Scale")
  },
  {
    key: "rotate",
    text: "Rotate",
    onClick: onAlertClicked("Rotate")
  },
  {
    key: "3dRotate",
    text: "3D Rotate",
    onClick: onAlertClicked("3D Rotate")
  },
  {
    key: "opacity",
    text: "Opacity",
    secondaryText: "O",
    onClick: onAlertClicked("Opacity")
  },
  {
    key: "color",
    text: "Color",
    onClick: onAlertClicked("Color")
  },
  {
    key: "radius",
    text: "Radius",
    onClick: onAlertClicked("Radius")
  },
  {
    key: "reorder",
    text: "Reorder",
    onClick: onAlertClicked("Reorder")
  },
  {
    key: "scroll",
    text: "Scroll",
    onClick: onAlertClicked("Scroll")
  },

  {
    key: "stop",
    text: "Stop",
    onClick: onAlertClicked("Stop")
  },
  {
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "jump",
    text: "Jump",
    onClick: onAlertClicked("Jump")
  },
  {
    key: "send",
    text: "Send",
    onClick: onAlertClicked("Send")
  },
  {
    key: "divider_2",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "text",
    text: "Text",
    onClick: onAlertClicked("Text")
  },
  {
    key: "focus",
    text: "Focus",
    onClick: onAlertClicked("Focus")
  },

  {
    key: "playback",
    text: "Playback",
    onClick: onAlertClicked("Playback")
  },
  {
    key: "assign",
    text: "Assign",
    onClick: onAlertClicked("Assign")
  },

  {
    key: "vibrate",
    text: "Vibrate",
    onClick: onAlertClicked("Vibrate")
  },
  {
    key: "divider_3",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "condition",
    text: "Condition",
    onClick: onAlertClicked("Condition")
  }
];
