import { TriggerType } from "../../Trigger";

import * as cuid from "cuid";
import { ITriggerStore } from "../../TriggerStore";

export const addTrigger = (self: any) => (triggerType: TriggerType) => {
  switch (triggerType) {
    case TriggerType.Tap:
      return addTap(self);
    case TriggerType.DoubleTap:
      return addDoubleTap(self);
    case TriggerType.TouchDown:
      return addTouchDown(self);
    case TriggerType.TouchUp:
      return addTouchUp(self);
    default:
      return;
  }
};

const addTap = (self: ITriggerStore) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.Tap,
    trigger: {
      type: TriggerType.Tap,
      layer: "~~~~",
      tapContents: "tap specific content~~~~~!@~!@~!@@@"
    }
  });
  console.log(
    "여기서 만들어짐~~~ Tap 마지막꺼",
    self.triggers[self.triggers.length - 1].trigger
  );
};

const addDoubleTap = (self: ITriggerStore) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.DoubleTap,
    trigger: {
      type: TriggerType.DoubleTap,
      layer: "~~~~",
      doubleTapContents: "DoubleTap specific content~~~~~!@~!@~!@@@"
    }
  });
  console.log(
    "여기서 만들어짐~~~ DoubleTap 마지막꺼",
    self.triggers[self.triggers.length - 1].trigger
  );
};

const addTouchDown = (self: ITriggerStore) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.TouchDown,
    trigger: {
      type: TriggerType.TouchDown,
      layer: "~~~~",
      touchDownContents: "TouchDown specific content~~~~~!@~!@~!@@@"
    }
  });
  console.log(
    "여기서 만들어짐~~~ TouchDown 마지막꺼",
    self.triggers[self.triggers.length - 1].trigger
  );
};

const addTouchUp = (self: ITriggerStore) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.TouchUp,
    trigger: {
      type: TriggerType.TouchUp,
      layer: "~~~~",
      touchUpContents: "TouchUp specific content~~~~~!@~!@~!@@@"
    }
  });
  console.log("여기서 만들어짐~~~ TouchUp 마지막꺼", self.triggers);
};
