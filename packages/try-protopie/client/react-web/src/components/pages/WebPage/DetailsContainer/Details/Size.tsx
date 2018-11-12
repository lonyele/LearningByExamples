import { observer } from "mobx-react";
import * as React from "react";
import { IObject } from "src/mobx-state-tree/stores/object/Object";
import styled from "styled-components";

export const SizeStyled = styled.div`
  display: flex;
  padding: 10px;
`;

@observer
export class Size extends React.Component<{ selectedObject: IObject }, any> {
  public render() {
    const {
      width,
      height,
      changeWidth,
      changeHeight
    } = this.props.selectedObject;
    return (
      <SizeStyled>
        <div style={{ width: "80px" }}>Size</div>
        <input
          style={{ marginLeft: "5px", width: "70px" }}
          value={width}
          onChange={(e: any) => {
            if (e.target.value.trim() === "") {
              changeWidth(0);
            } else {
              changeWidth(parseFloat(e.target.value));
            }
          }}
        />
        <input
          style={{ marginLeft: "5px", width: "70px" }}
          value={height}
          onChange={(e: any) => {
            if (e.target.value.trim() === "") {
              changeHeight(0);
            } else {
              changeHeight(parseFloat(e.target.value));
            }
          }}
        />
      </SizeStyled>
    );
  }
}
