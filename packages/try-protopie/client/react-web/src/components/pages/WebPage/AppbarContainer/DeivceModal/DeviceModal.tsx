import { observer } from "mobx-react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Modal } from "office-ui-fabric-react/lib/Modal";
import * as React from "react";
// const { useState } = React;

import { DeviceType, IDevice } from "src/mobx-state-tree/stores/device/Device";
import { DeviceList } from "./DeviceList";
import { FooterButtons } from "./Footer";
import SelectDevice from "./SelectDevice";

@observer
export class DeviceModal extends React.Component<
  any,
  {
    showModal: boolean;
    selectedDeviceType: DeviceType;
    tempSelectedDevice: IDevice | undefined;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
      selectedDeviceType: DeviceType.IOS,
      tempSelectedDevice: undefined
    };
  }
  private setSelectedDeviceType = (deviceType: DeviceType) => (e: any) => {
    this.setState({ selectedDeviceType: deviceType });
  };
  private setTempSelectedDevice = (tempDevice: IDevice) => (e: any) => {
    this.setState({ tempSelectedDevice: tempDevice });
  };

  public render(): JSX.Element {
    const { devices } = this.props;
    const { selectedDeviceType, tempSelectedDevice } = this.state;
    const selectedDevice = devices.selectedDevice;
    return (
      <div style={{ margin: "auto", marginBottom: "12px" }}>
        <DefaultButton
          secondaryText="Opens the Sample Modal"
          onClick={this._showModal}
          text={`Device  ${selectedDevice.name} - ${selectedDevice.width} X ${
            selectedDevice.height
          } ${selectedDevice.extra}`}
          styles={{
            root: {
              backgroundColor: "white",
              borderRadius: "100px",
              border: "1px solid black"
            }
          }}
          onRenderText={() => (
            <div>
              <span>Device</span>
              <span style={{ marginLeft: "10px" }}>
                {selectedDevice.name} - {selectedDevice.width} X
                {selectedDevice.height} {selectedDevice.extra}
              </span>
            </div>
          )}
        />
        <Modal
          titleAriaId="titleId"
          subtitleAriaId="subtitleId"
          isOpen={this.state.showModal}
          onDismiss={this._closeModal}
          isBlocking={false}
          styles={{
            main: {
              width: "320px",
              height: "410px"
            },
            scrollableContent: {
              display: "flex",
              flexDirection: "column"
            }
          }}
        >
          <div
            style={{
              padding: "15px",
              alignSelf: "center",
              fontSize: "20px"
            }}
          >
            Select Device
          </div>

          <SelectDevice
            selectedDeviceType={selectedDeviceType}
            setSelectedDeviceType={this.setSelectedDeviceType}
          />
          <DeviceList
            devices={devices.getDevicesByType(selectedDeviceType)}
            selectedDevice={selectedDevice}
            tempSelectedDevice={tempSelectedDevice}
            setTempSelectedDevice={this.setTempSelectedDevice}
          />
          <FooterButtons
            _closeModal={this._closeModal}
            tempSelectedDevice={tempSelectedDevice}
            changeSelectedDevice={devices.changeSelectedDevice}
          />
        </Modal>
      </div>
    );
  }

  private _showModal = (): void => {
    this.setState({ showModal: true });
  };

  private _closeModal = (): void => {
    this.setState({ showModal: false });
  };
}
