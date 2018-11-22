import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

import { Trigger, TriggerType } from "./Trigger";
import { addDoubleTap } from "./TriggerStore/actions/addDoubleTap";
import { addTap } from "./TriggerStore/actions/addTap";
import { addTouchDown } from "./TriggerStore/actions/addTouchDown";
import { addTouchUp } from "./TriggerStore/actions/addTouchUp";
// import { addTrigger } from "./TriggerStore/actions/addTrigger";

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
    // addTrigger: addTrigger(self),
    addTap: addTap(self),
    addDoubleTap: addDoubleTap(self),
    addTouchDown: addTouchDown(self),
    addTouchUp: addTouchUp(self)
  }));

export type ITriggerStore = Instance<typeof TriggerStore>;
