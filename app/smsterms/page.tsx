'use client';

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-700 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">SCOTT NOVAK REAL ESTATE</h1>
      </header>

      <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white my-8 rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold text-teal-800 mb-10 pb-4 border-b-2 border-teal-700">
          Terms and Conditions
        </h1>
        
        {/* SMS Terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">
            SMS Terms and Conditions
          </h2>

          {/* 1. SMS Consent Communication */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">SMS Consent Communication</h3>
            <div className="pl-4">
              <p className="mb-4 text-gray-800 sm:text-base">
                By opting in to receive SMS messages from Scott Novak Real Estate, you agree to receive periodic text messages related to real estate services, property information, and client communications.
              </p>
              <p className="mb-4 text-gray-800 sm:text-base">
                The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties or affiliate companies for marketing purposes. Your information is used solely for communication with you regarding real estate services.
              </p>
            </div>
          </section>

          {/* 2. Types of SMS Communications */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Types of SMS Communications</h3>
            <div className="pl-4">
              <p className="mb-4 text-gray-800 sm:text-base">
                If you have consented to receive text messages from Scott Novak Real Estate, you may receive messages related to the following:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-800 sm:text-base">
                <li>Responses to your real estate inquiries</li>
                <li>Property information and updates</li>
                <li>Meeting and showing confirmations</li>
                <li>Follow-up messages after conversations</li>
                <li>Home valuation information</li>
                <li>Status updates on your real estate search</li>
              </ul>
              
              <h4 className="text-lg font-medium text-gray-800 mb-3 mt-6">Example Messages:</h4>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-800 mb-2 italic">
                  &ldquo;Thank you for reaching out to us. I received your request for new construction home info in your area. I just need to know what city you are looking in... Roseville, Elk Grove, Folsom, Natomas.....other? See more info at www.scottnovakrealestate.com
                  <br /><br />
                  Scott Novak, Realtor 916-256-2154
                  <br /><br />
                  Reply &ldquo;STOP&rdquo; to opt out.&rdquo;
                </p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-800 mb-2 italic">
                  &ldquo;Yes, I can meet you this evening and show you the home we were discussing. Reply &ldquo;STOP&rdquo; to opt out.&rdquo;
                </p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-800 mb-2 italic">
                  &ldquo;It was pleasant talking to you this evening. Just to recap, my name is Scott Novak and I&apos;m a Realtor. We should definitely get together and look at homes in Sacramento next month. Reply &ldquo;STOP&rdquo; to opt out.&rdquo;
                </p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-800 mb-2 italic">
                  &ldquo;I received your home value request and have begun the research, but have a question on the home to get an accurate value. Give me a quick call at this number. Scott Novak, Realtor. Reply &ldquo;STOP&rdquo; to opt out.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* 3. Message Frequency */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Message Frequency</h3>
            <div className="pl-4">
              <p className="mb-4 text-gray-800 sm:text-base">
                Message frequency may vary depending on your interactions with our services. You may receive up to 4 SMS messages per month regarding your real estate inquiries, property information, or home search activities.
              </p>
            </div>
          </section>

          {/* 4. Potential Fees for SMS Messaging */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Potential Fees for SMS Messaging</h3>
            <div className="pl-4">
              <p className="mb-4 text-gray-800 sm:text-base">
                Please note that standard message and data rates may apply, depending on your carrier&apos;s pricing plan. These fees may vary if the message is sent domestically or internationally. Your phone carrier&apos;s standard messaging rates will apply.
              </p>
            </div>
          </section>

          {/* 5. Opt-In Method */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Opt-In Method</h3>
            <div className="pl-4">
              <p className="mb-4 text-gray-800 sm:text-base">
                You may opt-in to receive SMS messages from Scott Novak Real Estate by submitting an online form on our website at scottnovakrealestate.com. To receive SMS text messages, you must explicitly check the box indicating that you agree to receive SMS text messages. This box is not checked by default, and you can complete the sign-up process without checking this box.
              </p>
              <p className="mb-4 text-gray-800 sm:text-base">
                To opt-in at any time, you can also text &ldquo;START&rdquo; to 916-256-2154.
              </p>
            </div>
          </section>

          {/* 6. Opt-Out Method */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Opt-Out Method</h3>
            <div className="pl-4">
              <p className="mb-4 text-gray-800 sm:text-base">
                You can opt out of receiving SMS messages at any time. To do so, simply reply &ldquo;STOP&rdquo; or &ldquo;UNSUBSCRIBE&rdquo; to any SMS message you receive from us. Alternatively, you can contact us directly to request removal from our messaging list.
              </p>
            </div>
          </section>

          {/* 7. Help */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Help</h3>
            <div className="pl-4">
              <p className="mb-4 text-gray-800 sm:text-base">
                If you are experiencing any issues with our SMS messaging service, you can reply with the keyword &ldquo;HELP&rdquo; to 916-256-2154.
              </p>
              <p className="text-gray-800 sm:text-base">
                You can also get help directly from us by visiting our website at www.scottnovakrealestate.com or by calling 916-256-2154.
              </p>
            </div>
          </section>

          {/* 8. Standard Messaging Disclosures */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Standard Messaging Disclosures</h3>
            <div className="pl-4">
              <ul className="list-disc pl-6 mb-4 text-gray-800 sm:text-base">
                <li>Message and data rates may apply</li>
                <li>You can opt out at any time by texting &ldquo;STOP&rdquo;</li>
                <li>For assistance, text &ldquo;HELP&rdquo; or visit our Privacy Policy page at www.scottnovakrealestate.com/privacy</li>
                <li>Message frequency may vary, up to 4 messages per month</li>
              </ul>
            </div>
          </section>
        </section>
        
        {/* Phone Terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">
            Phone Terms and Conditions
          </h2>
          
          <p className="mb-4 text-gray-800 sm:text-base pl-4">
            By providing your phone number to Scott Novak Real Estate, you consent to receive phone calls related to your real estate inquiries and services.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Phone Communication</h3>
          <div className="pl-4">
            <p className="mb-4 text-gray-800 sm:text-base">
              Phone calls from Scott Novak Real Estate will be used to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-800 sm:text-base">
              <li>Discuss your real estate needs and preferences</li>
              <li>Schedule property showings and appointments</li>
              <li>Provide updates on property availability</li>
              <li>Answer questions about properties or the real estate process</li>
              <li>Follow up on inquiries or property showings</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Phone Privacy</h3>
          <div className="pl-4">
            <p className="mb-4 text-gray-800 sm:text-base">
              Your phone number will not be shared with third parties or affiliate companies for marketing purposes. Your phone number will be used solely for communication regarding real estate services.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Opting Out</h3>
          <div className="pl-4">
            <p className="mb-4 text-gray-800 sm:text-base">
              To opt out of phone communications, you can request to be placed on our do-not-call list by stating this request during any phone call or by sending an email to scott@scottnovakrealestate.com with &ldquo;DO NOT CALL&rdquo; in the subject line.
            </p>
          </div>
        </section>
        
        {/* Email Terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">
            Email Terms and Conditions
          </h2>
          
          <p className="mb-4 text-gray-800 sm:text-base pl-4">
            By providing your email address to Scott Novak Real Estate, you consent to receive emails related to your real estate inquiries, property information, and other communications regarding real estate services.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Email Communication</h3>
          <div className="pl-4">
            <p className="mb-4 text-gray-800 sm:text-base">
              Emails sent from Scott Novak Real Estate will be used to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-800 sm:text-base">
              <li>Respond to your inquiries about properties</li>
              <li>Send property information that matches your criteria</li>
              <li>Confirm appointments and showings</li>
              <li>Provide updates on your real estate search</li>
              <li>Share information about the real estate process</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Email Privacy</h3>
          <div className="pl-4">
            <p className="mb-4 text-gray-800 sm:text-base">
              Your email address will not be shared with third parties or affiliate companies for marketing purposes. All email communications will include an option to unsubscribe or opt-out of future emails.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-teal-500">Opting Out</h3>
          <div className="pl-4">
            <p className="mb-4 text-gray-800 sm:text-base">
              To opt out of email communications, you can click the unsubscribe link in any email or send a request to scott@scottnovakrealestate.com with &ldquo;UNSUBSCRIBE&rdquo; in the subject line.
            </p>
          </div>
        </section>

        {/* Privacy Statement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300">Privacy Policy</h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800 sm:text-base">
              Visit www.scottnovakrealestate.com/privacy for our complete privacy policy.
            </p>
            <p className="text-gray-800 sm:text-base">
              We will never share, trade, or sell your phone number or any other personal information to third parties for any purpose. Your privacy is important to us.
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

export default TermsPage;