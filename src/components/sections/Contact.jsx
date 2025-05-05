import HeadingOne from "../HeadingOne";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  // console.log(emailjs);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Success");
        setFormData({ name: "", email: "", message: "" });
        
      })
      .catch((err) => {
        alert("'Something's not right");
        console.error(err);
      });
  };

  return (
    <section
      id="my-contacts"
      className="relative min-h-screen lg:pt-12 flex flex-col items-center justify-center gap-6 lg:gap-12 text-center w-full"
    >
      <HeadingOne text="Get in Touch" />
      <form onSubmit={handleSubmit} className="w-full flex flex-col lg:flex-row gap-7 lg:gap-12">
        <input type="hidden" name="to_name" value="RecipientNameOrSite" />
        <fieldset className="border border-gray-700 rounded-xl lg:w-[65%] p-4 lg:p-8 pt-6 flex flex-col gap-4 lg:gap-6">
          <legend className="font-bold text-xs px-3 tracking-[1px]">
            PERSONAL INFORMATION
          </legend>

          <fieldset className="flex justify-center rounded-xl items-center flex-col gap-2 bg-gray-700/50 py-4 lg:py-8">
            <legend className="w-[50%] text-[0.6em] text-[var(--color-accent-dark)] font-bold tracking-[1px]">
              <h3 className="bubble-slow  inline-block py-1 px-6 rounded-full bg-gray-800 border border-gray-600">
                ✍🏿 NAME:
              </h3>
            </legend>
            <input
              className="w-[90%] text-xs md:text-lg lg:text-xl text-center focus:outline-none rounded-full border border-gray-600 py-2 lg:py-4 bg-[var(--color-bg)] hover:bg-gray-800"
              type="text"
              name="from_name"
              value={formData.name}
              id="name"
              placeholder="John Doe"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </fieldset>
          <fieldset className="flex justify-center rounded-xl items-center flex-col gap-2 bg-gray-700/50 py-4 lg:py-8">
            <legend className="text-[0.6em] text-[var(--color-accent-dark)] font-bold tracking-[1px]">
              <h3 className="bubble inline-block py-1 px-6 rounded-full border bg-gray-800 border-gray-600">
                ✉️ EMAIL:
              </h3>
            </legend>
            <input
              className="w-[90%] text-center text-xs md:text-lg lg:text-xl focus:outline-none rounded-full border border-gray-600 py-2 lg:py-4 bg-[var(--color-bg)] hover:bg-gray-800"
              type="email"
              name="email"
              value={formData.email}
              id="email"
              placeholder="johndoe@yahoomail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </fieldset>
        </fieldset>
        <div className="flex flex-col justify-between lg:w-[35%] gap-4">
          <fieldset className="border border-gray-700 rounded-xl p-4 flex flex-col gap-4">
            <legend className="font-bold text-xs px-3 tracking-[1px]">
              LEAVE A NOTE
            </legend>
            <textarea
              className="focus:outline-none lg:text-xl h-36 lg:h-70"
              name="message"
              id="message"
              value={formData.message}
              rows={10}
              placeholder="Type Something here..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
          </fieldset>
          <button className="w-full bg-[var(--color-accent)] text-white font-bold text-xs md:text-sm lg:text-lg py-3 rounded-md hover:bg-transparent transition duration-300 ease-in-out  border border-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_10px_4px_var(--color-accent)]">
            SUBMIT FORM
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
