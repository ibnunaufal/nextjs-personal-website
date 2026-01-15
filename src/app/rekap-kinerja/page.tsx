import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "Rekap Kinerja - Ekstensi Browser",
    description:
      "Ekstensi sederhana untuk merekap e-Kinerja dan mengekspornya sebagai file DOCX.",
    openGraph: {
      title: "Rekap Kinerja - Ekstensi Browser",
      description:
        "Ekstensi sederhana untuk merekap e-Kinerja dan mengekspornya sebagai file DOCX.",
    },
    twitter: {
      title: "Rekap Kinerja - Ekstensi Browser",
      description:
        "Ekstensi sederhana untuk merekap e-Kinerja dan mengekspornya sebagai file DOCX.",
    },
  };
}
import github from "../../../public/logo-github.svg";
import chromeWebStore from "../../../public/logo-chrome-web-store.svg";
import ImageCarousel from "../../../components/ImageCarousel";
export default function HomePage() {
  return (
    <div className="px-6 py-12 md:px-12 lg:px-32 max-w-5xl mx-auto">
      {/* Nama Ekstensi */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Rekap Kinerja</h1>

      {/* Deskripsi Singkat */}
      <p className="text-lg text-gray-600 mb-10">
        Ekstensi sederhana untuk merekap e-Kinerja anda menjadi laporan kinerja
        bulanan atau mingguan dalam bentuk file DOCX.
      </p>

      {/* Hero Image */}
      <div className="mb-12">
        {/* Simpan gambar di /public/hero.png */}
        <ImageCarousel
          images={["/kinerja/hero1.png", "/kinerja/hero2.png"]}
          interval={3000}
          width={1000}
          height={500}
          className="mb-8"
          showIndicators={true}
        />
        {/* <Image
          width={800}
          height={400}
          src="/kinerja/hero.png"
          alt="Preview ekstensi"
          className="rounded-xl shadow-md w-full object-cover"
        /> */}
      </div>

      {/* Cara Menggunakan */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Cara Menggunakan</h2>

      <ol className="list-decimal ml-6 space-y-3 leading-relaxed mb-10">
        <li>
          Unduh dan pasang ekstensi di browser Anda dengan klik tombol{" "}
          <strong>Unduh Ekstensi via Chrome Store</strong> di bawah ini.
        </li>
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <a
            href="https://chromewebstore.google.com/detail/mgcehoepfcodnefehijmcglhdobleekh?utm_source=item-share-cb"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-gray-500 text-gray-100 font-medium shadow hover:bg-gray-600 transition flex items-center gap-2"
          >
            <Image
              src={chromeWebStore}
              width={24}
              height={24}
              alt="logo-chrome-web-store"
              className="hover:opacity-80"
            />
            <span>Unduh Ekstensi via Chrome Store</span>
          </a>
        </div>
        <li>
          Sematkan ekstensi <strong>Rekap Kinerja</strong> di toolbar browser
          Anda.
          <Image
            src="/kinerja/step-2.png"
            width={300}
            height={100}
            alt="Cara menyematkan ekstensi di toolbar"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Buka situs yang berisi elemen e-Kinerja yang ingin Anda rekap.
          Pastikan anda membuka tampilan mingguan seperti ini
          <Image
            src="/kinerja/step-3.png"
            width={400}
            height={150}
            alt="Tampilan e-Kinerja Mingguan"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>Klik ikon ekstensi di toolbar browser Anda.</li>
        <li>
          Lalu klik tombol <strong>Simpan Kinerja</strong> berwarna kuning
          <Image
            src="/kinerja/step-5.png"
            width={400}
            height={100}
            alt="Ikon Ekstensi di Toolbar"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Kinerja yang tersimpan akan muncul di dalam tabel{" "}
          <strong>Data Tersimpan</strong>
        </li>
        <li>
          Untuk menyimpan pekan lainnya, buka e-Kinerja pekan tersebut dan
          ulangi langkah 4 dan 5.
        </li>
        <li>
          Pilih data yang ingin Anda ekspor, sertakan identitas jika perlu
          <Image
            src="/kinerja/step-7.png"
            width={400}
            height={200}
            alt="Opsi Sertakan Identitas"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Sertakan pula Kolom tanda tangan jika diperlukan
          <Image
            src="/kinerja/step-8.png"
            width={400}
            height={200}
            alt="Opsi Sertakan Tanda Tangan"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Ekspor hasilnya menjadi file <strong>DOCX</strong> dengan klik tombol{" "}
          <strong>Ekspor ke DOCX</strong> berwarna ungu.
        </li>
      </ol>

      {/* Catatan untuk Pengguna Chrome / Browser Chromium */}
      <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg mb-10">
        <strong>Catatan: </strong>
        Ekstensi ini didesain untuk berjalan optimal di{" "}
        <strong>Google Chrome</strong> dan browser berbasis Chromium lainnya
        seperti <strong>Microsoft Edge</strong>, <strong>Brave</strong>, dan{" "}
        <strong>Opera</strong>.
      </div>

      {/* Cara Menggunakan */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Lihat Ekstensi ini di Chrome Web Store
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <a
          href="https://chromewebstore.google.com/detail/mgcehoepfcodnefehijmcglhdobleekh?utm_source=item-share-cb"
          target="_blank"
          className="px-6 py-3 rounded-lg bg-gray-500 text-gray-100 font-medium shadow hover:bg-gray-600 transition flex items-center gap-2"
        >
          <Image
            src={chromeWebStore}
            width={24}
            height={24}
            alt="logo-chrome-web-store"
            className="hover:opacity-80"
          />
          <span>Lihat di Chrome Web Store</span>
        </a>
      </div>
      {/* Cara Menggunakan */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Lihat Ekstensi ini di Github
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <a
          href="https://github.com/ibnunaufal/rekap-kinerja-chrome-extension"
          target="_blank"
          className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium shadow hover:bg-gray-200 transition flex items-center gap-2"
        >
          <Image
            src={github}
            width={24}
            height={24}
            alt="logo-github"
            className="hover:opacity-80"
          />
          <span>Lihat di GitHub</span>
        </a>
      </div>

      {/* Kontak */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Kontak</h2>

      <p className="mb-2 leading-relaxed">
        Jika Anda memiliki pertanyaan, saran, atau ingin melaporkan masalah,
        silakan hubungi kami di:
      </p>

      <p className="mt-2">
        <a href="/bio" className="text-blue-600 hover:text-blue-800">
          Hubungi Kami
        </a>
      </p>
      <p className="mt-4">
        <a
          href="/rekap-kinerja/privacy-policy"
          className="text-blue-600 hover:text-blue-800"
        >
          Kebijakan Privasi
        </a>
      </p>

      <div className="h-20"></div>
    </div>
  );
}
