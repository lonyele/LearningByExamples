import { Instance, types } from "mobx-state-tree";
// import { ObjectType } from "../Object";

export const Input = types.model({
  type: "Input",
  inputContents: types.string
  // type: ObjectType.Input,
  // type: types
  //   .string(ObjectType.Input),
  // .enumeration<ObjectType.Input>("Input", [ObjectType.Input]),
});

export type IInput = Instance<typeof Input>;
