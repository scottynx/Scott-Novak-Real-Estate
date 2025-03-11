'use client';

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-700 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">SCOTT NOVAK REAL ESTATE</h1>
      </header>

      <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white my-8 rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold text-teal-800 mb-10 pb-4 border-b-2 border-teal-700">
          Privacy Policy
        </h1>

        {/* Data Collection */}
        <section className="mb-12" id="data-collection">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Data Collection</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              We collect the following personal information when you interact with our services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-800">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
            </ul>
            <p className="mb-4 text-gray-800">
              This information is collected when you submit your details through our form on 
              the main page at scottnovakrealestate.com.
            </p>
            <p className="text-gray-800">
              We do not collect additional data such as IP addresses, cookies, or location data.
            </p>
          </div>
        </section>

        {/* Data Usage */}
        <section className="mb-12" id="data-usage">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Data Usage</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              The personal information we collect is used solely to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-800">
              <li>Contact you regarding real estate agent services</li>
              <li>Provide you with information relevant to your real estate needs</li>
              <li>Respond to your inquiries and requests</li>
            </ul>
            <p className="text-gray-800">
              Your information is maintained under strict privacy policies to protect your personal
              data.
            </p>
          </div>
        </section>

        {/* Data Protection Statement */}
        <section className="mb-12" id="data-protection">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Data Protection</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              We implement reasonable security measures to protect your personal information from
              unauthorized access, use, or disclosure.
            </p>
            <p className="mb-4 text-gray-800 font-medium">
              SMS opt-in or phone numbers for the purpose of SMS are not shared with any third parties or 
              affiliate companies for marketing purposes.
            </p>
            <p className="text-gray-800">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected and to comply with applicable laws.
            </p>
          </div>
        </section>

        {/* User Rights */}
        <section className="mb-12" id="user-rights">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Your Rights</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-800">
              <li>Access your personal information</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your information</li>
            </ul>
            <p className="mb-4 text-gray-800">
              <strong>How to Exercise Your Rights:</strong> To exercise any of these rights, simply reply to any text message or email with the following words: Reply &ldquo;ACCESS&rdquo; and we will send you all of our current data we have stored. Reply &ldquo;CORRECTION&rdquo; as well as the data you want changed, and we will correct the data in or records. Reply &ldquo;DELETE&rdquo; and we will delete all of your user data from our system. Reply &ldquo;OBJECT&rdquo; as well as a brief description of your objection and we will send you a full response detailing our description of the legality of our current practices, including references to relevant regulatory and statutory texts.
            </p>
          </div>
        </section>

        {/* Opt-In and Opt-Out */}
        <section className="mb-12" id="opt-in-out">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Opt-In and Opt-Out</h2>
          <div className="pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">How to Opt-In:</h3>
            <p className="mb-4 text-gray-800 pl-4">
              You can opt-in to our communications by providing your name, email address, and phone number 
              through the form on our main website at scottnovakrealestate.com.
            </p>
            <p className="mb-4 text-gray-800 pl-4">
              To receive SMS text messages, you must explicitly check the box indicating that you agree 
              to receive SMS text messages. This box is not checked by default, and you can complete 
              the sign-up process without checking this box.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Messaging Details:</h3>
            <ul className="list-disc pl-10 mb-4 text-gray-800">
              <li>Message and data rates may apply</li>
              <li>Message frequency may vary</li>
              <li>You can opt-out at any time</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">How to Opt-Out:</h3>
            <p className="text-gray-800 pl-4">
              If you are receiving text messages from us and wish to stop receiving them, simply respond 
              with either &ldquo;STOP&rdquo; or &ldquo;UNSUBSCRIBE&rdquo; to 916-256-2154
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12" id="contact-information">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Contact Information</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              For privacy-related inquiries, you can:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-800">
              <li>Text the word &ldquo;PRIVACY&rdquo; to 916-256-2154</li>
              <li>Call 916-256-2154</li>
              <li>Email scott@scottnovakrealestate.com</li>
            </ul>
            <p className="text-gray-800">
              We are committed to addressing your concerns and will respond in a timely manner.
            </p>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="mb-12" id="policy-updates">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Updates to Privacy Policy</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              We reserve the right to update this privacy policy. Any changes will be posted on our
              website with an updated effective date.
            </p>
            <p className="text-gray-800">
              We encourage you to review this Privacy Policy periodically to stay informed about how we 
              protect your information.
            </p>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-12" id="accessibility">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Accessibility</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              We are committed to making our Privacy Policy accessible to all users. This policy:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-800">
              <li>Is designed to be readable by screen readers</li>
              <li>Uses sufficient color contrast for visibility</li>
              <li>Has resizable text without breaking the layout</li>
              <li>Uses clear, simple language</li>
              <li>Includes proper heading structure for easy navigation</li>
            </ul>
            <p className="text-gray-800">
              If you encounter any accessibility issues or need this policy in an alternative format, 
              please contact us using the information provided in the Contact Information section.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pt-6 text-sm text-gray-700 border-t border-gray-300">
          <p>Last Updated: March 10, 2025</p>
          <p className="mt-2">ALL RIGHTS RESERVED | SCOTT NOVAK REAL ESTATE</p>
          <p>DRE #01985628 | ND Real Estate Investors LLC</p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPage;