'use client';

const SmsTermsPage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-700 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">SCOTT NOVAK REAL ESTATE - PREMARKET HOMES</h1>
      </header>

      <div className="max-w-3xl mx-auto p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-black mb-8">SMS Terms and Conditions</h1>

        {/* General Terms */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">SMS Communication Terms</h2>
          <p className="mb-4 text-gray-800">
            By opting in to receive SMS messages from Scott Novak Real Estate, you agree to receive
            periodic text messages about premarket properties and related real estate information.
          </p>
        </section>

        {/* Messaging Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Important Information</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-800">
            <li>Message and data rates may apply</li>
            <li>Message frequency may vary</li>
            <li>You can opt-out at any time</li>
            <li>Your phone carrier's standard messaging rates will apply</li>
          </ul>
        </section>

        {/* Opt-Out Instructions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">How to Opt-Out</h2>
          <p className="mb-4 text-gray-800">
            You can stop receiving text messages at any time by:
          </p>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Replying STOP to any message you receive from us</li>
            <li>Replying UNSUBSCRIBE to any message you receive from us</li>
          </ul>
        </section>

        {/* Privacy Statement */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Privacy Protection</h2>
          <p className="text-gray-800">
            We will never share, trade, or sell your phone number or any other personal information
            to third parties for marketing purposes. Your privacy is important to us.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Questions?</h2>
          <p className="text-gray-800">
            If you have any questions about our SMS service, please contact our team through the
            main website.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center mt-8 text-sm text-gray-700">
          <p>ALL RIGHTS RESERVED | POWERED BY THE TEAM OF SCOTT NOVAK</p>
          <p>DRE #01985628 | ND Real Estate Investors LLC</p>
        </footer>
      </div>
    </main>
  );
};

export default SmsTermsPage;