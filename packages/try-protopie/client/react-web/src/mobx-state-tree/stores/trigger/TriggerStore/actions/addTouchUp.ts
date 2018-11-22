import * as cuid from "cuid";

import { TouchUp } from "../../TouchUp/TouchUp";
import { TriggerType } from "../../Trigger";

export const addTouchUp = (self: any) => (what: any) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.TouchUp,
    trigger: TouchUp.create({
      type: TriggerType.TouchUp,
      layer: "~~~~",
      touchUpContents: "TouchUp specific content~~~~~!@~!@~!@@@"
    })
  });
  console.log("여기서 만들어짐~~~ TouchUp 마지막꺼", self.triggers);
};
