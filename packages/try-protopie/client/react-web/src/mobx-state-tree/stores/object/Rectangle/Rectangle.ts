import { Instance, types } from "mobx-state-tree";

export const Rectangle = types.model({
  type: "Rectangle",
  rectangleContents: types.string
});

export type IRectangle = Instance<typeof Rectangle>;
