import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
          <form>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="message">Message:</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded border resize-none focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
