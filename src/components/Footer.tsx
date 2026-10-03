import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/contexts/LanguageContext";
import { pages } from "@/lib/gttContent";
import goIcon from "@/assets/credits/go.svg";
import cobraIcon from "@/assets/credits/cobra.png";
import goreleaserIcon from "@/assets/credits/goreleaser.png";
import pythonIcon from "@/assets/credits/python.svg";
import bashIcon from "@/assets/credits/gnubash.svg";
import gitIcon from "@/assets/credits/git.svg";
import typescriptIcon from "@/assets/credits/typescript.svg";
import reactIcon from "@/assets/credits/react.svg";
import tanstackIcon from "@/assets/credits/tanstack.svg";
import viteIcon from "@/assets/credits/vite.svg";
import tailwindIcon from "@/assets/credits/tailwindcss.svg";
import radixIcon from "@/assets/credits/radixui.svg";
import lucideIcon from "@/assets/credits/lucide.svg";
import githubIcon from "@/assets/credits/github.svg";
import githubActionsIcon from "@/assets/credits/githubactions.svg";
import debianIcon from "@/assets/credits/debian.svg";
import nodeIcon from "@/assets/credits/nodedotjs.svg";
import { BOOTSTRAP_URL, GITHUB_ORG_URL, DOCS_URL, FEEDBACK_URL } from "@/lib/links";

// Open-source projects GTT is built with, grouped by where they are used.
// Every link is the project's own GitHub home; logos are shown without names.
const credits = [
  {
    titleEn: "GTT CLI",
    titleEs: "GTT CLI",
    items: [
      { name: "Go", icon: goIcon, roleEn: "language", roleEs: "lenguaje", href: "https://github.com/golang/go" },
      { name: "Cobra", icon: cobraIcon, roleEn: "command framework", roleEs: "framework de comandos", href: "https://github.com/spf13/cobra" },
      { name: "GoReleaser", icon: goreleaserIcon, roleEn: "release builds", roleEs: "builds de release", href: "https://github.com/goreleaser/goreleaser" },
    ],
  },
  {
    titleEn: "GTT Bootstrap",
    titleEs: "GTT Bootstrap",
    items: [
      { name: "Python", icon: pythonIcon, roleEn: "engine and validation", roleEs: "motor y validación", href: "https://github.com/python/cpython" },
      { name: "Bash", icon: bashIcon, roleEn: "service scripts", roleEs: "scripts de servicio" },
      { name: "Git", icon: gitIcon, roleEn: "versioned project state", roleEs: "estado versionado del proyecto", href: "https://github.com/git/git" },
    ],
  },
  {
    titleEn: "This site",
    titleEs: "Este sitio",
    items: [
      { name: "TypeScript", icon: typescriptIcon, roleEn: "language", roleEs: "lenguaje", href: "https://github.com/microsoft/TypeScript" },
      { name: "React", icon: reactIcon, roleEn: "UI", roleEs: "interfaz", href: "https://github.com/facebook/react" },
      { name: "TanStack Start", icon: tanstackIcon, roleEn: "routing and prerender", roleEs: "rutas y prerender", href: "https://github.com/TanStack/router" },
      { name: "Vite", icon: viteIcon, roleEn: "build", roleEs: "build", href: "https://github.com/vitejs/vite" },
      { name: "Tailwind CSS", icon: tailwindIcon, roleEn: "styling", roleEs: "estilos", href: "https://github.com/tailwindlabs/tailwindcss" },
      { name: "Radix UI", icon: radixIcon, roleEn: "primitives", roleEs: "primitivas", href: "https://github.com/radix-ui/primitives" },
      { name: "Lucide", icon: lucideIcon, roleEn: "icons", roleEs: "iconos", href: "https://github.com/lucide-icons/lucide" },
    ],
  },
  {
    titleEn: "Platform",
    titleEs: "Plataforma",
    items: [
      { name: "GitHub", icon: githubIcon, roleEn: "source, community and hosting", roleEs: "código, comunidad y hosting", href: "https://github.com/github" },
      { name: "GitHub Actions", icon: githubActionsIcon, roleEn: "CI and releases", roleEs: "CI y releases", href: "https://github.com/actions" },
      { name: "Debian", icon: debianIcon, roleEn: "server", roleEs: "servidor", href: "https://github.com/Debian" },
      { name: "Node.js", icon: nodeIcon, roleEn: "build runtime", roleEs: "runtime de build", href: "https://github.com/nodejs/node" },
    ],
  },
];

