import { Instance, types } from "mobx-state-tree";
// import { TriggerType } from "../Trigger";

export const Tap = types
  .model({
    type: "Tap",
    // type: TriggerType.Tap,
    // 이거 reference로 Object 바로 걸면 될거 같은데 잠시 보류
    // layer: "layer~~", // types.optional(types.string, "layer~~"),
    // tapContents: "tapContents~~" // types.optional(types.string, "tapContents~~")
    layer: types.optional(types.string, "layer~~"),
    tapContents: types.optional(types.string, "tapContents~~")
  })
  .actions(self => ({}));

export type ITap = Instance<typeof Tap>;
