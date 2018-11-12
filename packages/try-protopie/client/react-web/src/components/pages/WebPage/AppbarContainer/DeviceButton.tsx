import IOS from "images/Download_on_the_App_Store_Badge.svg";
import Android from "images/en_badge_web_generic.png";
import QR_code_Wikipedia from "images/QR_code_Wikipedia.png";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

import styled from "styled-components";

const StyledDeviceButton = styled.div`
  width: 300px;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px;
  background-color: white;
  display: grid;
  grid-template-areas:
    "QRCode QRCode"
    "Text Text"
    "Android IOS";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 250px 60px 60px;
`;

export class DeviceButton extends React.Component<any, any> {
  public render() {
    return (
      <DefaultButton
        id="DeviceButton"
        text="Device"
        style={{
          height: "40px",
          width: "40px",
          minWidth: "40px",
          backgroundColor: "white",
          marginRight: "5px"
        }}
        iconProps={{ iconName: "CellPhone" }}
        styles={{
          icon: {
            fontSize: "30px",
            height: "30px",
            marginTop: "10px",
            marginBottom: "-7px"
          },
          menuIcon: { display: "none" },
          flexContainer: { flexDirection: "column" },
          textContainer: { fontSize: "10px" }
        }}
        menuProps={{
          items: []
        }}
        menuAs={() => (
          <div style={{ display: "flex" }}>
            <div>
              <StyledDeviceButton>
                <div style={{ gridArea: "QRCode" }}>
                  <img src={QR_code_Wikipedia} width="200px" height="200px" />
                  <div style={{ fontSize: "20px" }}>Your IP Address</div>
                  <div style={{ fontSize: "15px" }}>127.0.0.1</div>
                </div>
                <div
                  style={{
                    gridArea: "Text",
                    fontSize: "18px",
                    alignSelf: "center"
                  }}
                >
                  Run Your Pie in Protopie Player
                </div>
                <div
                  style={{
                    gridArea: "Android",
                    width: "100%",
                    backgroundColor: "black"
                  }}
                >
                  <img
                    src={Android}
                    style={{
                      width: "100%"
                    }}
                  />
                </div>

                <div
                  style={{
                    gridArea: "IOS",
                    width: "100%",
                    backgroundColor: "black",
                    display: "flex"
                  }}
                >
                  <img
                    src={IOS}
                    style={{ gridArea: "IOS", width: "90%", margin: "auto" }}
                  />
                </div>
              </StyledDeviceButton>
            </div>
          </div>
        )}
      />
    );
  }
}
