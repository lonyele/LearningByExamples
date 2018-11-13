import { observer } from "mobx-react";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";
import { IObject } from "src/mobx-state-tree/stores/object/Object";
import { icons } from "src/mobx-state-tree/stores/object/ObjectStore";
import styled from "styled-components";

export const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

@observer
export class Title extends React.Component<{ selectedObject: IObject }, any> {
  public render() {
    const { name, object } = this.props.selectedObject;
    return (
      <TitleStyled>
        <Icon
          iconName={icons[object.type]}
          style={{
            fontSize: "20px",
            alignSelf: "center"
          }}
        />
        <div style={{ marginLeft: "10px" }}>{name}</div>
      </TitleStyled>
    );
  }
}
