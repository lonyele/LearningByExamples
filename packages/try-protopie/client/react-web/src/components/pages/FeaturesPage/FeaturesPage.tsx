import * as React from "react";

import { Footer } from "src/components/organisms/Footer";
import { Header } from "src/components/organisms/Header";
import { FeaturesPage } from "./styles/FeaturesPage.style";
// export interface ILandingPageProps {
// }

export default class FeaturesPageContainer extends React.Component<any, any> {
  public render() {
    return (
      <FeaturesPage>
        <Header />
        <div>FeaturesPage</div>
        <section>Feature~~~~</section>
        <Footer />
      </FeaturesPage>
    );
  }
}
