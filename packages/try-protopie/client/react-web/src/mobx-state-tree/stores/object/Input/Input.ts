import { Instance, types } from "mobx-state-tree";
// import { ObjectType } from "../Object";

export const Input = types.model({
  type: "Input",
  // type: ObjectType.Input,
  // type: types
  //   .string(ObjectType.Input),
  // .enumeration<ObjectType.Input>("Input", [ObjectType.Input]),
  x: types.integer,
  y: types.integer,
  width: types.integer,
  height: types.integer,
  whatup: types.string
});

export type IInput = Instance<typeof Input>;
