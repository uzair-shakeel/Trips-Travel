import React from "react";

const Contact = () => {
  return (
    <section className="md:min-h-screen">
      <div className="px-4 py-8 md:py-2 m-auto max-w-screen-md">
        <h2 className="heading text-center ">Contact Us</h2>
        <p className="mb-16 lg:mb-10 font-light text-center paragraph">
          Got any issue? Want to reach us? Let us know.
        </p>

        <form action="#" className="space-y-4">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@tmail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know about how can we help you?"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="form_label">
              Your Message
            </label>
            <textarea
              type="text"
              id="message"
              rows="2"
              placeholder="Leave a Message..."
              className="form_input mt-1"
            ></textarea>
          </div>

          <button className="btn w-full my-4">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
