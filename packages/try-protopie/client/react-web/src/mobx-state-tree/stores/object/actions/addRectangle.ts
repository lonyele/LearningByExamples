import * as cuid from "cuid";

import { Object } from "../Object";
import { ObjectType } from "../Object";

export const addRectangle = (self: any) => (what: any) => {
  self.objects.push(
    Object.create({
      id: cuid(),
      name: "Input Rectangle",
      x: 55,
      y: 66,
      width: 77,
      height: 88,
      object: {
        type: ObjectType.Rectangle,
        rectangleContents: "what~~~~"
      }
    })
  );
};
