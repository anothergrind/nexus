"use client";

import React, { useState } from "react";
import styles from "../styles/nexus_studio.module.css";

interface StepField {
  label: string;
  name: string;
  type: "text" | "select" | "textarea" | "file";
  placeholder?: string;
  options?: string[];
}

interface Step {
  title: string;
  fields: StepField[];
}

const steps: Step[] = [
  {
    title: "Author Information",
    fields: [
      { label: "Username", name: "username", type: "text", placeholder: "Use the username as preferred name" },
      { label: "Preferred Name", name: "preferredName", type: "text" },
    ],
  },
  {
    title: "Publication Information",
    fields: [
      { label: "Title", name: "title", type: "text" },
      { label: "Published date", name: "published_date", type: "text", placeholder: "YYYY-MM-DD" },
      { label: "Language", name: "language", type: "select", options: ["English", "French", "Spanish", "Other"] },
      { label: "Description", name: "description", type: "textarea" },

    ],
  },
  {
    title: "Upload",
    fields: [
      { label: "Upload Publication", name: "publication", type: "file" },
      { label: "Upload Cover", name: "cover", type: "file" },
      { label: "Upload Sample (optional)", name: "sample", type: "file" },
    ],
  },
];

export default function NexusStudioPage() {
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<Record<string, string | File | boolean | undefined>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" && files ? files[0] : type === "checkbox" ? checked : value,
    }));
    // If the checkbox is checked, set preferredName to username
    if (name === "useUsernameAsPreferred" && checked) {
      setForm((prev) => ({
        ...prev,
        preferredName: typeof prev.username === "string" ? prev.username : "",
      }));
    }
  };

  const handleNext = (): void => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = (): void => setStep((s) => Math.max(s - 1, 0));

  // Stepper/progress bar
  const renderStepper = () => (
    <div className={styles["studio-stepper"]}>
      {[0, 1, 2].map((i) => (
        <React.Fragment key={i}>
          <span
            className={
              step === i
                ? styles["studio-stepper-active"]
                : step > i
                ? styles["studio-stepper-complete"]
                : styles["studio-stepper-inactive"]
            }
          />
          {i < 2 && <span className={styles["studio-stepper-line"]} />}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={styles["studio-container"]}>
      <div className={styles["studio-card"]}>
        <div className={styles["studio-title"]}>NexusStudios</div>
        {renderStepper()}
        <div className={styles["studio-step-green"]}>{steps[step].title}</div>
        <form>
          {steps[step].fields.map((field) => (
            <div key={field.name} style={{ width: "100%", marginBottom: 18 }}>
              <label className={styles["studio-label"]}>{field.label}</label>
              {field.type === "text" && (
                <input
                  className={styles["studio-input-white"]}
                  type="text"
                  name={field.name}
                  value={typeof form[field.name] === "string" || typeof form[field.name] === "number" ? form[field.name] as string : ""}
                  onChange={handleChange}
                  placeholder={field.placeholder || ""}
                />
              )}
              {/* Checkbox for use username as preferred name */}
              {field.name === "username" && step === 0 && (
                <div className={styles["studio-checkbox-row"]}>
                  <input
                    type="checkbox"
                    id="useUsernameAsPreferred"
                    name="useUsernameAsPreferred"
                    checked={!!form.useUsernameAsPreferred}
                    onChange={handleChange}
                  />
                  <label htmlFor="useUsernameAsPreferred" className={styles["studio-checkbox-label"]}>
                    Use the username as preferred name
                  </label>
                </div>
              )}
              {field.type === "select" && (
                <select
                  className={styles["studio-select"]}
                  name={field.name}
                  value={typeof form[field.name] === "string" || typeof form[field.name] === "number" ? form[field.name] as string : ""}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {(field.options || []).map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              )}
              {field.type === "textarea" && (
                <textarea
                  className={styles["studio-textarea"]}
                  name={field.name}
                  value={typeof form[field.name] === "string" || typeof form[field.name] === "number" ? form[field.name] as string : ""}
                  onChange={handleChange}
                />
              )}
              {field.type === "file" && (
                <input
                  className={styles["studio-upload-input"]}
                  type="file"
                  name={field.name}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        </form>
        <div className={styles["studio-btn-row"]}>
          {step > 0 && (
            <button
              className={styles["studio-btn-outline"]}
              type="button"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              className={styles["studio-btn-filled"]}
              type="button"
              onClick={handleNext}
            >
              Continue
            </button>
          ) : (
            <button className={styles["studio-btn-filled"]} type="button" disabled>
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
