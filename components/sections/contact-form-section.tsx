"use client";

import { useState } from "react";

import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const inquiryPoints = [
  "Website development and redesign",
  "Domain, hosting, and maintenance support",
  "SEO, graphics, and digital content work"
];

const serviceOptions = [
  "Website Development & Design",
  "Mobile App Development",
  "Domain Registration",
  "Web Hosting",
  "Search Engine Optimization",
  "Branding / Visual Design",
  "Video Editing",
  "Website Maintenance / Support"
];

export function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      type: "contact" as const,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service: String(formData.get("projectType") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong while sending the inquiry.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong while sending the inquiry.");
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <Card blur className="relative overflow-hidden">
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(155,201,255,0.84),transparent)]" />
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">Start a conversation</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
          Share the website or digital service you need, your target timeline, and the current setup if one already exists. This form now sends your inquiry directly so the conversation can start properly.
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" type="email" />
          </div>
          <Input placeholder="Business / Company Name" name="company" />
          <div className="relative">
            <Select name="projectType" defaultValue="">
              <option value="" disabled>
                Service Needed
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option} className="bg-[var(--background-elevated)] text-[var(--text)]">
                  {option}
                </option>
              ))}
            </Select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]">
              ▼
            </span>
          </div>
          <Textarea placeholder="Tell me about the website, support, or digital service you need" name="message" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending Inquiry..." : "Request a Quote"}
            </Button>
            {status === "success" ? (
              <p className="text-sm text-emerald-400">Inquiry sent. I’ll receive it at both email addresses.</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-rose-400">{errorMessage}</p>
            ) : null}
          </div>
        </form>
      </Card>

      <div className="grid gap-6">
        <Card className="bg-white/3">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Direct Contact</p>
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-[var(--text-soft)]">Email</p>
              <a href={`mailto:${siteContent.email}`} className="mt-1 block text-lg text-[var(--text)]">
                {siteContent.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-[var(--text-soft)]">Phone</p>
              <a href={`tel:${siteContent.phone.replace(/\s+/g, "")}`} className="mt-1 block text-lg text-[var(--text)]">
                {siteContent.phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-[var(--text-soft)]">Location</p>
              <p className="mt-1 text-lg text-[var(--text)]">{siteContent.location}</p>
            </div>
          </div>
        </Card>

        <Card className="bg-white/3">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Good fit for</p>
          <div className="mt-5 space-y-3">
            {inquiryPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--border-subtle)] bg-white/4 px-4 py-3 text-sm text-[var(--text-soft)]">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
