import { Instance, types } from "mobx-state-tree";

export const Rectangle = types.model({
  type: "Rectangle"
});

export type IRectangle = Instance<typeof Rectangle>;
