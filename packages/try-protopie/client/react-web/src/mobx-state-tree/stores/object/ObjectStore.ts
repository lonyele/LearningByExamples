import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

import { addInput } from "./actions/addInput";
import { addOval } from "./actions/addOval";
import { addRectangle } from "./actions/addRectangle";
import { addText } from "./actions/addText";
import { IObject, Object, ObjectType } from "./Object";

export const icons = {
  [ObjectType.Text]: "FontColorA",
  [ObjectType.Input]: "TextField",
  [ObjectType.Rectangle]: "RectangleShapeSolid",
  [ObjectType.Oval]: "Record2"
};
const randomString = cuid();
export const objectList = [
  {
    id: randomString,
    name: "Input Text~",
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    object: {
      type: ObjectType.Text,
      textContents: "Text Specific Contents"
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
      inputContents: "Input Specific Contents"
    }
  },
  {
    id: cuid(),
    name: "Input Rectangle",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    object: {
      type: ObjectType.Rectangle,
      rectangleContents: "Rectangle Specific Contents"
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
      ovalContents: "Oval Specific Contents"
    }
  }
];

export const selectedObjectIds = [randomString];
export const ObjectStore = types
  .model({
    objects: types.array(Object),
    selectedObjectIds: types.array(types.string)
  })
  .views(self => ({
    get selectedObject() {
      return self.objects.filter(
        (object: IObject) => object.id === self.selectedObjectIds[0]
      );
    }
  }))
  .actions(self => ({
    changeSelectedObjects(selectedObjectId: string) {
      self.selectedObjectIds[0] = selectedObjectId;
    },
    addInput: addInput(self),
    addOval: addOval(self),
    addRectangle: addRectangle(self),
    addText: addText(self)
  }));

export type IObjectStore = Instance<typeof ObjectStore>;
