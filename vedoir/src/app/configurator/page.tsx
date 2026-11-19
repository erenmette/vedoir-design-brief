import type { Metadata } from "next";
import ConfiguratorPage from "@/components/configurator/ConfiguratorPage";

export const metadata: Metadata = {
  title: "Het Atelier — Ontwerp Jouw Horloge",
  description:
    "Configureer jouw persoonlijke Vedoir horloge. Kies model, kast, wijzerplaat, band en personalisatie — volledig op maat gemaakt.",
};

export default function ConfiguratorRoute() {
  return <ConfiguratorPage />;
}
