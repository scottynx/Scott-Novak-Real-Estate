'use client';

export default function Privacy() {
 return (
   <main className="min-h-screen bg-gray-50">
     {/* Header */}
     <header className="bg-teal-700 text-white p-4 text-center">
       <h1 className="text-2xl font-bold">PREMARKET HOMES</h1>
     </header>

     <div className="max-w-3xl mx-auto p-8">
       <h1 className="text-3xl font-bold mb-8">Privacy Policy for Scott Novak Real Estate</h1>

       {/* Information Collection Section */}
       <section className="mb-8">
         <h2 className="text-xl font-semibold mb-4">Information Collection and Use</h2>
         <p className="mb-4">
           We collect personal information including names, phone numbers, email addresses, and other contact details that you provide when interacting with our services.
         </p>
         <p>
           This information is maintained under strict privacy policies to protect your personal data.
         </p>
       </section>

       {/* Data Protection Statement */}
       <section className="mb-8">
         <h2 className="text-xl font-semibold mb-4">Data Protection Statement</h2>
         <p className="mb-4">
           Our organization maintains strict privacy policies to protect personal information obtained for text message communications. This information is never sold, rented, released, or traded to others without prior consent or legal obligation. Any sharing of information with third parties is solely for the purpose of fulfilling our obligations to you. We guarantee that it will never be shared with third parties for marketing purposes.
         </p>
       </section>

       {/* Text Message Communications */}
       <section className="mb-8">
         <h2 className="text-xl font-semibold mb-4">Text Message Communications</h2>
         <h3 className="font-semibold mb-2">Messaging Details:</h3>
         <ul className="list-disc pl-6 mb-4">
           <li>Message and data rates may apply</li>
           <li>Message frequency may vary</li>
           <li>You can opt-out at any time</li>
         </ul>
         <h3 className="font-semibold mb-2">Opt-Out Instructions:</h3>
         <p>
           Text Message Opt-Out: If you are receiving text messages from us and wish to stop receiving them, simply respond with either "STOP" or "UNSUBSCRIBE" to the number from which you received the message.
         </p>
       </section>

       {/* Your Rights */}
       <section className="mb-8">
         <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
         <p>You have the right to:</p>
         <ul className="list-disc pl-6">
           <li>Access your personal information</li>
           <li>Request corrections to your data</li>
           <li>Request deletion of your data</li>
           <li>Object to processing of your information</li>
         </ul>
       </section>

       {/* Data Security */}
       <section className="mb-8">
         <h2 className="text-xl font-semibold mb-4">Data Security</h2>
         <p>
           We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure.
         </p>
       </section>

       {/* Updates */}
       <section className="mb-8">
         <h2 className="text-xl font-semibold mb-4">Updates to Privacy Policy</h2>
         <p>
           We reserve the right to update this privacy policy. Any changes will be posted on our website with an updated effective date.
         </p>
       </section>

       {/* Footer */}
       <footer className="text-center mt-8 text-sm text-gray-600">
         <p>ALL RIGHTS RESERVED | POWERED BY THE TEAM OF SCOTT NOVAK</p>
         <p>DRE #01985628 | ND Real Estate Investors LLC</p>
       </footer>
     </div>
   </main>
 );
}