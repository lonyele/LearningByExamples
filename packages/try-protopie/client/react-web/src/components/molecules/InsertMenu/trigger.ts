import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";
import { onAlertClicked } from "../utils/onAlertClicked";

export const triggerItems = [
  {
    key: "tap",
    text: "Tap",
    onClick: onAlertClicked("Tap")
  },
  {
    key: "doubleTap",
    text: "DoubleTap",
    onClick: onAlertClicked("DoubleTap")
  },
  {
    key: "touchDown",
    text: "TouchDown",
    onClick: onAlertClicked("TouchDown")
  },
  {
    key: "touchUp",
    text: "TouchUp",
    onClick: onAlertClicked("TouchUp")
  },
  {
    key: "longPress",
    text: "LongPress",
    onClick: onAlertClicked("LongPress")
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
    secondaryText: "I",
    onClick: onAlertClicked("Rotate")
  },
  {
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "chain",
    text: "Chain",
    secondaryText: "c",

    onClick: onAlertClicked("Chain")
  },
  {
    key: "range",
    text: "Range",
    secondaryText: "R",
    onClick: onAlertClicked("Range")
  },
  {
    key: "start",
    text: "Start",
    secondaryText: "V",
    onClick: onAlertClicked("Start")
  },
  {
    key: "detect",
    text: "Detect",
    onClick: onAlertClicked("Detect")
  },
  {
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "mouserOver",
    text: "MouseOver",
    onClick: onAlertClicked("MouseOver")
  },
  {
    key: "mouserOut",
    text: "MouseOut",
    onClick: onAlertClicked("MouseOut")
  },
  {
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "press",
    text: "Press",
    secondaryText: "N",
    onClick: onAlertClicked("Press")
  },
  {
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider
  },
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
    key: "divider_1",
    itemType: ContextualMenuItemType.Divider
  },
  {
    key: "tilt",
    text: "Tile",
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
    secondaryText: "N",
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
  }
];
