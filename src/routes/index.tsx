import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";

import audimaxProduct from "../assets/audimax-product.png";
import { audimaxCompleteStyles, getAudimaxCompleteHtml } from "../lib/audimaxCompleteHtml";
import { initializeAudimaxInteractions } from "../lib/audimaxInteractions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Audimax Pro — Pare o Zumbido, a Tontura e o Esquecimento Na Raiz" },
      {
        name: "description",
        content:
          "Protocolo líquido Audimax Pro para zumbido, tontura e clareza mental com garantia de 90 dias.",
      },
      {
        property: "og:title",
        content: "Audimax Pro — Pare o Zumbido, a Tontura e o Esquecimento Na Raiz",
      },
      {
        property: "og:description",
        content: "Reconquiste silêncio, equilíbrio e clareza com o protocolo líquido de tripla ação.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const pageRef = useRef<HTMLDivElement>(null);
  const html = useMemo(() => getAudimaxCompleteHtml(audimaxProduct), []);

  useEffect(() => {
    if (!pageRef.current) return undefined;

    return initializeAudimaxInteractions(pageRef.current);
  }, []);

  return (
    <>
      <style>{audimaxCompleteStyles}</style>
      <div ref={pageRef} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
