import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="ocean-footer">
      <div className="mx-auto flex min-h-28 max-w-[1500px] flex-col gap-8 px-8 py-8 xl:px-12">
        <div className="border-b border-footer-foreground pb-8">
          <div className="text-sm font-semibold mb-2">{t("footer.text")}</div>
          <p className="text-[9px] uppercase tracking-[0.28em] text-footer-foreground">{t("footer.tags")}</p>
        </div>
        <div className="flex items-start justify-between">
          <blockquote className="border-l border-footer-foreground pl-8 text-xl italic leading-tight">
            {language === "en"
              ? '"Better software\nwith governed intelligence."'
              : '"Mejor software\ncon inteligencia gobernada."'}
            <footer className="mt-1 text-xs not-italic">— GTT Method</footer>
          </blockquote>
          <div className="border-l border-footer-foreground pl-8 text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.28em]">
            {language === "en"
              ? <>People<br />Context<br />Intelligence<br />Impact</>
              : <>Personas<br />Contexto<br />Inteligencia<br />Impacto</>}
          </div>
        </div>
      </div>
    </footer>
  );
}
