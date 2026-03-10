"use client";

import InjectedContentPage from "../../components/ui/InjectedContentPage";
import {
  CONTACT_HTML,
  CONTACT_SCRIPT,
  FOOTER_SCRIPT,
} from "@/app/contact/contactContent";

const CONTACT_SCRIPTS = [CONTACT_SCRIPT, FOOTER_SCRIPT];

export default function ContactPage() {
  return (
    <div className="vv-global-header-gap-118">
      <InjectedContentPage html={CONTACT_HTML} scripts={CONTACT_SCRIPTS} />
    </div>
  );
}