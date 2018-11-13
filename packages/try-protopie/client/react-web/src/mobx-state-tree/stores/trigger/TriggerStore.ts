import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

import { Trigger, TriggerType } from "./Trigger";

export const icons = {
  [TriggerType.Tap]: "FontColorA",
  [TriggerType.DoubleTap]: "TextField",
  [TriggerType.TouchDown]: "RectangleShapeSolid",
  [TriggerType.TouchUp]: "Record2"
};
const randomString = cuid();
export const triggerList = [
  {
    id: randomString,
    name: "Tap Trigger~",
    trigger: {
      type: TriggerType.Tap,
      layer: "",
      tapContents: "Tap Specific Contents"
    }
  },
  {
    id: cuid(),
    name: "DoubleTap Trigger~",
    trigger: {
      type: TriggerType.DoubleTap,
      layer: "",
      doubleTapContents: "DoubleTap Specific Contents"
    }
  },
  {
    id: cuid(),
    name: "TouchDouwn Trigger~",
    trigger: {
      type: TriggerType.TouchDown,
      layer: "",
      touchDownContents: "TouchDouwn Specific Contents"
    }
  },
  {
    id: cuid(),
    name: "TouchUp Trigger~",
    trigger: {
      type: TriggerType.TouchUp,
      layer: "",
      touchUpContents: "TouchUp Specific Contents"
    }
  }
];

export const TriggerStore = types
  .model({
    triggers: types.array(Trigger)
  })
  .views(self => ({}))
  .actions(self => ({
    addTrigger(triggerType: TriggerType) {
      console.log("addTrigger", triggerType);
      const what = Trigger.create({
        id: cuid(),
        name: triggerType,
        trigger: {
          type: triggerType
        }
      });
      self.triggers.push(what);
      console.log(self.triggers);
    }
  }));

export type ITriggerStore = Instance<typeof TriggerStore>;
