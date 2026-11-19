import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Vedoir. Vragen over je ontwerp, bestelling of samenwerking? Ons team helpt je graag verder.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
