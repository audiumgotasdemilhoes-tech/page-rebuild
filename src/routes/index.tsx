import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return undefined;
    if (!pageRef.current) return undefined;

    return initializeAudimaxInteractions(pageRef.current);
  }, [isMounted]);

  return (
    <>
      <style>{audimaxCompleteStyles}</style>
      {isMounted ? <div ref={pageRef} dangerouslySetInnerHTML={{ __html: html }} /> : null}
    </>
  );
}
