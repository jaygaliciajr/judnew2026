"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ServiceKey =
  | "website"
  | "mobile-app"
  | "domain-hosting"
  | "seo"
  | "branding-video"
  | "maintenance";

const validServiceKeys = new Set<ServiceKey>([
  "website",
  "mobile-app",
  "domain-hosting",
  "seo",
  "branding-video",
  "maintenance"
]);

type StepQuestion = {
  key: string;
  label: string;
  options: string[];
};

const serviceOptions: Array<{
  key: ServiceKey;
  title: string;
  description: string;
}> = [
  {
    key: "website",
    title: "Website Development",
    description: "For new websites, redesigns, landing pages, and business sites."
  },
  {
    key: "mobile-app",
    title: "Mobile App Development",
    description: "For Android, iOS, or cross-platform mobile app projects."
  },
  {
    key: "domain-hosting",
    title: "Domain & Hosting",
    description: "For setup, transfer, fixes, access, DNS, SSL, and hosting support."
  },
  {
    key: "seo",
    title: "SEO Support",
    description: "For search visibility, on-page improvements, and search-ready structure."
  },
  {
    key: "branding-video",
    title: "Branding / Video",
    description: "For logos, graphics, promotional visuals, and video editing."
  },
  {
    key: "maintenance",
    title: "Website Maintenance",
    description: "For fixes, updates, support retainers, and post-launch improvements."
  }
];

const questionMap: Record<ServiceKey, StepQuestion[]> = {
  website: [
    {
      key: "website_type",
      label: "What kind of website do you need?",
      options: ["Business website", "Landing page", "E-commerce website", "Redesign"]
    },
    {
      key: "website_status",
      label: "What is the current status?",
      options: ["Starting from scratch", "I already have a website", "I have content ready", "Still planning"]
    },
    {
      key: "website_timeline",
      label: "What timeline feels right?",
      options: ["As soon as possible", "Within this month", "Within 1-3 months", "Just exploring"]
    }
  ],
  "mobile-app": [
    {
      key: "app_platform",
      label: "Which platform do you need?",
      options: ["Android", "iOS", "Both Android and iOS", "Not sure yet"]
    },
    {
      key: "app_stage",
      label: "Where are you in the process?",
      options: ["Idea stage", "Design ready", "Need full build", "Existing app needs update"]
    },
    {
      key: "app_timeline",
      label: "What timeline are you working with?",
      options: ["Urgent", "Within 1-2 months", "Within 3+ months", "Still exploring"]
    }
  ],
  "domain-hosting": [
    {
      key: "infra_need",
      label: "What do you need help with?",
      options: ["Domain registration", "Domain transfer", "Hosting setup", "SSL / DNS / email"]
    },
    {
      key: "infra_status",
      label: "Do you already have an existing setup?",
      options: ["Yes, but I need help fixing it", "No, I need everything set up", "Partially set up", "Not sure"]
    },
    {
      key: "infra_timeline",
      label: "How soon do you need this?",
      options: ["Urgent", "This week", "This month", "Flexible"]
    }
  ],
  seo: [
    {
      key: "seo_focus",
      label: "What is the main goal?",
      options: ["Rank better on Google", "Improve existing pages", "Set up SEO basics", "Need advice first"]
    },
    {
      key: "seo_site",
      label: "Do you already have a website?",
      options: ["Yes", "No", "It needs a redesign first", "It is still in progress"]
    },
    {
      key: "seo_timeline",
      label: "When do you want to start?",
      options: ["Right away", "Within this month", "In a few months", "Just gathering options"]
    }
  ],
  "branding-video": [
    {
      key: "creative_need",
      label: "What do you need most?",
      options: ["Logo / branding", "Graphics / banners", "Video editing", "Mixed creative support"]
    },
    {
      key: "creative_stage",
      label: "What is the current situation?",
      options: ["Starting fresh", "Refreshing old assets", "Need campaign materials", "Need ongoing support"]
    },
    {
      key: "creative_timeline",
      label: "What timeline feels best?",
      options: ["Urgent", "Within 2 weeks", "Within a month", "Flexible"]
    }
  ],
  maintenance: [
    {
      key: "support_need",
      label: "What kind of support do you need?",
      options: ["Bug fixes", "Content updates", "Design improvements", "Ongoing maintenance"]
    },
    {
      key: "support_status",
      label: "What is the current website status?",
      options: ["Live website", "Under development", "Broken / inaccessible", "Needs review first"]
    },
    {
      key: "support_timeline",
      label: "How urgent is it?",
      options: ["Urgent", "This week", "This month", "Flexible"]
    }
  ]
};

type ContactState = {
  name: string;
  email: string;
  company: string;
  details: string;
};

const initialContactState: ContactState = {
  name: "",
  email: "",
  company: "",
  details: ""
};

