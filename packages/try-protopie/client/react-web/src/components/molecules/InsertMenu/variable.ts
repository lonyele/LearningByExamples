import { onAlertClicked } from "../utils/onAlertClicked";

export const variableItems = [
  {
    key: "forAllScenes",
    text: "ForAllScenes",
    onClick: onAlertClicked("ForAllScenes")
  },
  {
    key: "forThisScene",
    text: "ForThisScene",
    onClick: onAlertClicked("ForThisScene")
  }
];
