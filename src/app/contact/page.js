// 'use client'
// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

// function ContactForm() {
//   const [state, handleSubmit] = useForm("mqewenon");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <ContactForm />
//   );
// }

// export default App;


'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqewenon");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center p-5 bg-linear-to-br from-indigo-500 to-purple-600">
        <div className="bg-white rounded-2xl p-10 text-center max-w-md w-full shadow-2xl animate-fadeIn">
          <div className="w-20 h-20 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-5 text-white text-3xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600">Thanks for joining! We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-linear-to-br from-gray-950 to-gray-950">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-linear-to-br from-sky-950 to-gray-950 text-white text-center px-8 py-10">
          <h1 className="text-3xl font-extrabold mb-2 uppercase font-[Mobile-Device1]">Contact Us</h1>
          <p className="text-[1vw] font-extrabold font-[anzo2] opacity-90 uppercase">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Email */}
          <div>
            <label className="block lg:text-[.8vw] text-[2.7vw] font-semibold text-gray-700 mb-2 capitalize font-[anzo1]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition text-black lg:text-[.8vw] text-[2.7vw]"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 lg:text-[.8vw] text-[2.7vw] capitalize font-[anzo1]">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message here..."
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm resize-y focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition text-black lg:text-[.8vw] text-[2.7vw]"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 bg-gray-950  text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed hover:bg-sky-950 lg:text-[.8vw] text-[3.5vw] font-[anzo1]"
          >
            {state.submitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;