import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

export class FooterButtons extends React.Component<any, any> {
  public render() {
    const {
      _closeModal,
      tempSelectedDevice,
      changeSelectedDevice
    } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          marginTop: "auto",
          borderTop: "1px solid black"
        }}
      >
        <DefaultButton onClick={_closeModal} text="CANCEL" />
        <DefaultButton
          onClick={() => {
            if (tempSelectedDevice !== undefined) {
              changeSelectedDevice(tempSelectedDevice);
            }
            _closeModal();
          }}
          text="OK"
        />
      </div>
    );
  }
}
