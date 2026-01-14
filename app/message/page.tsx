"use client";

import { useState } from "react";

export default function MessagePage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-8 py-16 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Send a Message</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="px-4 py-2 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="px-4 py-2 border rounded" required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="px-4 py-2 border rounded" rows={5} required />
        <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Send Message</button>
      </form>
    </div>
  );
}
