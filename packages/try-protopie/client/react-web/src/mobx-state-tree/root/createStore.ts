import { deviceList } from "../stores/device/DeviceStore";
import { selectedDevice } from "../stores/device/DeviceStore";
import { objectList, selectedObjectIds } from "../stores/object/ObjectStore";
import { triggerList } from "../stores/trigger/TriggerStore";
import { RootStore } from "./root";

const initialState = {
  devices: {
    devices: deviceList,
    selectedDevice
  },
  objects: {
    objects: objectList,
    selectedObjectIds
  },
  triggers: {
    triggers: triggerList
  }
};
export const store = RootStore.create(initialState);
