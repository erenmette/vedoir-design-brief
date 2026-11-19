import type { Metadata } from "next";
import Vakmanschap from "@/components/pages/Vakmanschap";

export const metadata: Metadata = {
  title: "Vakmanschap",
  description:
    "Ontdek de materialen en het vakmanschap achter elk Vedoir horloge. 904L staal, saffierglas, mechanische uurwerken en meer.",
};

export default function VakmanschapPage() {
  return <Vakmanschap />;
}
