import React from "react"
import { useTranslation } from "react-i18next"

export function Main() {
    const { t } = useTranslation("Main")
    return <h1>{t("welcome")}</h1>
}
