import { Instance, types } from "mobx-state-tree";
import { DoubleTap } from "./DoubleTap/DoubleTap";
import { Tap } from "./Tap/Tap";
import { TouchDown } from "./TouchDown/TouchDown";
import { TouchUp } from "./TouchUp/TouchUp";

export enum TriggerType {
  Tap = "Tap",
  DoubleTap = "DoubleTap",
  TouchDown = "TouchDown",
  TouchUp = "TouchUp"
}

export const Trigger = types.model({
  id: types.string,
  name: types.string,
  trigger: types.union(Tap, DoubleTap, TouchDown, TouchUp)
});
// .actions(self => ({
//   changeName(newName: string) {
//     self.name = newName;
//   },
//   changeX(newX: number) {
//     self.x = newX;
//   },
//   changeY(newY: number) {
//     self.y = newY;
//   },
//   changeWidth(newWidth: number) {
//     self.width = newWidth;
//   },
//   changeHeight(newHeight: number) {
//     self.height = newHeight;
//   }
// }));

export type ITrigger = Instance<typeof Trigger>;
