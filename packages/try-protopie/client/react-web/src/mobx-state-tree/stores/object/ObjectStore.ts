import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

import { Object, ObjectType } from "./Object";

export const objectList = [
  {
    id: cuid(),
    name: "Input Text~",
    object: {
      type: ObjectType.Text,
      x: 100,
      y: 100,
      width: 50,
      height: 50
    }
  },
  {
    id: cuid(),
    name: "Input Name",
    object: {
      type: ObjectType.Input,
      x: 50,
      y: 50,
      width: 50,
      height: 50,
      whatup: "what~~~~~~~~~"
    }
  },
  {
    id: cuid(),
    name: "Input Rectangle",
    object: {
      type: ObjectType.Rectangle,
      x: 100,
      y: 100,
      width: 50,
      height: 50
    }
  },
  {
    id: cuid(),
    name: "Input Oval~",
    object: {
      type: ObjectType.Oval,
      x: 50,
      y: 50,
      width: 50,
      height: 50,
      whatup: "what~~~~~~~~~"
    }
  }
];

export const selectedObjects = [
  {
    id: cuid(),
    name: "Input Text",
    object: {
      type: ObjectType.Text,
      x: 100,
      y: 100,
      width: 50,
      height: 50
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
