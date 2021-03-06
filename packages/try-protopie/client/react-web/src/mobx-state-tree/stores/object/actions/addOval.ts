import * as cuid from "cuid";

import { Object } from "../Object";
import { ObjectType } from "../Object";

export const addOval = (self: any) => (what: any) => {
  self.objects.push(
    Object.create({
      id: cuid(),
      name: "Input Oval",
      x: 55,
      y: 66,
      width: 77,
      height: 88,
      object: {
        type: ObjectType.Oval,
        ovalContents: "what~~~~"
      }
    })
  );
};
