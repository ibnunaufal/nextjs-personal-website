import DmsPage from "./DmsPage";

export async function generateMetadata() {
  return {
    title: "DMS Tools - Ekstensi Browser",
    description:
      "Ekstensi sederhana untuk menambahkan fitur Copy-Paste NIP, mode tampilan gelap, dan Clipboard Bar.",
    openGraph: {
      title: "DMS Tools - Ekstensi Browser",
      description:
        "Ekstensi sederhana untuk menambahkan fitur Copy-Paste NIP, mode tampilan gelap, dan Clipboard Bar.",
    },
    twitter: {
      title: "DMS Tools - Ekstensi Browser",
      description:
        "Ekstensi sederhana untuk menambahkan fitur Copy-Paste NIP, mode tampilan gelap, dan Clipboard Bar.",
    },
  };
}

export default function HomePage() {
  return <DmsPage />;
}
