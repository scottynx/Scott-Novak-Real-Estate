'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    smsOptIn: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here we'll add the API submission logic later
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
      <header className="bg-teal-700 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">SCOTT NOVAK REAL ESTATE</h1>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-6 sm:p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">Welcome to the Premarket Homes Portal</h2>
          <div className="text-gray-800">
            Get exclusive access to premarket properties in the Greater Sacramento Area!
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black text-center mb-4">Watch the Explainer Video</h3>
          <div className="aspect-video bg-blue-900 rounded-lg">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/BJiyrpG0R40"
              title="Premarket Homes Explainer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black text-center mb-4">Why Choose Us?</h3>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              <span>Exclusive access to premarket homes.</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              <span>Personalized service tailored to your needs.</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              <span>Expert guidance through the buying process.</span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                name="smsOptIn"
                id="smsOptIn"
                checked={formData.smsOptIn}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="smsOptIn" className="ml-2 block text-sm text-gray-700">
              By checking this box, you agree to receive SMS text messages related to Customer Care and Marketing from Scott Novak Real Estate, you may reply STOP to opt-out at any time, reply HELP to 916-256-2154 for asssistance, Messages and data rates may apply, Messaging frequency may vary, this is my privacy policy {' '}
                <a href="https://www.scottnovakrealestate.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a> and{' '}
                <a href="https://www.scottnovakrealestate.com/smsterms" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">terms and conditions</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 transition"
            >
              Submit
            </button>

            <div className="text-sm text-gray-800 text-center mt-4">
              We will never share, trade, or otherwise sell your personal information such as phone numbers and SMS consent to third parties under any circumstances. See our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> for more information.
            </div>
          </div>
        </form>

        {/* Footer */}
        <footer className="text-center mt-8 text-sm text-gray-700">
          <p>ALL RIGHTS RESERVED | SCOTT NOVAK REAL ESTATE</p>
          <p>DRE #01985628  | ND Real Estate Investors LLC</p>
        </footer>
      </div>
    </main>
  );
}