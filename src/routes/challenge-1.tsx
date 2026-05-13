import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/challenge-1")({
  head: () => ({
    meta: [
      { title: "Challenge 01 · Retention Journey — Orange Sky" },
      { name: "description", content: "A multi-channel save journey in SFMC for regular givers showing cancellation intent after the third gift." },
    ],
  }),
  component: Challenge1,
});

function Challenge1() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <div className="bg-primary/5 border-b border-primary-light px-6 md:px-[8vw] py-3 text-xs text-muted-foreground">
        Challenge 01 — full SFMC solution detailed below. Scroll within the frame to explore the data model, journey, and field reference.
      </div>
      <div className="flex-1">
        <iframe
          src="/challenge-1.html"
          title="Orange Sky Retention Journey"
          className="w-full block border-0"
          style={{ height: "calc(100vh - 110px)" }}
        />
      </div>
      <SiteFooter />
    </div>
  );
}
