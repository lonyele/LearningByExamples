import { Instance, types } from "mobx-state-tree";
// import { ObjectType } from "../Object";

export const Text = types
  .model({
    type: "Text"

    // type: ObjectType.Text,
    // type: types.enumeration<ObjectType.Text>("Text", [ObjectType.Text]),
  })
  .actions(self => ({}));

export type IText = Instance<typeof Text>;
