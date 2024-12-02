import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate a successful submission
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto hand-drawn">
      {!submitted ? (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates and news delivered directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-[#cc4414]"
            />
            <button
              type="submit"
              className="bg-[#cc4414] text-white px-8 py-3 hand-drawn-random flex justify-center items-center gap-2 hover:bg-[#a33610] transition-colors">
              Subscribe
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#cc4414] mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600">
            You have successfully subscribed to our newsletter. Stay tuned for
            updates!
          </p>
        </div>
      )}
    </div>
  );
}

export default Newsletter;
