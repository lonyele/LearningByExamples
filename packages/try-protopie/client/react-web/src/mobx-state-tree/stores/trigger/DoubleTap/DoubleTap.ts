import { Instance, types } from "mobx-state-tree";
// import { TriggerType } from "../Trigger";

export const DoubleTap = types.model({
  type: "DoubleTap",
  // type: TriggerType.DoubleTap,
  // 이거 reference로 Object 바로 걸면 될거 같은데 잠시 보류
  // layer: "layer~~", // types.optional(types.string, "layer~~"),
  // doubleTapContents: "doubleTapContents~~" // types.optional(types.string, "doubleTapContents~~")
  layer: types.optional(types.string, "layer~~"),
  doubleTapContents: types.optional(types.string, "doubleTapContents~~")
});

export type IDoubleTap = Instance<typeof DoubleTap>;
