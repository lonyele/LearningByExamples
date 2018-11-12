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
    object: types.union(Text, Input, Oval, Rectangle)
  })
  .actions(self => ({
    changeName(newName: string) {
      self.name = newName;
    }
  }));

export type IObject = Instance<typeof Object>;
