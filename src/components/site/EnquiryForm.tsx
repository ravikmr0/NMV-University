import { useState, type FormEvent } from "react";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "mobile", label: "Mobile Number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "state", label: "State", type: "text", required: false },
  { name: "city", label: "City", type: "text", required: false },
  { name: "preferredCourse", label: "Preferred Course", type: "text", required: false },
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-md border border-border bg-surface p-8">
        <h3 className="text-xl font-semibold">Thank you for your enquiry</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Your details have been recorded on this page. Delivery of enquiries to the university's
          admissions team will be enabled once an official email or admissions system is connected.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-md border border-border bg-card p-6 shadow-card lg:p-8"
      aria-labelledby="enquiry-heading"
    >
      <h3 id="enquiry-heading" className="text-xl font-semibold">
        Admission Enquiry
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.name === "name" ? "sm:col-span-2" : ""}>
            <label htmlFor={f.name} className="block text-sm font-medium">
              {f.label}
              {f.required && <span className="text-destructive"> *</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              className="mt-1.5 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="program" className="block text-sm font-medium">
            Program
          </label>
          <select
            id="program"
            name="program"
            className="mt-1.5 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm"
          >
            <option>B.Sc. (Hons.) Agriculture</option>
            <option>Other / Not decided</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm"
          />
        </div>

        <div className="flex items-start gap-3 sm:col-span-2">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 size-4 rounded-sm border-input"
          />
          <label htmlFor="consent" className="text-sm text-muted-foreground">
            I consent to NMV University contacting me about admissions and I agree to the privacy
            policy.
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
