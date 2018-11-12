import { observer } from "mobx-react";
import * as React from "react";
import { IDevice } from "src/mobx-state-tree/stores/device/Device";

@observer
export class DeviceList extends React.Component<any, any> {
  public render() {
    const {
      selectedDevice,
      devices,
      tempSelectedDevice,
      setTempSelectedDevice
    } = this.props;
    return (
      <div
        style={{
          height: "220px"
        }}
      >
        {devices.map((device: IDevice) => {
          const { name, width, height, extra } = device;
          if (selectedDevice.name === name) {
            return (
              <div
                key={name}
                style={{
                  fontWeight: "bold",
                  padding: "10px",
                  paddingLeft: "30px"
                }}
              >
                {name} - {width} X {height} {extra}
              </div>
            );
          }
          return (
            <div
              key={name}
              style={{
                padding: "10px",
                paddingLeft: "30px",
                backgroundColor:
                  tempSelectedDevice && tempSelectedDevice.name === name
                    ? "rgb(244, 244, 244)"
                    : "inherit"
              }}
              onClick={setTempSelectedDevice(device)}
            >
              {name} - {width} X {height} {extra}
            </div>
          );
        })}
      </div>
    );
  }
}
