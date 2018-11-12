import { deviceList } from "../stores/device/DeviceStore";
import { selectedDevice } from "../stores/device/DeviceStore";
import { objectList, selectedObjects } from "../stores/object/ObjectStore";
import { RootStore } from "./root";

const initialState = {
  devices: {
    devices: deviceList,
    selectedDevice
  },
  objects: {
    objects: objectList,
    selectedObjects
  }
};
export const store = RootStore.create(initialState);
