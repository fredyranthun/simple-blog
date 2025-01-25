// import ContactForm from './contact-form'

export default function Contact() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-white">Under Construction</h2>
        <p className="text-gray-300 mb-4">
          We&apos;re currently working on improving our contact form to serve you better.
        </p>
        <p className="text-gray-300">
          Please check back soon or reach out to us via email at{" "}
          <a href="mailto:contact@example.com" className="text-blue-400 hover:underline">
            contact@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
