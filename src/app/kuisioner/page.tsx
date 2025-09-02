
import KuisionerPage from "./KuisionerPage";

export async function generateMetadata() {
    return {
        title: "Kuisioner Rancangan Aktualisasi",
        description: "Bantu mengisi kuisioner rancangan aktualisasi milik naufal 😁",
        openGraph: {
            title: "Kuisioner Rancangan Aktualisasi",
            description: "Bantu mengisi kuisioner rancangan aktualisasi milik naufal 😁",
        },
        twitter: {
            title: "Kuisioner Rancangan Aktualisasi",
            description: "Bantu mengisi kuisioner rancangan aktualisasi milik naufal 😁",
        },
    };
}

export default function Page() {
    return <KuisionerPage />;
}