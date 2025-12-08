export default function PrivacyPolicy() {
  return (
    <div className="px-6 py-12 md:px-12 lg:px-32 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-sm text-gray-600 mb-8">
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6 leading-relaxed">
        This Privacy Policy describes how our browser extension (“Rekap Kinerja”)
        handles user data. We are committed to transparency and ensuring that
        your privacy is always protected.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Information We Do Not Collect</h2>
      <p className="mb-6 leading-relaxed">
        The Extension does <strong>not</strong> collect, store, transmit, or share any 
        personal information. All processing happens locally in your browser.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Permissions Used</h2>
      <p className="mb-4 leading-relaxed">
        The Extension requires certain browser permissions to function properly:
      </p>

      <ul className="list-disc ml-8 space-y-2 mb-6">
        <li><strong>activeTab</strong> – Only used to access the current page when triggered by the user.</li>
        <li><strong>scripting</strong> – Used only to inject scripts needed for page interactions.</li>
        <li><strong>downloads</strong> – Used exclusively when the user exports a file.</li>
        <li><strong>storage</strong> – Used only to store user settings locally.</li>
      </ul>

      <p className="mb-6 leading-relaxed">
        These permissions are strictly for functionality. We do not track browsing activity and do not process data unrelated to your direct actions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Third-Party Sharing</h2>
      <p className="mb-6 leading-relaxed">
        We do <strong>not</strong> sell, share, or send any data to third parties. Nothing leaves your device.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Changes to This Policy</h2>
      <p className="mb-6 leading-relaxed">
        This Privacy Policy may be updated from time to time. All changes will be posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Contact Us</h2>
      <p className="mb-2">If you have any questions, contact us at:</p>

      <p className="font-medium text-blue-600">
        ibnunaufal5758@gmail.com
      </p>
    </div>
  );
}
