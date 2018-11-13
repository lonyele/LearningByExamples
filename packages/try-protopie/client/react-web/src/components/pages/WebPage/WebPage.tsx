import { observer } from "mobx-react";
import * as React from "react";

import { Header } from "src/components/organisms/Header";
import { ActionsContainer } from "./ActionsContainer/ActionsContainer";
import { AppbarContainer } from "./AppbarContainer/AppbarContainer";
import { CanvasContainer } from "./CanvasContainer.tsx/CanvasContainer";
import { DetailsContainer } from "./DetailsContainer/DetailsContainer";
import { GridContainer } from "./GridContainer/GridContainter.style";
import MenuContainer from "./MenuContainer/MenuContainer";
import ObjectContainer from "./ObjectContainer/ObjectContainer";
import { PreviewContainer } from "./PreviewContainer/PreviewContainer";
import { WebPage } from "./WebPage.style";
// export interface ILandingPageProps {
// }

@observer
export default class WebPageContainer extends React.Component<any, any> {
  public render() {
    return (
      <WebPage>
        <Header />
        <MenuContainer />
        <AppbarContainer store={this.props.store} />
        <GridContainer>
          <ObjectContainer objects={this.props.store.objects} />
          <CanvasContainer />
          <ActionsContainer />
          <DetailsContainer
            selectedObjects={this.props.store.objects.selectedObjects}
          />
          <PreviewContainer store={this.props.store} />
        </GridContainer>
      </WebPage>
    );
  }
}
