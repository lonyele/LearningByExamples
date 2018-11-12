import { Instance, types } from "mobx-state-tree";

import { DeviceStore } from "../stores/device/DeviceStore";

export const RootStore = types.model({
  devices: DeviceStore
});

export type IRootStore = Instance<typeof RootStore>;
