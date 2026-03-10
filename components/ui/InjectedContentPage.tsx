"use client";

import { useEffect } from "react";

type InjectedContentPageProps = {
  html: string;
  scripts: string[];
  as?: "main" | "div";
};

export default function InjectedContentPage({
  html,
  scripts,
  as = "main",
}: InjectedContentPageProps) {
  useEffect(() => {
    const createdScripts = scripts.map((code) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = code;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      createdScripts.forEach((script) => {
        script.remove();
      });
    };
  }, [scripts]);

  if (as === "div") {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <main dangerouslySetInnerHTML={{ __html: html }} />;
}
