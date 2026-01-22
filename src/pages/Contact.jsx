// src/pages/Contact.jsx


const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container max-w-3xl px-6 mx-auto text-center">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Get in Touch
        </h1>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            We're here to help you navigate your legal challenges with clarity and confidence. Whether you have a question, a business concern, or a personal matter, our team is ready to listen.
          </p>
          <p>
            Reach out to us anytime at:
          </p>
          <a
            href="mailto:trustlexpartners@gmail.com"
            className="text-2xl font-semibold text-black transition-colors hover:text-gray-700"
          >
            trustlexpartners@gmail.com
          </a>
          
          {/* Placeholder for a future contact form */}
          {/* <form className="mt-12 text-left">
            // Form fields would go here
          </form> 
          */}
        </div>
      </div>
    </div>
  );
};

export default Contact;