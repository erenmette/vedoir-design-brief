import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { watches } from "@/lib/data";
import ProductDetail from "@/components/product/ProductDetail";

export async function generateStaticParams() {
  return watches.map((watch) => ({
    slug: watch.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const watch = watches.find((w) => w.slug === slug);

  if (!watch) {
    return { title: "Horloge niet gevonden" };
  }

  return {
    title: watch.name,
    description: watch.description,
    openGraph: {
      title: `${watch.name} | VEDOIR`,
      description: watch.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const watch = watches.find((w) => w.slug === slug);

  if (!watch) {
    notFound();
  }

  return <ProductDetail watch={watch} />;
}
