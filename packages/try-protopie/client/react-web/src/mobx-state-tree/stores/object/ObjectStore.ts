import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

import { Object, ObjectType } from "./Object";

export const icons = {
  [ObjectType.Text]: "FontColorA",
  [ObjectType.Input]: "TextField",
  [ObjectType.Rectangle]: "RectangleShapeSolid",
  [ObjectType.Oval]: "Record2"
};

export const objectList = [
  {
    id: cuid(),
    name: "Input Text~",
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    object: {
      type: ObjectType.Text
    }
  },
  {
    id: cuid(),
    name: "Input Name",
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    object: {
      type: ObjectType.Input,

      whatup: "what~~~~~~~~~"
    }
  },
  {
    id: cuid(),
    name: "Input Rectangle",
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    object: {
      type: ObjectType.Rectangle
    }
  },
  {
    id: cuid(),
    name: "Input Oval~",
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    object: {
      type: ObjectType.Oval,

      whatup: "what~~~~~~~~~"
    }
  }
];

export const selectedObjects = [
  {
    id: cuid(),
    name: "Input Text",
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    object: {
      type: ObjectType.Text
    }
  }
];
export const ObjectStore = types
  .model({
    objects: types.array(Object),
    selectedObjects: types.array(Object)
  })
  .views(self => ({}))
  .actions(self => ({}));

export type IObjectStore = Instance<typeof ObjectStore>;
