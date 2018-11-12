import { Instance, types } from "mobx-state-tree";

import { DeviceStore } from "../stores/device/DeviceStore";
import { ObjectStore } from "../stores/object/ObjectStore";

export const RootStore = types.model({
  devices: DeviceStore,
  objects: ObjectStore
});

export type IRootStore = Instance<typeof RootStore>;
