// import * as React from "react";
// import { I18n } from "react-i18next";
// import i18n from "./i18n"; // initialized i18next instance using reactI18nextModule
// export class RenderPropStyle extends React.Component<any, any> {
//   public render() {
//     return (
//       <I18n>
//         {t => (
//           <div>
//             <h1>{t("appName")}</h1>
//             <button
//               // tslint:disable-next-line:jsx-no-lambda
//               onClick={() => {
//                 i18n.changeLanguage("de");
//               }}
//             >
//               {t("nav.linkDE")}
//             </button>
//             <button
//               // tslint:disable-next-line:jsx-no-lambda
//               onClick={() => {
//                 i18n.changeLanguage("en");
//               }}
//             >
//               {t("nav.linkEN")}
//             </button>
//             <a href="https://github.com/i18next/react-i18next" target="_blank">
//               {t("nav:link1")}
//             </a>
//           </div>
//         )}
//       </I18n>
//     );
//   }
// }

import * as React from "react";
import { I18n, Trans } from "react-i18next";
// import logo from './logo.svg';
// import './App.css';

class RenderPropStyle extends React.Component {
  public render() {
    const singular = 1;
    const plural = 5;
    const count = 3;
    const name = "Roniel??";
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div className="App">
            <div className="App-header">
              <h2>{t("title")}</h2>
              <h5>{t("Welcome to React")}</h5>
              {/*tslint:disable-next-line:jsx-no-lambda*/}
              <button onClick={() => i18n.changeLanguage("de")}>de</button>
              {/*tslint:disable-next-line:jsx-no-lambda*/}
              <button onClick={() => i18n.changeLanguage("en")}>en</button>
            </div>
            <div className="App-intro">
              <Trans i18nKey="description.part1">????????</Trans>
              <Trans>{`To get started edit srcAppjs and save to reload`}</Trans>
            </div>
            <div>
              <Trans>whatthe</Trans>
              <Trans>To get started edit and save to reload</Trans>
            </div>
            <div>
              <Trans
                i18nKey={
                  count > 1 ? "userMessagesUnread_plural" : "userMessagesUnread"
                }
              >
                Hello <strong title={t("nameTitle")}>{{ name }}</strong>, you
                have {{ count }} unread message.{" "}
              </Trans>
            </div>
            {/* <div>{t("description.part2")}</div> */}
          </div>
        )}
      </I18n>
    );
  }
}

export default RenderPropStyle;
