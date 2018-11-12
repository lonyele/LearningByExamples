import { deviceList } from "../stores/device/DeviceStore";
import { selectedDevice } from "../stores/device/DeviceStore";
import { RootStore } from "./root";

const initialState = {
  devices: {
    devices: deviceList,
    selectedDevice
  }
};
export const store = RootStore.create(initialState);
