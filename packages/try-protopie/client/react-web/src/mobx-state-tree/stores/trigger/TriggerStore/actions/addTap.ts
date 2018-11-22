import * as cuid from "cuid";

import { Tap } from "../../Tap/Tap";
import { TriggerType } from "../../Trigger";

export const addTap = (self: any) => (defaultValue: any) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.Tap,
    trigger: Tap.create({
      type: TriggerType.Tap,
      layer: "~~~~",
      tapContents: "tap specific content~~~~~!@~!@~!@@@"
    })
  });
  console.log(
    "여기서 만들어짐~~~ Tap 마지막꺼",
    self.triggers[self.triggers.length - 1].trigger
  );
};
