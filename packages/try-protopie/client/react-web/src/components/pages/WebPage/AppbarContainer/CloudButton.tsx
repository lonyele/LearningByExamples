import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as React from "react";

import styled from "styled-components";

const StyledCloudButton = styled.div`
  width: 300px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export class CloudButton extends React.Component<any, any> {
  public render() {
    return (
      <DefaultButton
        id="CloudButton"
        text="Cloud"
        style={{
          height: "40px",
          width: "40px",
          minWidth: "40px",
          backgroundColor: "white"
        }}
        iconProps={{ iconName: "Cloud" }}
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
              <StyledCloudButton>
                <div style={{ margin: "auto" }}>
                  <h3>Pie hasn't been uploaded to Cloud</h3>
                  <div>Uplaod to Cloud to get a sharable link and</div>
                  <div>manage you Pies in the Cloud.</div>
                </div>
                <div style={{ height: "50px" }}>Go to Cloud</div>
              </StyledCloudButton>
            </div>
          </div>
        )}
      />
    );
  }
}
