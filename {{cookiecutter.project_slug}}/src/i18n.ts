import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import * as resources from "../locale"

i18next
    // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-xhr-backend
    //.use(XHRBackend)

    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    //.use(LanguageDetector)

    // pass the i18n instance to react-i18next.
    .use(initReactI18next)

    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: "en",
        debug: true,
        resources,
        returnNull: false,
        returnObjects: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default },
        },
        lng: "en",
    })

export default i18next
