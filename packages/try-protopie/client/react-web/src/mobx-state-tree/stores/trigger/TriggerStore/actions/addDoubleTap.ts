import * as cuid from "cuid";

import { DoubleTap } from "../../DoubleTap/DoubleTap";
import { TriggerType } from "../../Trigger";

export const addDoubleTap = (self: any) => (what: any) => {
  self.triggers.push({
    id: cuid(),
    name: TriggerType.DoubleTap,
    trigger: DoubleTap.create({
      type: TriggerType.DoubleTap,
      layer: "~~~~",
      doubleTapContents: "DoubleTap specific content~~~~~!@~!@~!@@@"
    })
  });
  console.log(
    "여기서 만들어짐~~~ DoubleTap 마지막꺼",
    self.triggers[self.triggers.length - 1].trigger
  );
};
