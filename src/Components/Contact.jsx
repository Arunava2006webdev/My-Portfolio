import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xaeyvqlr");
  if (state.succeeded) {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400">
          Message Sent!
        </h2>

        <p className="text-gray-400 mt-4">
          Thank you for contacting me. I'll get back to you soon.
        </p>
      </div>
    </section>
  );
}
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-cyan-400 font-semibold mb-2">
          Get In Touch
        </p>

        <h2 className="text-4xl font-bold mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's Work Together
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              I'm open to discussing opportunities, projects,
              internships, and collaborations.
            </p>

            <div className="space-y-4">
              <p>
                <span className="text-cyan-400">Email:</span>{" "}
                <a
                 href="mailto:arunava@gmail.com"
                 className="hover:text-cyan-400"
                 >
                 mandalarunava638@gmail.com
               </a>
              </p>

              <p>
                 <span className="text-cyan-400">GitHub:</span>{" "}
               <a
                href="https://github.com/Arunava2006webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
                >
               github.com/Arunava2006webdev
               </a>
              </p>

              <p>
                <span className="text-cyan-400">LinkedIn:</span>{" "}
                <a 
                href="https://www.linkedin.com/in/arunava-mandal-891a50307/ "
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
                >
                    linkedin.com/in/arunava mandal
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
  type="text"
  name="name"
  placeholder="Your Name"
  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
/>

<input
  type="email"
  name="email"
  placeholder="Your Email"
  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
/>

<textarea
  name="message"
  rows="5"
  placeholder="Your Message"
  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
></textarea>
  <button
  type="submit"
  disabled={state.submitting}
  className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition disabled:opacity-50"
>
  {state.submitting ? "Sending..." : "Send Message"}
</button>

          </form>

        </div>
      </div>
    </section>
  );
}