export function QuoteFlow() {
  const searchParams = useSearchParams();
  const [service, setService] = useState<ServiceKey | null>(null);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<ContactState>(initialContactState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const questions = useMemo(() => (service ? questionMap[service] : []), [service]);
  const selectedService = serviceOptions.find((item) => item.key === service);

  const canContinueFromStepOne = Boolean(service);
  const canContinueFromStepTwo = questions.every((question) => answers[question.key]);
  const canSubmit = service && contact.name && contact.email;

  useEffect(() => {
    const serviceParam = searchParams.get("service");

    if (!serviceParam || !validServiceKeys.has(serviceParam as ServiceKey)) return;

    const nextService = serviceParam as ServiceKey;

    setService((current) => (current === nextService ? current : nextService));
    setStep((current) => (current < 2 ? 2 : current));
  }, [searchParams]);

  const updateAnswer = (key: string, value: string) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!service || !canSubmit) return;

    const selectedServiceTitle = selectedService?.title ?? service;
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "quote",
          service: selectedServiceTitle,
          answers: questions.map((question) => ({
            label: question.label,
            value: answers[question.key] ?? ""
          })),
          name: contact.name,
          email: contact.email,
          company: contact.company,
          details: contact.details
        })
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong while sending the quote request.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong while sending the quote request.");
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <Card blur className="order-2 relative overflow-hidden lg:order-1">
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(155,201,255,0.84),transparent)]" />
        <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Quote Experience</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-[var(--text)]">
          Let&apos;s make this feel easy.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-muted)]">
          A few quick questions, shaped around the service you need, so the quote feels tailored instead of generic.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-3xl border border-[var(--border)] bg-white/4 p-5">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-soft)]">How this works</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
              <p>1. Pick the service you want help with.</p>
              <p>2. Answer a few relevant questions.</p>
              <p>3. Share your contact details and project notes.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-white/4 p-5">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-soft)]">Good vibe, clear scope</p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              The goal is a smoother experience for you and a clearer quote from my side, without sending you through a heavy form.
            </p>
          </div>
        </div>
      </Card>

      <Card blur className="order-1 relative overflow-hidden lg:order-2">
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(155,201,255,0.84),transparent)]" />
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Request a Quote</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Step {step} of 3</p>
          </div>
          <div className="h-2 w-28 rounded-full bg-white/7">
            <div
              className={cn(
                "h-2 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--primary-strong))] transition-all duration-300",
                step === 1 && "w-1/3",
                step === 2 && "w-2/3",
                step === 3 && "w-full"
              )}
            />
          </div>
        </div>

        {step === 1 ? (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">What do you need help with?</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Pick the closest option. The next questions will adjust to match it.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {serviceOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setService(option.key)}
                  className={cn(
                    "rounded-3xl border p-5 text-left transition duration-200",
                    service === option.key
                      ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)]"
                      : "border-[var(--border)] bg-white/4 hover:border-[var(--border-strong)]"
                  )}
                >
                  <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{option.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{option.description}</p>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="button" onClick={() => canContinueFromStepOne && setStep(2)} disabled={!canContinueFromStepOne}>
                Continue
              </Button>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">A few quick questions</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              These help shape the quote around what you actually need.
            </p>
            {selectedService ? (
              <div className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm text-[var(--text-soft)]">
                Service selected: <span className="ml-2 text-[var(--text)]">{selectedService.title}</span>
              </div>
            ) : null}
            <div className="mt-6 space-y-6">
              {questions.map((question) => (
                <div key={question.key}>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">{question.label}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => updateAnswer(question.key, option)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition duration-200",
                          answers[question.key] === option
                            ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)] text-[var(--text)]"
                            : "border-[var(--border)] bg-white/4 text-[var(--text-soft)] hover:border-[var(--border-strong)]"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between gap-3">
              <Button type="button" variant="ghost" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button type="button" onClick={() => canContinueFromStepTwo && setStep(3)} disabled={!canContinueFromStepTwo}>
                Continue
              </Button>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">Almost there</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Share your details and anything else I should know. The quote request will open in your email app ready to send.
            </p>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  placeholder="Name"
                  value={contact.name}
                  onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={contact.email}
                  onChange={(event) => setContact((current) => ({ ...current, email: event.target.value }))}
                />
              </div>
              <Input
                placeholder="Business / Company Name"
                value={contact.company}
                onChange={(event) => setContact((current) => ({ ...current, company: event.target.value }))}
              />
              <Textarea
                placeholder="Extra details, goals, budget range, references, or anything you want me to consider"
                value={contact.details}
                onChange={(event) => setContact((current) => ({ ...current, details: event.target.value }))}
              />
            </div>

            <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white/4 p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--primary-strong)]">Quick recap</p>
              <div className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                <p>
                  <span className="text-[var(--text-soft)]">Service:</span>{" "}
                  {selectedService?.title}
                </p>
                {questions.map((question) => (
                  <p key={question.key}>
                    <span className="text-[var(--text-soft)]">{question.label}</span> {answers[question.key]}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-between gap-3">
              <Button type="button" variant="ghost" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button type="button" onClick={handleSubmit} disabled={!canSubmit || status === "loading"}>
                {status === "loading" ? "Sending Quote Request..." : "Prepare My Quote Request"}
              </Button>
            </div>
            {status === "success" ? (
              <p className="mt-4 text-sm text-emerald-400">
                Quote request sent. It has been forwarded to both of your inboxes.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm text-rose-400">{errorMessage}</p>
            ) : null}
          </div>
        ) : null}
      </Card>
    </div>
  );
}