const licenses = [
  { name: "GTT Method", license: "Apache-2.0", href: "https://github.com/GTT-Community/gtt-method/blob/main/LICENSE" },
  { name: "GTT Bootstrap", license: "MIT", href: "https://github.com/GTT-Community/gtt-bootstrap/blob/main/LICENSE" },
  { name: "GTT CLI", license: "Apache-2.0", href: "https://github.com/GTT-Community/gtt-cli/blob/main/LICENSE" },
  { name: "gtt-community.github.io", license: "MIT", href: "https://github.com/GTT-Community/gtt-community.github.io/blob/main/LICENSE" },
];

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="ocean-footer">
      <div className="mx-auto flex min-h-28 max-w-[1500px] flex-col gap-8 px-8 py-8 xl:px-12">
        <div className="border-b border-footer-foreground pb-8">
          <div className="text-sm font-semibold mb-2">{t("footer.text")}</div>
          <p className="text-[9px] uppercase tracking-[0.28em] text-footer-foreground">{t("footer.tags")}</p>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <blockquote className="border-l border-footer-foreground pl-8 text-xl italic leading-tight">
            {language === "en"
              ? '"Better software\nwith governed intelligence."'
              : '"Mejor software\ncon inteligencia gobernada."'}
            <footer className="mt-1 text-xs not-italic">— GTT Method</footer>
          </blockquote>
          <nav aria-label={language === "en" ? "Footer navigation" : "Navegación del pie de página"} className="border-l border-footer-foreground pl-8 flex flex-wrap gap-x-8 gap-y-2 text-xs">
            {pages.map((p) => (
              <Link key={p.slug} to="/$slug" params={{ slug: p.slug }} className="hover:opacity-70 transition-opacity">
                {language === "en" ? p.titleEn : p.titleEs}
              </Link>
            ))}
          </nav>
          <div className="border-l border-footer-foreground pl-8 flex flex-col gap-2 text-xs">
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{t("nav.docs")}</a>
            <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">GitHub</a>
            <a href={BOOTSTRAP_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{language === "en" ? "Get Started" : "Comenzar"}</a>
            <a href={FEEDBACK_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{language === "en" ? "Feedback: bugs & ideas" : "Feedback: bugs e ideas"}</a>
          </div>
          <div className="border-l border-footer-foreground pl-8 text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.28em]">
            {language === "en"
              ? <>People<br />Context<br />Intelligence<br />Impact</>
              : <>Personas<br />Contexto<br />Inteligencia<br />Impacto</>}
          </div>
        </div>
        <section id="credits" aria-labelledby="credits-heading" className="border-t border-footer-foreground pt-8">
          <h2 id="credits-heading" className="text-sm font-semibold">
            {language === "en" ? "Built with open source" : "Construido con código abierto"}
          </h2>
          <p className="mt-1 max-w-2xl text-xs leading-relaxed opacity-80">
            {language === "en"
              ? "GTT stands on the work of these projects. Thank you to their maintainers and communities."
              : "GTT se apoya en el trabajo de estos proyectos. Gracias a sus mantenedores y comunidades."}
          </p>
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {credits.map((group) => (
              <div key={group.titleEn} className="border-l border-footer-foreground pl-8">
                <h3 className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                  {language === "en" ? group.titleEn : group.titleEs}
                </h3>
                <ul className="mt-4 flex flex-wrap items-center gap-5">
                  {group.items.map((item) => {
                    const label = `${item.name} · ${language === "en" ? item.roleEn : item.roleEs}`;
                    const logo = <img src={item.icon} alt={label} title={label} width={28} height={28} loading="lazy" className="h-7 w-7 object-contain" />;
                    return (
                      <li key={item.name}>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-70 transition-opacity">{logo}</a>
                        ) : (
                          logo
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-[11px]">
            <span className="opacity-70">{language === "en" ? "Licenses" : "Licencias"}</span>
            {licenses.map((l) => (
              <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                {l.name} <span className="opacity-70">· {l.license}</span>
              </a>
            ))}
          </p>
          <p className="mt-3 text-[11px] leading-relaxed opacity-70">
            {language === "en"
              ? "All project names and trademarks belong to their respective owners. Listing them here is a credit, not an endorsement."
              : "Todos los nombres de proyecto y marcas pertenecen a sus respectivos dueños. Listarlos aquí es un crédito, no un respaldo."}
          </p>
        </section>
      </div>
    </footer>
  );
}
