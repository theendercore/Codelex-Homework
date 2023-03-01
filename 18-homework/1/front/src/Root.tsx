import { Link, Outlet, RootRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

const rootRoute = new RootRoute({
  component: Root,
});

const langs: langDict = {
  en: { nativeName: "English" },
  lv: { nativeName: "Latviešu" },
};

function Root() {
  const { t, i18n } = useTranslation();
  return (
    <div className="Root bg-slate-900 text-slate-400">
      <div className="m-auto flex items-center justify-center gap-10 p-10 shadow-2xl">
        <Link to="/">{t("index.home")}</Link>
        <Link to="/game">{t("index.game")}</Link>
        <Link to="/scoreboard">{t("index.scores")}</Link>
        <div>
          {Object.keys(langs).map((lang) => (
            <button
              key={lang}
              style={{
                fontWeight: i18n.resolvedLanguage === lang ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lang)}
            >
              {langs[lang].nativeName}
            </button>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default rootRoute;
