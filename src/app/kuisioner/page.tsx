
import KuisionerPage from "./KuisionerPage";

export async function generateMetadata() {
    return {
        title: "Kuisioner Naufal",
        description: "Bantu mengisi kuisioner naufal",
        openGraph: {
            title: "Kuisioner Naufal",
            description: "Bantu mengisi kuisioner naufal",
        },
        twitter: {
            title: "Kuisioner Naufal",
            description: "Bantu mengisi kuisioner naufal",
        },
    };
}

export default function Page() {
    return <KuisionerPage />;
}