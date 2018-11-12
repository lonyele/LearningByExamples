import { observer } from "mobx-react";
import * as React from "react";
import { DeviceType } from "src/mobx-state-tree/stores/device/Device";

const deviceTypes = [DeviceType.IOS, DeviceType.Android, DeviceType.Desktop];

@observer
export default class SelectDevice extends React.Component<any, any> {
  public render() {
    const { selectedDeviceType, setSelectedDeviceType } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "15px",
          borderTop: "1px solid black",
          borderBottom: "1px solid black"
        }}
      >
        {deviceTypes.map((deviceType: DeviceType) => {
          if (deviceType === selectedDeviceType) {
            return (
              <div
                key={deviceType}
                onClick={setSelectedDeviceType(deviceType)}
                style={{ fontWeight: "bold" }}
              >
                {deviceType}
              </div>
            );
          }
          return (
            <div key={deviceType} onClick={setSelectedDeviceType(deviceType)}>
              {deviceType}
            </div>
          );
        })}
      </div>
    );
  }
}
