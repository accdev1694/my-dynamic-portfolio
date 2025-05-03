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
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_USER_ID)
      .then((res) => {
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
      className="relative min-h-screen pt-12 flex flex-col items-center justify-center gap-12 text-center"
    >
      <HeadingOne text="Get in Touch" />
      <form onSubmit={handleSubmit} className="w-full flex gap-7">
      <input type="hidden" name="to_name" value="RecipientNameOrSite" />
        <fieldset className="border border-gray-700 rounded-xl w-[65%] p-4 pt-6 flex flex-col gap-4">
          <legend className="font-bold text-xs px-3 tracking-[1px]">
            PERSONAL INFORMATION
          </legend>

          <fieldset className="flex justify-center rounded-xl items-center flex-col gap-2 bg-gray-700/50 py-4">
            <legend className="w-[50%] text-[0.6em] text-[var(--color-accent-dark)] font-bold tracking-[1px]">
              <h3 className="bubble-slow  inline-block py-1 px-6 rounded-full bg-gray-800 border border-gray-600">
                ✍🏿 NAME:
              </h3>
            </legend>
            <input
              className="w-[80%] text-center  focus:outline-none rounded-full border border-gray-600 p-2 bg-[var(--color-bg)] hover:bg-gray-800"
              type="text"
              name="name"
              value={formData.name}
              id="name"
              placeholder="John Doe"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </fieldset>
          <fieldset className="flex justify-center rounded-xl items-center flex-col gap-2 bg-gray-700/50 py-4">
            <legend className="text-[0.6em] text-[var(--color-accent-dark)] font-bold tracking-[1px]">
              <h3 className="bubble inline-block py-1 px-6 rounded-full border bg-gray-800 border-gray-600">
                ✉️ EMAIL:
              </h3>
            </legend>
            <input
              className="w-[80%] text-center  focus:outline-none rounded-full border border-gray-600 p-2 bg-[var(--color-bg)] hover:bg-gray-800"
              type="email"
              name="email"
              value={formData.email}
              id="email"
              placeholder="johndoe@ymail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </fieldset>
        </fieldset>
        <div className="flex flex-col justify-between w-[35%]">
          <fieldset className="border border-gray-700 rounded-xl p-4 flex flex-col gap-4">
            <legend className="font-bold text-xs px-3 tracking-[1px]">
              LEAVE A NOTE
            </legend>
            <textarea
              className="focus:outline-none  h-36"
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
          <button className="w-full bg-[var(--color-accent)] text-white font-bold text-xs md:text-sm py-3 rounded-md hover:bg-transparent transition duration-300 ease-in-out w-[35%] border border-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_10px_4px_var(--color-accent)]">
            SUBMIT FORM
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
