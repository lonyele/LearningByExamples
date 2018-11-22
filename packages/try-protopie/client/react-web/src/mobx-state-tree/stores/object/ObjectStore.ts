import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

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
    x: 100,
    y: 100,
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
    changeSelectedObjects(newSelectedObject: IObject) {
      self.selectedObjectIds[0] = newSelectedObject.id;
    },

    addObject(type: ObjectType) {
      switch (type) {
        case ObjectType.Text: {
          self.objects.push(
            Object.create({
              id: cuid(),
              name: "Input Text",
              x: 55,
              y: 66,
              width: 77,
              height: 88,
              object: {
                type,
                textContents: "what~~~~"
              }
            })
          );
          return;
        }
        case ObjectType.Input: {
          self.objects.push(
            Object.create({
              id: cuid(),
              name: "Input Input",
              x: 55,
              y: 66,
              width: 77,
              height: 88,
              object: {
                type,
                inputContents: "what~~~~"
              }
            })
          );
          return;
        }
        case ObjectType.Rectangle: {
          self.objects.push(
            Object.create({
              id: cuid(),
              name: "Rectangle",
              x: 55,
              y: 66,
              width: 77,
              height: 88,
              object: {
                type,
                rectangleContents: "what~~~~"
              }
            })
          );
          return;
        }
        case ObjectType.Oval: {
          self.objects.push(
            Object.create({
              id: cuid(),
              name: "Oval@@@@",
              x: 55,
              y: 66,
              width: 77,
              height: 88,
              object: {
                type,
                ovalContents: "what~~~~"
              }
            })
          );
          return;
        }
        default: {
          return "what???";
        }
      }
    }
  }));

export type IObjectStore = Instance<typeof ObjectStore>;
