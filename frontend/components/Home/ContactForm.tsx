"use client";

import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("idle");
      await axios.post("/api/mailroute", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-6">


        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-10 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-black mb-12 text-center">
            We&apos;ll get back
            to you as soon as possible.
          </p>
          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email or Phone*"
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring"
            />
            <button
              type="submit"
              className="hover:cursor-pointer w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </div>
          {status === "success" && (
            <p className="text-green-600 text-sm">
              Thank you. Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again or email us directly.
            </p>
          )}


        </form>
      </div>
    </section>
  );
};

export default ContactForm;
