"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/ui/Container";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-surface-white border border-border-subtle rounded-lg p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
          <MaterialIcon name="check_circle" className="text-success text-4xl" filled />
        </div>
        <h3 className="font-headline-md text-headline-md text-text-primary">
          Thanks — we'll be in touch
        </h3>
        <p className="font-body-md text-body-md text-text-muted mt-2">
          We review every application and will reply within five business days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="bg-surface-white border border-border-subtle rounded-lg p-8 flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Mobile" name="mobile" type="tel" />
        <Field label="Subject" name="subject" />
      </div>
      <Field label="Website / Portfolio" name="website" type="url" />
      <Field label="Short info about you" name="about" textarea />
      <div className="flex flex-col gap-2">
        <label className="font-label-md text-label-md text-text-primary">
          Resume
        </label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="block w-full font-body-md text-body-md file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:font-label-md file:text-label-md file:bg-primary-container file:text-white hover:file:bg-primary"
        />
      </div>
      <button
        type="submit"
        className="self-start font-label-md text-label-md bg-primary-container text-white px-8 py-3 rounded hover:bg-primary transition-colors"
      >
        Send Application
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
        <textarea name={name} rows={4} className={base} required={required} />
      ) : (
        <input name={name} type={type} className={base} required={required} />
      )}
    </label>
  );
}
