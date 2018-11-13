import { Instance, types } from "mobx-state-tree";

import { DeviceStore } from "../stores/device/DeviceStore";
import { ObjectStore } from "../stores/object/ObjectStore";
import { TriggerStore } from "../stores/trigger/TriggerStore";

export const RootStore = types.model({
  devices: DeviceStore,
  objects: ObjectStore,
  triggers: TriggerStore
});

export type IRootStore = Instance<typeof RootStore>;
