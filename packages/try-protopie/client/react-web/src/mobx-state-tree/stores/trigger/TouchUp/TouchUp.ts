import { Instance, types } from "mobx-state-tree";
// import { TriggerType } from "../Trigger";

export const TouchUp = types.model({
  type: "TouchUp",
  // type: TriggerType.TouchUp.valueOf(),
  // 이거 reference로 Object 바로 걸면 될거 같은데 잠시 보류
  layer: types.optional(types.string, "layer~~"), // "layer~~", // types.optional(types.string, "layer~~"),
  touchUpContents: types.optional(types.string, "touchUpContents~~") // "touchUpContents~~" // types.optional(types.string, "touchUpContents~~")
});

export type ITouchUp = Instance<typeof TouchUp>;
