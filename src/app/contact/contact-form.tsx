"use client";

import { useRef, useState } from "react";
import { submitContactForm } from "../actions";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData);
    if (result.success) {
      setIsSubmitted(true);
      formRef.current?.reset();
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Thank you for your message!</h2>
        <p className="text-gray-300">We&apos;ve received your information and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
