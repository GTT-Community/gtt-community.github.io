import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, FolderTree, Layers3, Users } from "lucide-react";
import { internalSlug, linkify } from "@/components/linkify";
import { methodologyContent } from "@/components/MethodologySection";
import { METHODOLOGY_SECTION_MARKER } from "@/lib/gttContent";

type Language = "en" | "es";

type Block =
  | { kind: "text"; lines: string[] }
  | { kind: "callout"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; rows: string[][] }
  | { kind: "actions"; items: { label: string; slug: string }[] }
  | { kind: "workspace" };

// One heading of the page copy with what sits under it: "##" phases hold "###" topics, which hold "####" cards.
type Node = { title: string; blocks: Block[]; children: Node[] };

const labels = {
  en: {
    where: "Where are you?",
    whereText:
      "Find the phase you are in and continue from there. Each step says who acts.",
    legend: "A dark label marks a step that only you can do.",
    phase: "Phase",
    step: "Step",
    steps: "Steps",
    reference: "Context",
    tree: "Example workspace structure",
  },
  es: {
    where: "¿En qué fase estás?",
    whereText:
      "Ubica la fase en la que estás y continúa desde ahí. Cada paso indica quién actúa.",
    legend: "La etiqueta oscura marca un paso que solo tú puedes hacer.",
    phase: "Fase",
    step: "Paso",
    steps: "Pasos",
    reference: "Contexto",
    tree: "Ejemplo de estructura del workspace",
  },
};

// The one type scale and panel treatment every part of the guide uses.
const EYEBROW =
  "text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground";
const H3 = "text-xl font-semibold tracking-tight";
const BODY = "max-w-3xl leading-relaxed text-muted-foreground";
const SMALL = "text-sm leading-relaxed text-muted-foreground";
const FINE = "text-xs leading-relaxed text-muted-foreground";
const PANEL = "rounded-md border border-border";
const CALLOUT =
  "max-w-3xl rounded-md border-l-2 border-foreground bg-muted/50 px-4 py-3 text-sm font-medium leading-relaxed";
const INDEX = "font-mono text-xs text-muted-foreground";

const ACTION_PATTERN = /^(.+): (https?:\/\/\S+)$/;
const LABEL_PATTERN = /^([^:.?!]{2,30}): (.+)$/;
const HUMAN_PATTERN = /^(user|usuario)$/i;

function parseBlock(text: string): Block {
  if (text === METHODOLOGY_SECTION_MARKER) return { kind: "workspace" };
  if (text.startsWith(">"))
    return { kind: "callout", text: text.replace(/^>\s*/, "") };
  if (text.startsWith("|")) {
    const rows = text
      .split("\n")
      .filter((line) => !line.includes("---"))
      .slice(1) // the header row; the guide labels its columns by layout instead
      .map((line) =>
        line
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean),
      );
    return { kind: "steps", rows };
  }
  if (text.startsWith("-"))
    return {
      kind: "list",
      items: text.split("\n").map((line) => line.replace(/^-\s*/, "")),
    };

  // "Label: https://gtt-method.org/page/" on its own is the next thing to do, so it becomes a button.
  const [, label, url] = text.match(ACTION_PATTERN) ?? [];
  const slug = url ? internalSlug(url) : undefined;
  if (label && slug) return { kind: "actions", items: [{ label, slug }] };

  return { kind: "text", lines: text.split("\n") };
}

