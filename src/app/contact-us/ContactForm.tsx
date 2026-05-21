"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/ui/Container";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-surface-white border border-border-subtle rounded-lg p-10 text-center">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-success/10 flex items-center justify-center">
          <MaterialIcon name="mark_email_read" className="text-success text-3xl" filled />
        </div>
        <h3 className="font-headline-md text-headline-md text-text-primary">
          Message sent
        </h3>
        <p className="font-body-md text-body-md text-text-muted mt-2">
          We'll reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Mobile" name="mobile" type="tel" />
        <Field label="Company website" name="website" type="url" />
      </div>
      <Field label="Subject" name="subject" required />
      <Field label="Message" name="message" textarea required />
      <button
        type="submit"
        className="self-start font-label-md text-label-md bg-primary-container text-white px-8 py-3 rounded hover:bg-primary transition-colors"
      >
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full font-body-md text-body-md px-4 py-3 rounded border border-border-subtle bg-surface-white text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
  return (
    <label className="flex flex-col gap-2">
      <span className="font-label-md text-label-md text-text-primary">
        {label} {required && <span className="text-error">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} className={base} required={required} />
      ) : (
        <input name={name} type={type} className={base} required={required} />
      )}
    </label>
  );
}
