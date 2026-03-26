"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thanks! We'll reach out to you shortly.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-20">

      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md border">

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Book a Free Consultation
        </h1>

        <p className="mt-3 text-gray-600 text-center text-sm">
          Tell us a little about your business and we’ll reach out.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e3a8a]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e3a8a]"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e3a8a]"
          />

          <textarea
            name="message"
            placeholder="Tell us about your business..."
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1e3a8a]"
          />

          <button
            type="submit"
            className="w-full bg-[#1e3a8a] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 active:scale-[0.98]"
          >
            Submit Request
          </button>

        </form>

      </div>

    </main>
  );
}