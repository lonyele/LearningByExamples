import { Instance, types } from "mobx-state-tree";

export const Input = types.model({
  type: "Input",
  inputContents: types.string
});

export type IInput = Instance<typeof Input>;
