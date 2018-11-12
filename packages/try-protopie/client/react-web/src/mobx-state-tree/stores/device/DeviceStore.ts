import { Instance, types } from "mobx-state-tree";

import { Device, IDevice } from "./Device";
import { DeviceType } from "./Device";

export const deviceList = [
  {
    type: DeviceType.IOS,
    name: "iPhone X",
    width: 375,
    height: 812,
    extra: "@3x",
    iconName: "iphone"
  },
  {
    type: DeviceType.IOS,
    name: "iPhone 8",
    width: 375,
    height: 667,
    extra: "@2x",
    iconName: "iphone"
  },
  {
    type: DeviceType.IOS,
    name: "iPhone 8 Plus",
    width: 414,
    height: 736,
    extra: "@3x",
    iconName: "iphone"
  },
  {
    type: DeviceType.IOS,
    name: "iPhone SE",
    width: 320,
    height: 568,
    extra: "@3x",
    iconName: "iphone"
  },
  {
    type: DeviceType.Android,
    name: "Galaxy S8",
    width: 360,
    height: 740,
    extra: "@4x",
    iconName: "android"
  },
  {
    type: DeviceType.Android,
    name: "Galaxy S7",
    width: 360,
    height: 640,
    extra: "@4x",
    iconName: "android"
  },
  {
    type: DeviceType.Android,
    name: "Galaxy Note 5",
    width: 360,
    height: 640,
    extra: "@4x",
    iconName: "android"
  },
  {
    type: DeviceType.Android,
    name: "Galaxy Pixel 2",
    width: 411,
    height: 731,
    extra: "@2.6x",
    iconName: "android"
  },
  {
    type: DeviceType.Desktop,
    name: "Desktop",
    width: 1280,
    height: 1024,
    extra: "@1x",
    iconName: "desktop"
  },
  {
    type: DeviceType.Desktop,
    name: "Desktop HD",
    width: 1440,
    height: 1024,
    extra: "@1x",
    iconName: "desktop"
  },
  {
    type: DeviceType.Desktop,
    name: "HD 720p",
    width: 1280,
    height: 720,
    extra: "@1x",
    iconName: "desktop"
  },
  {
    type: DeviceType.Desktop,
    name: "HD 1080p",
    width: 1920,
    height: 1080,
    extra: "@1x",
    iconName: "desktop"
  }
];

export const selectedDevice = {
  type: DeviceType.IOS,
  name: "iPhone X",
  width: 375,
  height: 812,
  extra: "@3x",
  iconName: "iphone"
};

export const DeviceStore = types
  .model({
    devices: types.array(Device),
    selectedDevice: Device
  })
  .views(self => ({
    getDevicesByType(deviceType: DeviceType) {
      return self.devices.filter(
        (device: IDevice) => device.type === deviceType
      );
    }
  }))
  .actions(self => ({
    changeSelectedDevice(newSelectedDevice: IDevice) {
      const { type, name, width, height, extra, iconName } = newSelectedDevice;
      self.selectedDevice = Device.create({
        type,
        name,
        width,
        height,
        extra,
        iconName
      });
    }
  }));

export type IDeviceStore = Instance<typeof DeviceStore>;
