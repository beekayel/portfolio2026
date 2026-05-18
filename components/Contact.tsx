"use client";

import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("xpqyabqp");

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-24 py-28 md:py-32 border-t border-[var(--color-line)]"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="eyebrow mb-3">Contact</div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] leading-[1.05] mb-5">
            Let's talk!{" "}
            <span className="text-[var(--color-bronze-deep)]">
              I'm always open to exciting opportunities.
            </span>
          </h2>
          <p className="text-[var(--color-text-dim)] max-w-2xl mx-auto text-[1.05rem] leading-[1.6]">
            Open to <span className="text-[var(--color-text)] font-medium">SEO</span> and{" "}
            <span className="text-[var(--color-text)] font-medium">Product</span> roles. Vienna
            preferred, fully EU remote also considered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass-strong rounded-3xl p-7 md:p-10"
        >
          {state.succeeded ? (
            <div className="text-center py-10">
              <div className="eyebrow mb-3">Thanks</div>
              <p className="display text-3xl md:text-4xl text-[var(--color-text)] mb-3">
                Message received.
              </p>
              <p className="text-[var(--color-text-dim)]">
                I'll get back to you within a day or two.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" type="text" required state={state} />
                <Field label="Email" name="email" type="email" required state={state} />
              </div>
              <Field label="Company / role" name="company" type="text" state={state} />
              <Field label="Message" name="message" textarea required state={state} />

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending…" : "Send message"}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[var(--color-line)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] tracking-[0.22em] uppercase text-[var(--color-text-low)] mono">
          <span>© 2026 Dan Hodeanu · Vienna</span>
          <div className="flex items-center gap-5">
            <a
              className="hover:text-[var(--color-bronze-deep)] transition"
              href="https://linkedin.com/in/danhodeanu"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="hover:text-[var(--color-bronze-deep)] transition"
              href="https://horologius.com"
              target="_blank"
              rel="noreferrer"
            >
              Horologius ↗
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  state
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  state: { errors?: React.ComponentProps<typeof ValidationError>["errors"] };
}) {
  const base =
    "w-full bg-white/55 hover:bg-white/70 focus:bg-white/85 border border-[var(--color-line-strong)] focus:border-[var(--color-bronze)] rounded-xl outline-none px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-text-low)] transition-colors";
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.12em] uppercase text-[var(--color-text-dim)] mb-1.5 font-medium">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} placeholder=" " />
      ) : (
        <input name={name} type={type} required={required} className={base} placeholder=" " />
      )}
      <ValidationError
        prefix={label}
        field={name}
        errors={state.errors ?? null}
        className="text-xs text-red-600 mt-1 block"
      />
    </label>
  );
}
