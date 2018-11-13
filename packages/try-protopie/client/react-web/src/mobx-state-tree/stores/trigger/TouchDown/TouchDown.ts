import { Instance, types } from "mobx-state-tree";
// import { TriggerType } from "../Trigger";

export const TouchDown = types.model({
  type: "TouchDown",
  // type: TriggerType.TouchDown,
  // 이거 reference로 Object 바로 걸면 될거 같은데 잠시 보류
  // layer: "layer~~", // types.optional(types.string, "layer~~"),
  // touchDownContents: "touchDownContents~~" // types.optional(types.string, "touchDownContents~~")
  layer: types.optional(types.string, "layer~~"),
  touchDownContents: types.optional(types.string, "touchDownContents~~")
});

export type ITouchDown = Instance<typeof TouchDown>;
