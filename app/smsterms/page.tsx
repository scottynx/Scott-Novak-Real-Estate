'use client';

const SmsTermsPage = () => {
  return (
    <main className="min-h-screen bg-gray-200">
      {/* Header */}
      <header className="bg-teal-700 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">SCOTT NOVAK REAL ESTATE</h1>
      </header>

      <div className="max-w-3xl mx-auto p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-black mb-8">SMS Terms and Conditions</h1>

        {/* General Terms */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">SMS Communication Terms</h2>
          <p className="mb-4 text-gray-800 sm:text-base">
            By opting in to receive SMS messages from Scott Novak Real Estate, you agree to receive periodic text messages about customer care and marketing.
          </p>
        </section>

        {/* Messaging Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Important Information</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-800 sm:text-base">
            <li>Message and data rates may apply</li>
            <li>Messaging frequency may vary</li>
            <li>You can opt-out at any time</li>
            <li>Your phone carrier&#39;s standard messaging rates will apply</li>
          </ul>
        </section>

                {/* Consent */}
                <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Consent for SMS Communications</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-800 sm:text-base">
            <li>Upon providing consent to receive SMS communications from us, we want to assure you that your phone number and consent will never be shared with third parties or affiliates for marketing purposes. Your information is used solely for communication with you.</li>
          </ul>
        </section>

                {/* Types */}
                <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Types of SMS Communications</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-800 sm:text-base">
            <li>After you consent, we will send messages regarding appointments, cases, or deliveries you have requested. Examples of these messages include:</li>
            <h2 className="text-xl font-semibold text-black mb-4">Customers and Guests:</h2>
            <li>Updates on orders, deliveries, and other relevant information.</li>
            <h2 className="text-xl font-semibold text-black mb-4">Job Applicants:</h2>
            <li>Information about the status of your application.</li>
          </ul>
        </section>

        {/* Opt-In Instructions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">To opt-in at any time, text START to 916-256-2154</h2>
        </section>

        {/* Opt-Out Instructions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">To opt-out at any time, text STOP</h2>
        </section>

        {/* Privacy Statement */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Visit www.scottnovakrealestate.com/privacy for the privacy policy</h2>
          <p className="text-gray-800 sm:text-base">
            We will never share, trade, or sell your phone number or any other personal information to third parties for any purpose. Your privacy is important to us.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">For assistance, text HELP to 916-256-2154 or visit our website at www.scottnovakrealestate.com</h2>
        </section>

        {/* Footer */}
        <footer className="text-center mt-8 text-sm text-gray-800">
          <p>ALL RIGHTS RESERVED | SCOTT NOVAK REAL ESTATE</p>
          <p>DRE #01985628 | ND Real Estate Investors LLC</p>
        </footer>
      </div>
    </main>
  );
};

export default SmsTermsPage;