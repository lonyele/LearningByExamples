import * as cuid from "cuid";

import { TouchDown } from "../../TouchDown/TouchDown";
import { TriggerType } from "../../Trigger";

export const addTouchDown = (self: any) => (what: any) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.TouchDown,
    trigger: TouchDown.create({
      type: TriggerType.TouchDown,
      layer: "~~~~",
      touchDownContents: "TouchDown specific content~~~~~!@~!@~!@@@"
    })
  });
  console.log(
    "여기서 만들어짐~~~ TouchDown 마지막꺼",
    self.triggers[self.triggers.length - 1].trigger
  );
};