function parseGuide(content: string) {
  const root: Node = { title: "", blocks: [], children: [] };
  const open: Node[] = [root];

  for (const paragraph of content.split("\n\n")) {
    const text = paragraph.trim();
    if (!text) continue;

    const [, hashes, title] = text.match(/^(#{2,4})\s+(.*)$/) ?? [];
    if (hashes && title) {
      const node: Node = { title, blocks: [], children: [] };
      open.length = hashes.length - 1;
      (open[open.length - 1] ?? root).children.push(node);
      open.push(node);
      continue;
    }

    const target = open[open.length - 1] ?? root;
    const block = parseBlock(text);
    const previous = target.blocks[target.blocks.length - 1];
    if (block.kind === "actions" && previous?.kind === "actions")
      previous.items.push(...block.items);
    else target.blocks.push(block);
  }

  return root;
}

function Steps({ rows }: { rows: string[][] }) {
  return (
    <ol className={`divide-y divide-border ${PANEL}`}>
      {rows.map(([number = "", stage = "", what = "", who = ""]) => (
        <li
          key={number}
          className="grid gap-x-5 gap-y-2 p-5 sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:items-start"
        >
          <span className={`${INDEX} sm:pt-1`}>{number.padStart(2, "0")}</span>
          <div>
            <h3 className="text-base font-semibold">{stage}</h3>
            <p className={`mt-1 ${SMALL}`}>{what}</p>
          </div>
          <span
            className={`w-fit rounded-full border px-3 py-1 text-[11px] font-semibold ${
              HUMAN_PATTERN.test(who)
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground"
            }`}
          >
            {who}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Blocks({
  blocks,
  language,
  compact = false,
}: {
  blocks: Block[];
  language: Language;
  compact?: boolean;
}) {
  const text = compact ? SMALL : BODY;

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "workspace":
            return <Workspace key={index} language={language} />;
          case "steps":
            return <Steps key={index} rows={block.rows} />;
          case "callout":
            return (
              <p key={index} className={CALLOUT}>
                {linkify(block.text)}
              </p>
            );
          case "list":
            return (
              <ul key={index} className={`list-disc space-y-2 pl-5 ${text}`}>
                {block.items.map((item) => (
                  <li key={item}>{linkify(item)}</li>
                ))}
              </ul>
            );
          case "actions":
            return (
              <div key={index} className="flex flex-wrap gap-3">
                {block.items.map(({ label, slug }, i) => (
                  <Link
                    key={slug}
                    to="/$slug/"
                    params={{ slug }}
                    className={i === 0 ? "cta-dark px-8" : "cta-light"}
                  >
                    {label} <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            );
          case "text":
            return (
              <div key={index} className="space-y-1">
                {block.lines.map((line) => {
                  // In a multi-line paragraph, "Question: ..." style lines lead with their label.
                  const [, label, rest] =
                    (block.lines.length > 1 && line.match(LABEL_PATTERN)) || [];
                  return (
                    <p key={line} className={text}>
                      {label && rest ? (
                        <>
                          <strong className="font-semibold text-foreground">
                            {label}:
                          </strong>{" "}
                          {linkify(rest)}
                        </>
                      ) : (
                        linkify(line)
                      )}
                    </p>
                  );
                })}
              </div>
            );
        }
      })}
    </>
  );
}

// A titled topic inside a phase. Copy topics and the workspace topics share it, so they line up.
function Topic({
  eyebrow,
  title,
  icon,
  lead,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  icon?: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mt-12 first:mt-0">
      {eyebrow && <p className={`mb-3 ${EYEBROW}`}>{eyebrow}</p>}
      <h3 className={`flex items-start gap-2 ${H3}`}>
        {icon}
        <span>{title}</span>
      </h3>
      {lead && <p className={`mt-3 ${BODY}`}>{lead}</p>}
      {children && <div className="mt-5 space-y-4">{children}</div>}
    </div>
  );
}

function ModelCard({
  tag,
  label,
  text,
}: {
  tag: string;
  label: string;
  text: string;
}) {
  return (
    <div className={`${PANEL} bg-muted/50 p-5`}>
      <span className={EYEBROW}>{tag}</span>
      <strong className="mt-2 block font-mono text-sm">{label}</strong>
      <p className={`mt-2 ${SMALL}`}>{text}</p>
    </div>
  );
}

// What the project holds once GTT is installed: engine, governed domain, its files and its lifecycle.
function Workspace({ language }: { language: Language }) {
  const m = methodologyContent[language];
  const tree: [string, string, boolean?][] = [
    ["├── .gtt/", m.engineDir],
    ["├── gtt-domain/", m.here, true],
    ["│   ├── context/", m.contextDir],
    ["│   ├── adr/", m.decisionsDir],
    ["│   ├── backlog.md", m.backlogFile],
    ["│   └── proposals/", m.proposalsDir],
    ["└── src/", m.source],
  ];

  return (
    <div className="pt-4">
      <Topic eyebrow={m.eyebrow} title={m.title} lead={m.intro}>
        <div className="grid items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <ModelCard
            tag="01 · ENGINE"
            label={m.engineLabel}
            text={m.engineText}
          />
          <ArrowRight
            size={18}
            className="self-center justify-self-center text-muted-foreground max-md:rotate-90"
            aria-hidden="true"
          />
          <ModelCard
            tag="02 · DOMAIN"
            label={m.domainLabel}
            text={m.domainText}
          />
        </div>
      </Topic>

      <Topic
        title={m.workspace}
        icon={
          <FolderTree size={20} className="mt-1 shrink-0" aria-hidden="true" />
        }
        lead={m.workspaceText}
      >
        <div
          className={`${PANEL} bg-muted/50 p-5`}
          aria-label={labels[language].tree}
        >
          <p className="font-mono text-sm font-semibold">my-project/</p>
          <ul className="mt-2 divide-y divide-border">
            {tree.map(([path, description, governed]) => (
              <li
                key={path}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2"
              >
                <code
                  className={`whitespace-pre font-mono text-xs ${governed ? "font-bold" : ""}`}
                >
                  {path}
                </code>
                <span className={governed ? "text-xs font-semibold" : FINE}>
                  {description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Topic>

      <Topic
        title={m.contents}
        icon={
          <Layers3 size={20} className="mt-1 shrink-0" aria-hidden="true" />
        }
        lead={m.contentsText}
      >
        <p className="text-xs font-semibold text-muted-foreground">
          {m.fileGuide}
        </p>
        <ol className={`divide-y divide-border ${PANEL}`}>
          {m.domains.map(({ icon: Icon, name, dir, files, text }, index) => (
            <li key={name} className="p-5">
              <div className="flex gap-3">
                <span className={`${INDEX} pt-1`}>0{index + 1}</span>
                <Icon
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-base font-semibold">{name}</h4>
                  <p className={`mt-1 ${SMALL}`}>{text}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 border-t border-border pt-4 sm:ml-[3.4rem]">
                {files.map(([file, description]) => (
                  <li
                    key={file}
                    className="grid gap-x-6 gap-y-0.5 md:grid-cols-[22rem_minmax(0,1fr)]"
                  >
                    <code className="break-words font-mono text-xs">
                      {dir}
                      {file}
                    </code>
                    <span className={FINE}>{description}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className={`${PANEL} bg-muted/50 px-4 py-3 ${FINE}`}>{m.repoNote}</p>
      </Topic>

      <Topic
        eyebrow={m.meaningEyebrow}
        title={
          <span className="inline-block first-letter:uppercase">
            {m.meaningTitle}
          </span>
        }
        lead={m.meaning}
      >
        <p className={CALLOUT}>{m.callout}</p>
        <div className="pt-4">
          <h4 className="text-base font-semibold">{m.why}</h4>
          <p className={`mt-2 max-w-3xl ${SMALL}`}>{m.whyText}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {m.reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className={`${PANEL} p-5`}>
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              <strong className="mt-3 block text-sm font-semibold">
                {title}
              </strong>
              <span className={`mt-1 block ${FINE}`}>{text}</span>
            </li>
          ))}
        </ul>
        <p className="flex items-start gap-2 text-sm font-medium">
          <Users size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          {m.shared}
        </p>
        <p className="max-w-3xl font-semibold leading-relaxed">{m.artifacts}</p>
      </Topic>

      <Topic title={m.lifecycleTitle} lead={m.lifecycleText}>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {m.lifecycle.map(([title, text], index) => (
            <li key={title} className={`${PANEL} p-5`}>
              <span className={INDEX}>0{index + 1}</span>
              <strong className="mt-2 block text-sm font-semibold">
                {title}
              </strong>
              <span className={`mt-1 block ${FINE}`}>{text}</span>
            </li>
          ))}
        </ol>
      </Topic>
    </div>
  );
}

// Lays a page's copy out as a guide: an intro, a "where are you" index, then one section per phase.
export function EcosystemGuide({
  content,
  language,
}: {
  content: string;
  language: Language;
}) {
  const t = labels[language];
  const guide = parseGuide(content);

  const phases = guide.children.map((node, index) => {
    const [, number, name = node.title] =
      node.title.match(/^(\d+)\.\s+(.*)$/) ?? [];
    // A phase opens with the line that tells the reader whether this is where they are.
    const [first, ...rest] = node.blocks;
    const here = first?.kind === "callout" ? first.text : undefined;
    const blocks = here ? rest : node.blocks;
    const steps = blocks.flatMap((block) =>
      block.kind === "steps" ? block.rows.map((row) => row[0] ?? "") : [],
    );
    const range =
      steps.length > 1
        ? `${t.steps} ${steps[0]}–${steps[steps.length - 1]}`
        : steps.length === 1
          ? `${t.step} ${steps[0]}`
          : undefined;

    return {
      id: `phase-${index + 1}`,
      name,
      here,
      blocks,
      range,
      topics: node.children,
      eyebrow: number ? `${t.phase} ${number}` : t.reference,
    };
  });

  return (
    <div>
      <div className="space-y-4 text-lg">
        <Blocks blocks={guide.blocks} language={language} />
      </div>

      <nav aria-label={t.where} className={`mt-10 ${PANEL} bg-muted/50 p-6`}>
        <h2 className={EYEBROW}>{t.where}</h2>
        <p className={`mt-3 ${SMALL}`}>{t.whereText}</p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map(({ id, name, here, eyebrow }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex h-full flex-col gap-2 bg-background p-5 ${PANEL}`}
              >
                <span className={INDEX}>{eyebrow}</span>
                <span className="text-sm font-semibold">{name}</span>
                {here && <span className={FINE}>{here}</span>}
              </a>
            </li>
          ))}
        </ol>
        <p className={`mt-5 ${FINE}`}>{t.legend}</p>
      </nav>

      {phases.map(({ id, name, here, blocks, range, topics, eyebrow }) => (
        <section
          key={id}
          id={id}
          aria-labelledby={`${id}-title`}
          className="mt-16 scroll-mt-6 border-t border-border pt-10"
        >
          <p className={EYEBROW}>{range ? `${eyebrow} · ${range}` : eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-bold tracking-tight"
          >
            {name}
          </h2>
          {here && (
            <p className="mt-4 max-w-3xl border-l-2 border-foreground pl-4 text-sm font-medium leading-relaxed">
              {here}
            </p>
          )}
          <div className="mt-6 space-y-6">
            <Blocks blocks={blocks} language={language} />
          </div>

          {topics.map((topic) => (
            <Topic key={topic.title} title={topic.title}>
              <Blocks blocks={topic.blocks} language={language} />
              {topic.children.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {topic.children.map((card) => (
                    <div key={card.title} className={`${PANEL} p-5`}>
                      <h4 className="text-base font-semibold">{card.title}</h4>
                      <div className="mt-2 space-y-2">
                        <Blocks
                          blocks={card.blocks}
                          language={language}
                          compact
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Topic>
          ))}
        </section>
      ))}
    </div>
  );
}
