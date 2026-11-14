import { useEffect, useRef } from "react";
import { ESQUEMAS } from "@/lib/esquemasHtml";

// Each scheme is a fixed 1920x1080 board; it is scaled to the width of its frame.
function Frame({ html }: { html: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const board = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      if (frame.current && board.current) board.current.style.transform = `scale(${frame.current.clientWidth / 1920})`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    if (frame.current) observer.observe(frame.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frame}
      className="relative w-full overflow-hidden rounded-2xl border border-border shadow-sm"
      style={{ aspectRatio: "16 / 9", background: "#F3F5F8", ["--human" as string]: "#B4470A", ["--agent" as string]: "#1D5FB8" }}
    >
      <div
        ref={board}
        style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transformOrigin: "0 0", fontFamily: "Inter, sans-serif" }}
        // Static, authored schemes shipped with the site: not user input.
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export function Esquemas({ language }: { language: "en" | "es" }) {
  return (
    <div className="space-y-14">
      {language === "en" && (
        <p className="rounded-md border border-border bg-muted/50 px-5 py-4 text-sm text-muted-foreground">
          The schemes are written in Spanish. Orange: you do it. Blue: the agent does it. Solid border: human. Dashed border: agent.
        </p>
      )}
      {language === "es" && (
        <p className="rounded-md border border-border bg-muted/50 px-5 py-4 text-sm text-muted-foreground">
          Naranja: lo haces tú. Azul: lo hace el agente. Borde sólido: humano. Borde punteado: agente.
        </p>
      )}
      {ESQUEMAS.map((e) => (
        <section key={e.id} aria-labelledby={e.id}>
          <h2 id={e.id} className="mb-4 text-2xl font-semibold tracking-tight">{e.title}</h2>
          <Frame html={e.html} />
        </section>
      ))}
    </div>
  );
}
