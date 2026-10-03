import { createFileRoute } from "@tanstack/react-router";
import { llmsFullTxt } from "@/lib/seo";

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: () => new Response(llmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } }),
    },
  },
});
