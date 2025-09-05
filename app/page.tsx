'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    smsOptIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Format the phone number if needed (removing spaces, dashes, etc.)
      const formattedPhone = formData.phone.replace(/\D/g, '');
      
      // Prepare the data to send to Privyr
      const privyrData = {
        contact: {
          name: formData.name,
          email: formData.email,
          phone: formattedPhone,
          custom_fields: {
            sms_opt_in: formData.smsOptIn ? 'Yes' : 'No',
            source: 'Website Form',
            interest: 'Premarket Homes'
          }
        }
      };

      // Replace with your actual Privyr webhook URL 
      const PRIVYR_WEBHOOK_URL = process.env.NEXT_PUBLIC_PRIVYR_WEBHOOK_URL;
      
      if (!PRIVYR_WEBHOOK_URL) {
        throw new Error('Privyr webhook URL is not configured');
      }

      // Send data to Privyr
      const response = await axios.post(PRIVYR_WEBHOOK_URL, privyrData);
      
      console.log('Privyr API Response:', response.data);
      
      // Reset the form on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        smsOptIn: false,
      });
      
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your information has been submitted successfully.'
      });
    } catch (error) {
      console.error('Error submitting to Privyr:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your information. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-700 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">SCOTT NOVAK - REAL ESTATE AGENT</h1>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white my-8 rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold text-teal-800 mb-10 pb-4 border-b-2 border-teal-700 text-center">
          Premarket Homes Portal
        </h1>

        <div className="pl-4 mb-8">
          <p className="text-gray-800 text-lg text-center">
            Get exclusive access to premarket properties in the Greater Sacramento Area!
          </p>
        </div>

        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300 text-center">
            Watch the Explainer Video
          </h2>
          <div className="aspect-video bg-blue-900 rounded-lg shadow">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/BJiyrpG0R40"
              title="Premarket Homes Explainer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300 text-center">
            Why Choose Us?
          </h2>
          <div className="pl-4">
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3 text-lg">•</span>
                <span>Exclusive access to premarket homes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3 text-lg">•</span>
                <span>Personalized service tailored to your needs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-3 text-lg">•</span>
                <span>Expert guidance through the buying process.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Form Section - MOVED UP */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300 text-center">
            Register for Access
          </h2>
          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div className="flex items-start mt-6 bg-gray-100 p-4 rounded-md border border-gray-200">
                <input
                  type="checkbox"
                  name="smsOptIn"
                  id="smsOptIn"
                  checked={formData.smsOptIn}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="smsOptIn" className="ml-3 block text-sm text-gray-700">
                  By checking this box, you agree to receive SMS text messages related to Customer Care and Marketing from Scott Novak Real Estate, you may reply STOP to opt-out at any time, reply HELP to 916-256-2154 for assistance, Messages and data rates may apply, Messaging frequency may vary (up to 4 messages per month). Please review our{' '}
                  <a href="/privacy" className="text-teal-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a> and{' '}
                  <a href="/smsterms" className="text-teal-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">terms and conditions</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-3 px-4 rounded-md hover:bg-teal-800 transition font-semibold text-lg mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {submitStatus && (
                <div className={`mt-4 p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </form>
        </section>

        {/* About Us Section - NOW AFTER REGISTER */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300 text-center">
            About Us
          </h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              Scott Novak Real Estate is dedicated to finding great deals on pre-market homes for buyers in the Greater Sacramento Area for the past four years, as well as selling their current home for the most money possible through target marketing.
            </p>
            <p className="mb-4 text-gray-800">
              We are dedicated to serving veterans, young families, retirees downsizing and others so that they may have the home of their dreams.
            </p>
            <p className="text-gray-800">
              We are brokered by eXp Realty of California, Inc.
            </p>
          </div>
        </section>

        {/* Privacy Policy Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300 text-center">
            Privacy Policy
          </h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              We collect only essential information (name, email, phone) to provide you with real estate services. 
              Your data is protected with reasonable security measures and will never be shared with third parties 
              for marketing purposes.
            </p>
            <p className="mb-4 text-gray-800">
              You have the right to access, correct, delete, or object to the processing of your personal information. 
              To exercise these rights, simply reply to any of our communications with specific keywords like &ldquo;ACCESS&rdquo;, &ldquo;DELETE&rdquo;, 
              or &ldquo;CORRECTION&rdquo;.
            </p>
            <div className="text-center mt-6">
              <a href="/privacy" className="inline-block bg-gray-200 hover:bg-gray-300 text-teal-700 font-semibold py-2 px-4 rounded transition">
                View Full Privacy Policy
              </a>
            </div>
          </div>
        </section>

        {/* Terms and Conditions Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300 text-center">
            Terms and Conditions
          </h2>
          <div className="pl-4">
            <p className="mb-4 text-gray-800">
              Our terms cover how we communicate with you via SMS, phone, and email. By providing your contact 
              information, you consent to receive communications related to real estate services.
            </p>
            <p className="mb-4 text-gray-800">
              For SMS messages, you may receive up to 4 messages per month. Standard message and data rates may apply. 
              You can opt out at any time by replying &ldquo;STOP&rdquo; to any text message or following our other opt-out procedures 
              for phone and email communications.
            </p>
            <div className="text-center mt-6">
              <a href="/smsterms" className="inline-block bg-gray-200 hover:bg-gray-300 text-teal-700 font-semibold py-2 px-4 rounded transition">
                View Full Terms and Conditions
              </a>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 pb-2 border-b border-gray-300 text-center">
            Contact Us
          </h2>
          <div className="pl-4">
            <div className="flex items-start mb-4">
              <div className="text-teal-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Phone:</h3>
                <p className="text-gray-800">Text or call: <a href="tel:9162562154" className="text-teal-600 hover:underline">916-256-2154</a></p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-teal-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p className="text-gray-800"><a href="mailto:scott@scottnovakrealestate.com" className="text-teal-600 hover:underline">scott@scottnovakrealestate.com</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pt-6 text-sm text-gray-700 border-t border-gray-300">
          <p>Last Updated: March 10, 2025</p>
          <p className="mt-2">All Rights Reserved | Scott Novak - Real Estate Agent - DRE#02189628</p>
          <p className="mt-2">Brokered by eXp Realty of Northern California, Inc. - DRE#02188495</p>
          <p className="mt-2">915 Highland Pointe Dr. STE 250 Roseville, CA 95678</p>
        </footer>
      </div>
    </main>
  );
}