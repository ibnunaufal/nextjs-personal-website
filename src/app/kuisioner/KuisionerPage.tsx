import { useEffect, useState } from "react";

const KUISIONER_URL = "https://www.google.com";


export default function KuisionerPage() {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (countdown === 0) return;
        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    window.location.href = KUISIONER_URL;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [countdown]);

    const handleManualOpen = () => {
        window.location.href = KUISIONER_URL;
    };

    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h1>Mengarahkan ke Kuisioner dalam {countdown} detik...</h1>
            <p>
                Jika Anda tidak diarahkan secara otomatis,
                <br />
                <button onClick={handleManualOpen} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }} className="bg-blue-500 text-white rounded">
                    Buka Kuisioner Secara Manual
                </button>
            </p>
            <footer
                style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#888", cursor: "pointer" }}
                onClick={() => window.location.href = KUISIONER_URL}
            >
                &copy; {new Date().getFullYear()} Naufal Website. All rights reserved.
            </footer>
        </div>
    );
}