import { observer } from "mobx-react";
import * as React from "react";
import { IObject } from "src/mobx-state-tree/stores/object/Object";
import styled from "styled-components";

export const PositionStyled = styled.div`
  display: flex;
  padding: 10px;
`;

@observer
export class Position extends React.Component<
  { selectedObject: IObject },
  any
> {
  public render() {
    const { x, y, changeX, changeY } = this.props.selectedObject;
    return (
      <PositionStyled>
        <div>Position</div>
        <input
          style={{ marginLeft: "5px", width: "70px" }}
          value={x}
          onChange={(e: any) => {
            if (e.target.value.trim() === "") {
              changeX(0);
            } else {
              changeX(parseFloat(e.target.value));
            }
          }}
        />
        <input
          style={{ marginLeft: "5px", width: "70px" }}
          value={y}
          onChange={(e: any) => {
            if (e.target.value.trim() === "") {
              changeX(0);
            } else {
              changeY(parseFloat(e.target.value));
            }
          }}
        />
      </PositionStyled>
    );
  }
}
