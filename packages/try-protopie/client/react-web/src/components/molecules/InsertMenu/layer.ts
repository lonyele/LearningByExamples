import { onAlertClicked } from "../utils/onAlertClicked";

export const layerItems = [
  {
    key: "image",
    text: "Image",
    secondaryText: "I",
    onClick: onAlertClicked("Image")
  },
  {
    key: "video",
    text: "Video",
    onClick: onAlertClicked("Video")
  },
  {
    key: "rectangle",
    text: "Rectangle",
    secondaryText: "R",
    onClick: onAlertClicked("Rectangle")
  },
  {
    key: "oval",
    text: "Oval",
    secondaryText: "V",
    onClick: onAlertClicked("Oval")
  },
  {
    key: "text",
    text: "Text",
    onClick: onAlertClicked("Text")
  },
  {
    key: "input",
    text: "Input",
    onClick: onAlertClicked("Input")
  },
  {
    key: "container",
    text: "Container",
    secondaryText: "N",
    onClick: onAlertClicked("Container")
  },
  {
    key: "scrollContainer",
    text: "ScrollContainer",
    onClick: onAlertClicked("ScrollContainer")
  },
  {
    key: "pagingController",
    text: "PagingController",
    onClick: onAlertClicked("PagingController")
  }
];
