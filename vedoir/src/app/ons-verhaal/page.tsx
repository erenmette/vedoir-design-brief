import type { Metadata } from "next";
import OnsVerhaal from "@/components/pages/OnsVerhaal";

export const metadata: Metadata = {
  title: "Ons Verhaal",
  description:
    "Ontdek het verhaal achter Vedoir. Van een eenvoudige vraag in Roosendaal tot een horlogemerk dat luxe persoonlijk maakt.",
};

export default function OnsVerhaalPage() {
  return <OnsVerhaal />;
}
