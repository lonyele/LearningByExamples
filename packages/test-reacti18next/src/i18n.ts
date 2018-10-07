// import * as i18n from "i18next";
// import * as LanguageDetector from "i18next-browser-languagedetector";

// i18n.use(LanguageDetector).init({
//   // we init with resources
//   resources: {
//     en: {
//       translations: {
//         "To get started, edit <1>src/App.js</1> and save to reload.":
//           "To get started, edit <1>src/App.js</1> and save to reload.",
//         "Welcome to React": "Welcome to React and react-i18next"
//       }
//     },
//     // tslint:disable-next-line:object-literal-sort-keys
//     de: {
//       translations: {
//         "To get started, edit <1>src/App.js</1> and save to reload.":
//           "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
//         "Welcome to React": "Willkommen bei React und react-i18next"
//       }
//     }
//   },
//   // tslint:disable-next-line:object-literal-sort-keys
//   fallbackLng: "en",
//   debug: true,

//   // have a common namespace used around the full app
//   ns: ["translations"],
//   defaultNS: "translations",

//   keySeparator: false, // we use content as keys

//   interpolation: {
//     escapeValue: false, // not needed for react!!
//     formatSeparator: ","
//   },

//   react: {
//     wait: true
//   }
// });

// export default i18n;

// export const what = () => {
//   // tslint:disable-next-line:no-console
//   console.log("휴....");
// };

import * as i18n from "i18next";
import * as LanguageDetector from "i18next-browser-languagedetector";
import * as Backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",

    // have a common namespace used around the full app
    ns: ["translations", "whatup", "yoman"],
    // tslint:disable-next-line:object-literal-sort-keys
    defaultNS: "translations",

    debug: true,

    interpolation: {
      escapeValue: false // not needed for react!!
    },
    resources: {
      en: {
        translations: {
          "To get started edit srcAppjs and save to reload":
            "영어 왜 안되 이거",
          "Welcome to React": "Welcome to React and react-i18next",
          title: "이거는 영어의 title",
          // tslint:disable-next-line:object-literal-sort-keys
          description: {
            part1: "영어?????"
          },
          whatthe: "영어 whatthe?",
          "To get started edit and save to reload":
            "영어 아마 CODE 때문인거 같은데...",
          userMessagesUnread:
            "영어 단수! Hello <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread message. <5>Go to message</5>.",
          userMessagesUnread_plural:
            " 영어 복수! Hello <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread messages.  <5>Go to messages</5>.",
          nameTitle: "영어 nameTitle"
        }
      },
      // tslint:disable-next-line:object-literal-sort-keys
      de: {
        translations: {
          "To get started edit srcAppjs and save to reload":
            "독일어 Starte in dem du",
          "Welcome to React": "Willkommen bei React und react-i18next",
          title: "이거는 독일어의 title",
          // tslint:disable-next-line:object-literal-sort-keys
          description: {
            part1: "독일어?????"
          },
          whatthe: "독일어 whatthe?",
          "To get started edit and save to reload":
            "독일어 아마 CODE 때문인거 같은데...",
          userMessagesUnread:
            "독일어 단수! Hello <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread message. <5>Go to message</5>.",
          userMessagesUnread_plural:
            "독일어 복수! Hello <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread messages.  <5>Go to messages</5>.",
          nameTitle: "독일어 nameTitle"
        }
      }
    },
    react: {
      wait: true
    }
  });

export default i18n;
