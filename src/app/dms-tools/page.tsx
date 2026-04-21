import DmsPage from "./DmsPage";

export async function generateMetadata() {
  return {
    title: "DMS Tools - Ekstensi Browser",
    description:
      "Ekstensi sederhana untuk menunjang aktivitas DMS Anda dengan menambahkan fitur Copy-Paste NIP serta mode tampilan gelap.",
    openGraph: {
      title: "DMS Tools - Ekstensi Browser",
      description:
        "Ekstensi sederhana untuk menunjang aktivitas DMS Anda dengan menambahkan fitur Copy-Paste NIP serta mode tampilan gelap.",
    },
    twitter: {
      title: "DMS Tools - Ekstensi Browser",
      description:
        "Ekstensi sederhana untuk menunjang aktivitas DMS Anda dengan menambahkan fitur Copy-Paste NIP serta mode tampilan gelap.",
    },
  };
}

export default function HomePage() {
  return <DmsPage />;
}
