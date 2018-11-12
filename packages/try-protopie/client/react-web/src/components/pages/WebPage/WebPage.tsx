import * as React from "react";

import { Header } from "src/components/organisms/Header";
import { ActionsContainer } from "./ActionsContainer/ActionsContainer";
import { AppbarContainer } from "./AppbarContainer/AppbarContainer";
import { CanvasContainer } from "./CanvasContainer.tsx/CanvasContainer";
import { DetailsContainer } from "./DetailsContainer/DetailsContainer";
import { GridContainer } from "./GridContainer/GridContainter.style";
import LayerContainer from "./LayerContainer/LayerContainer";
import MenuContainer from "./MenuContainer/MenuContainer";
import { PreviewContainer } from "./PreviewContainer/PreviewContainer";
import { WebPage } from "./WebPage.style";
// export interface ILandingPageProps {
// }

export default class WebPageContainer extends React.Component<any, any> {
  public render() {
    return (
      <WebPage>
        <Header />
        <MenuContainer />
        <AppbarContainer />
        <GridContainer>
          <LayerContainer />
          <CanvasContainer />
          <ActionsContainer />
          <DetailsContainer />
          <PreviewContainer />
        </GridContainer>
      </WebPage>
    );
  }
}
