import Image from "next/image";

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
import github from "../../../public/logo-github.svg";
import chromeWebStore from "../../../public/logo-chrome-web-store.svg";
import ImageCarousel from "../../../components/ImageCarousel";
export default function HomePage() {
  return (
    <div className="px-6 py-12 md:px-12 lg:px-32 max-w-5xl mx-auto">
      {/* Nama Ekstensi */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">DMS Tools</h1>

      {/* Deskripsi Singkat */}
      <p className="text-lg text-gray-600 mb-10">
        Ekstensi sederhana untuk menunjang aktivitas DMS Anda dengan menambahkan
        fitur Copy-Paste NIP serta mode tampilan gelap.
      </p>

      {/* Hero Image */}
      <div className="mb-12">
        {/* Simpan gambar di /public/hero.png */}
        <ImageCarousel
          images={["/dms/hero1.png", "/dms/hero2.png"]}
          interval={3000}
          width={1000}
          height={500}
          className="mb-8"
          showIndicators={true}
        />
      </div>

      {/* Cara Menggunakan */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Cara Menggunakan Clipboard Bar</h2>
      <ol className="list-decimal ml-6 space-y-3 leading-relaxed mb-10">
        <li>
          Aktifkan fitur <strong>Clipboard Bar</strong> di halaman ekstensi.
          <Image
            src="/dms/clipboard-bar.png"
            width={400}
            height={150}
            alt="Tampilan Clipboard Bar di Halaman DMS"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Setelah diaktifkan, Anda akan melihat Clipboard Bar (sebuah bar kecil) muncul di bagian bawah halaman DMS Anda.
          <Image
            src="/dms/clipboard-bar-2.png"
            width={400}
            height={150}
            alt="Tampilan Clipboard Bar di Halaman DMS"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Klik tombol <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-bottom-close-icon lucide-panel-bottom-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/><path d="m15 8-3 3-3-3"/></svg> 
          di sebelah NIP, Nama, dan Nama Dokumen untuk menyalin informasi tersebut ke clipboard Anda.
          Jangan Lupa lengkapi Nama Instansi dan Status Verifikasi
          <Image
            src="/dms/clipboard-bar-3.png"
            width={400}
            height={150}
            alt="Tampilan Clipboard Bar di Halaman DMS"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Klik Copy All untuk menyalin semua informasi (NIP, Nama, Nama Dokumen, Nama Instansi, Status Verifikasi) sekaligus ke clipboard Anda.
          <Image
            src="/dms/clipboard-bar-4.png"
            width={400}
            height={150}
            alt="Tampilan Clipboard Bar di Halaman DMS"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
      </ol>

      {/* Cara Menggunakan */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Cara Menggunakan Fitur Copy & Paste</h2>

      <ol className="list-decimal ml-6 space-y-3 leading-relaxed mb-10">
        <li>
          Unduh dan pasang ekstensi di browser Anda dengan klik tombol{" "}
          <strong>Unduh Ekstensi via Chrome Store</strong> di bawah ini.
        </li>
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <a
            href="https://chromewebstore.google.com/detail/mnhhdonbbkhhiiammnmdfjdjbjlhihmf?utm_source=item-share-cb"
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
          Sematkan ekstensi <strong>DMS Tools</strong> di toolbar browser Anda.
          <Image
            src="/dms/step2.png"
            width={300}
            height={100}
            alt="Cara menyematkan ekstensi di toolbar"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Ekstensi siap dipakai! Aktifkan Fitur yang Anda Butuhkan di Halaman
          DMS Anda.
          <Image
            src="/dms/step3.png"
            width={400}
            height={150}
            alt="Tampilan DMS Tools di Halaman DMS"
            className="mt-2 rounded-md shadow-md"
          />
        </li>
        <li>
          Untuk Hasil yang Optimal, silahkan Refresh terlebih dahulu halaman DMS
          Anda setelah mengaktifkan ekstensi.
          <Image
            src="/dms/step4-1.png"
            width={400}
            height={150}
            alt="Tampilan DMS Tools di Halaman DMS"
            className="mt-2 rounded-md shadow-md"
          />
          <Image
            src="/dms/step4-2.png"
            width={400}
            height={150}
            alt="Tampilan DMS Tools di Halaman DMS"
            className="mt-2 rounded-md shadow-md"
          />
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
          href="https://chromewebstore.google.com/detail/mnhhdonbbkhhiiammnmdfjdjbjlhihmf?utm_source=item-share-cb"
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
          href="https://github.com/ibnunaufal/dms-tools-chrome-extension"
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
          href="/dms-tools/privacy-policy"
          className="text-blue-600 hover:text-blue-800"
        >
          Kebijakan Privasi
        </a>
      </p>

      <div className="h-20"></div>
    </div>
  );
}
