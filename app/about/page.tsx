"use client";

import InjectedContentPage from "../../components/ui/InjectedContentPage";
import {
  ABOUT_HTML,
  ABOUT_TEAM_SCRIPT,
  FOOTER_SCRIPT,
} from "./aboutContent";

const ABOUT_SCRIPTS = [ABOUT_TEAM_SCRIPT, FOOTER_SCRIPT];

export default function AboutPage() {
  return (
    <div className="vv-global-header-gap-118">
      <InjectedContentPage html={ABOUT_HTML} scripts={ABOUT_SCRIPTS} />
    </div>
  );
}