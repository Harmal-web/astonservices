"use client";

import { useState, FormEvent } from "react";
import { company } from "@/lib/data";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const service = formData.get("service")?.toString();
    const message = formData.get("message")?.toString().trim();

    if (!name) newErrors.name = "Please enter your name";
    if (!email) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!phone) newErrors.phone = "Please enter a contact number";
    if (!service) newErrors.service = "Please select a service type";
    if (!message) newErrors.message = "Please tell us about your requirements";

    return newErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Integration point: replace with your form handling endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-sky-200 bg-sky-50 p-8 text-center"
        role="status"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
          <svg className="h-6 w-6 text-sky-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-ink-950">
          Thank you for your enquiry
        </h3>
        <p className="mt-2 text-sm text-ink-600">
          We have received your message and will respond as soon as possible. If your matter is urgent, please call us on{" "}
          <a href={`tel:${company.phoneRaw}`} className="font-medium text-sky-700 hover:underline">
            {company.phone}
          </a>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="input-field mt-1.5"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="input-field mt-1.5"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="label">
            Phone number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className="input-field mt-1.5"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="label">
            Service type <span className="text-red-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            className="input-field mt-1.5"
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="security">Security services</option>
            <option value="cleaning">Commercial cleaning</option>
            <option value="both">Both security and cleaning</option>
            <option value="other">Other enquiry</option>
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="label">
          Company / organisation
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className="input-field mt-1.5"
        />
      </div>

      <div>
        <label htmlFor="message" className="label">
          How can we help? <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="input-field mt-1.5 resize-y"
          placeholder="Tell us about your premises, the services you need, and any preferred timescales."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
          Something went wrong while sending your message. Please try again or call us on{" "}
          <a href={`tel:${company.phoneRaw}`} className="font-medium underline">
            {company.phone}
          </a>.
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          Fields marked with <span className="text-red-600">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary !px-8"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
