import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

// import { I18nextProvider } from "react-i18next";
// import i18n from "./i18n";
import chalk from "chalk";
import "./i18n";
import RenderPropStyle from "./RenderPropStyle";
console.log("%casfadfaf", "color: red;");
console.log(chalk.blue("Hello world!"));

ReactDOM.render(
  // <I18nextProvider i18n={i18n}>
  <RenderPropStyle />,
  // </I18nextProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
