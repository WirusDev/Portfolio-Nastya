"use client";

import React, { useState } from "react";
import Link from "next/link";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setStatus("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <Link href='/' className='btn btn-accent mb-4'>
        Back
      </Link>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium'>
            Name
          </label>
          <input
            id='name'
            type='text'
            className='input input-bordered w-full'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>
          <input
            id='email'
            type='email'
            className='input input-bordered w-full'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='message' className='block text-sm font-medium'>
            Message
          </label>
          <textarea
            id='message'
            className='textarea textarea-bordered w-full'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Send
        </button>
      </form>
      {status && <p className='mt-4 text-sm'>{status}</p>}
    </div>
  );
};

export default ContactPage;
