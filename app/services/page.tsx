
"use client";

import InjectedContentPage from "../../components/ui/InjectedContentPage";
import {
  FOOTER_SCRIPT,
  SERVICES_HTML,
  SERVICES_MODAL_SCRIPT,
} from "@/app/services/servicesContent";

const SERVICES_SCRIPTS = [SERVICES_MODAL_SCRIPT, FOOTER_SCRIPT];

export default function ServicesPage() {
  return (
    <div className="vv-global-header-gap-118">
      <InjectedContentPage html={SERVICES_HTML} scripts={SERVICES_SCRIPTS} />
    </div>
  );
}