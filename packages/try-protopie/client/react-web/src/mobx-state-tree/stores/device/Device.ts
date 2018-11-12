import { Instance, types } from "mobx-state-tree";

export enum DeviceType {
  IOS = "IOS",
  Android = "Android",
  Desktop = "Desktop"
}

export const Device = types.model({
  type: types.enumeration<DeviceType>("DeviceType", [
    DeviceType.IOS,
    DeviceType.Android,
    DeviceType.Desktop
  ]),
  name: types.string,
  width: types.integer,
  height: types.integer,
  extra: types.string,
  iconName: types.string
});

export type IDevice = Instance<typeof Device>;
