/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import contact from "../../../public/contact.json";
import Swal from "sweetalert2";

const ContactInfo = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank you!",
      text: "Your message has been sent successfully!",
      icon: "success",
      confirmButtonText: "Close",
    });
    e.target.reset();
  }

  return (
    <div className=" mb-16">
        <div className="">
            <h1 className="text-3xl lg:text-4xl font-semibold my-4 mb-2 text-center">Contact</h1>
        </div>
      <div className="grid grid-cols-1 gap-24 px-5 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 ">
        {/* Left Section: Animation */}
        <div className="flex flex-col justify-center items-center md:order-2">
          <Lottie animationData={contact} className="w-full " />
        </div>

        {/* Right Section: Contact Form */}
        <form onSubmit={handleSubmit}
          noValidate=""
          className="space-y-6 border border-yellow-500 p-4 lg:p-8 rounded-lg w-full  "
        >
          <div className="space-y-2 mt-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-black ">
              Let's talk!
            </h2>
            <p className="text-gray-900 pt-2 ">
              We'd love to hear from you. Fill out the form below to get in touch.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-base font-semibold text-black">
              Full Name :
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 mt-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-base font-semibold text-black">
              Email Address :
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 mt-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="text-base font-semibold text-black">
              Your Message :
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here"
              className="w-full p-3 mt-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide text-white uppercase bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
