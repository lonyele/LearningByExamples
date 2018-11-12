import { Instance, types } from "mobx-state-tree";

import { Input } from "./Input/Input";
import { Oval } from "./Oval/Oval";
import { Rectangle } from "./Rectangle/Rectangle";
import { Text } from "./Text/Text";

export enum ObjectType {
  Text = "Text",
  Input = "Input",
  Rectangle = "Rectangle",
  Oval = "Oval"
}

export const Object = types
  .model({
    id: types.string,
    name: types.string,
    x: types.number,
    y: types.number,
    width: types.number,
    height: types.number,
    object: types.union(Text, Input, Oval, Rectangle)
  })
  .actions(self => ({
    changeName(newName: string) {
      self.name = newName;
    },
    changeX(newX: number) {
      self.x = newX;
    },
    changeY(newY: number) {
      self.y = newY;
    },
    changeWidth(newWidth: number) {
      self.width = newWidth;
    },
    changeHeight(newHeight: number) {
      self.height = newHeight;
    }
  }));

export type IObject = Instance<typeof Object>;
