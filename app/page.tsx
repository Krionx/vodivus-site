"use client";

import InjectedContentPage from "../components/ui/InjectedContentPage";
import {
  FOOTER_SCRIPT,
  HOME_HTML,
  HOME_SCRIPT,
} from "./homeContent";

const HOME_SCRIPTS = [HOME_SCRIPT, FOOTER_SCRIPT];

export default function HomePage() {
  return <InjectedContentPage as="div" html={HOME_HTML} scripts={HOME_SCRIPTS} />;
}