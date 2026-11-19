import type { Metadata } from "next";
import { watches } from "@/lib/data";
import CollectionGrid from "@/components/collection/CollectionGrid";

export const metadata: Metadata = {
  title: "De Collectie",
  description:
    "Ontdek de volledige Vedoir collectie. Elk horloge vertelt een verhaal, handgemaakt met 904L staal en saffierglas.",
};

export default function CollectiePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-void">
        <div className="flex flex-col items-center px-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            VOLTOOIDE MEESTERWERKEN
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-ivory mt-4">
            De Collectie
          </h1>
          <p className="text-silver text-lg mt-6 text-center max-w-xl mx-auto">
            Elk horloge vertelt een verhaal. Ontdek de modellen die het al doen.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <CollectionGrid watches={watches} />
    </>
  );
}
