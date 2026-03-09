"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  calculatorCurrencies,
  calculatorServices,
  calculatorSupportOptions,
  calculatorTimelineOptions
} from "@/content/calculator";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type StepId = 1 | 2 | 3 | 4 | 5;

const steps: Array<{ id: StepId; label: string }> = [
  { id: 1, label: "Name" },
  { id: 2, label: "Currency" },
  { id: 3, label: "Services" },
  { id: 4, label: "Scope" },
  { id: 5, label: "Estimate" }
];

function formatMoney(amountPhp: number, currencyCode: string) {
  const currency = calculatorCurrencies.find((item) => item.code === currencyCode) ?? calculatorCurrencies[0];
  const converted = amountPhp * currency.rateFromPhp;

  return new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currency.code,
    maximumFractionDigits: 0
  }).format(converted);
}

function roundPhp(value: number) {
  return Math.round(value / 500) * 500;
}

type ServiceSelection = {
  service: (typeof calculatorServices)[number];
  scope: (typeof calculatorServices)[number]["scopes"][number];
  addons: (typeof calculatorServices)[number]["addons"];
  subtotalMin: number;
  subtotalMax: number;
};

export function BudgetCalculator() {
  const [step, setStep] = useState<StepId>(1);
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("PHP");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedScopes, setSelectedScopes] = useState<Record<string, string>>({});
  const [selectedAddons, setSelectedAddons] = useState<Record<string, string[]>>({});
  const [timeline, setTimeline] = useState(calculatorTimelineOptions[0].id);
  const [supportMode, setSupportMode] = useState(calculatorSupportOptions[1].id);

  const selectedCurrency = calculatorCurrencies.find((item) => item.code === currency) ?? calculatorCurrencies[0];
  const selectedTimeline = calculatorTimelineOptions.find((item) => item.id === timeline) ?? calculatorTimelineOptions[0];
  const selectedSupport = calculatorSupportOptions.find((item) => item.id === supportMode) ?? calculatorSupportOptions[0];

  const canContinueName = name.trim().length > 1;
  const canContinueServices = selectedServices.length > 0;
  const canContinueScope = selectedServices.every((slug) => selectedScopes[slug]);

  const serviceSelections = useMemo<ServiceSelection[]>(() => {
    return selectedServices.map((slug) => {
      const service = calculatorServices.find((item) => item.slug === slug);
      if (!service) return null;

      const scope = service.scopes.find((item) => item.id === selectedScopes[slug]) ?? service.scopes[0];
      const addonIds = selectedAddons[slug] ?? [];
      const addons = service.addons.filter((item) => addonIds.includes(item.id));

      const baseMin = service.baseRangePhp[0] * scope.multiplier;
      const baseMax = service.baseRangePhp[1] * scope.multiplier;
      const addonTotal = addons.reduce((total, addon) => total + addon.pricePhp, 0);

      return {
        service,
        scope,
        addons,
        subtotalMin: baseMin + addonTotal,
        subtotalMax: baseMax + addonTotal
      };
    }).filter((item): item is ServiceSelection => item !== null);
  }, [selectedAddons, selectedScopes, selectedServices]);

  const estimate = useMemo(() => {
    const subtotalMin = serviceSelections.reduce((total, item) => total + item.subtotalMin, 0);
    const subtotalMax = serviceSelections.reduce((total, item) => total + item.subtotalMax, 0);
    const bundleDiscount = selectedServices.length >= 2 ? 0.06 : 0;
    const multiplier = 1 + selectedTimeline.multiplier + selectedSupport.multiplier - bundleDiscount;

    return {
      subtotalMin: roundPhp(subtotalMin),
      subtotalMax: roundPhp(subtotalMax),
      totalMin: roundPhp(subtotalMin * multiplier),
      totalMax: roundPhp(subtotalMax * multiplier),
      bundleDiscount
    };
  }, [selectedServices.length, selectedSupport.multiplier, selectedTimeline.multiplier, serviceSelections]);

  const quoteHref = useMemo(() => {
    if (serviceSelections.length === 1) {
      return `/request-quote?service=${serviceSelections[0].service.quoteKey}`;
    }

    return "/request-quote";
  }, [serviceSelections]);

  const toggleService = (slug: string) => {
    setSelectedServices((current) => {
      if (current.includes(slug)) {
        const next = current.filter((item) => item !== slug);
        return next;
      }

      return [...current, slug];
    });

    setSelectedScopes((current) => {
      if (current[slug]) return current;
      const service = calculatorServices.find((item) => item.slug === slug);
      if (!service) return current;
      return { ...current, [slug]: service.scopes[0].id };
    });
  };

  const toggleAddon = (slug: string, addonId: string) => {
    setSelectedAddons((current) => {
      const existing = current[slug] ?? [];
      const next = existing.includes(addonId)
        ? existing.filter((item) => item !== addonId)
        : [...existing, addonId];

      return { ...current, [slug]: next };
    });
  };

  return (
    <div className="space-y-8">
      <Card blur className="relative overflow-hidden">
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(155,201,255,0.84),transparent)]" />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Budget Calculator</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Step {step} of {steps.length}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {steps.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]",
                  item.id === step
                    ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)] text-[var(--text)]"
                    : "border-[var(--border)] text-[var(--text-soft)]"
                )}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            {step === 1 ? (
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                  What should I call you?
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
                  Start with the name you want the experience to use. It helps this feel a bit more human.
                </p>
                <div className="mt-6 max-w-xl">
                  <Input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Type the name you want me to use"
                  />
                </div>
                <div className="mt-8 flex justify-end">
                  <Button type="button" onClick={() => canContinueName && setStep(2)} disabled={!canContinueName}>
                    Continue
                  </Button>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                  Nice to meet you, {name.trim() || "there"}.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
                  Which currency should the estimate use? You can switch it anytime before the final summary.
                </p>
                <div className="mt-6 max-w-xl">
                  <Select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    {calculatorCurrencies.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code} · {item.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="mt-8 flex justify-between gap-3">
                  <Button type="button" variant="ghost" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)}>
                    Continue
                  </Button>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                  Which services are you exploring?
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
                  You can choose more than one. This is meant for real bundled projects, not a one-service-only funnel.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {calculatorServices.map((service) => {
                    const active = selectedServices.includes(service.slug);

                    return (
                      <button
                        key={service.slug}
                        type="button"
                        onClick={() => toggleService(service.slug)}
                        className={cn(
                          "rounded-[1.5rem] border p-5 text-left transition duration-200",
                          active
                            ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)] shadow-[0_16px_40px_rgba(41,118,255,0.08)]"
                            : "border-[var(--border)] bg-white/4 hover:border-[var(--border-strong)]"
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{service.title}</p>
                            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{service.summary}</p>
                          </div>
                          <div
                            className={cn(
                              "mt-1 h-5 w-5 rounded-full border",
                              active ? "border-[var(--primary)] bg-[var(--primary)]" : "border-[var(--border-strong)]"
                            )}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-between gap-3">
                  <Button type="button" variant="ghost" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button type="button" onClick={() => canContinueServices && setStep(4)} disabled={!canContinueServices}>
                    Shape My Package
                  </Button>
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                  Let&apos;s shape the scope
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
                  Pick the level that feels closest to what you need. Add-ons are optional and only there when they make sense.
                </p>
                <div className="mt-6 space-y-5">
                  {selectedServices.map((slug) => {
                    const service = calculatorServices.find((item) => item.slug === slug);
                    if (!service) return null;

                    return (
                      <div key={service.slug} className="rounded-[1.6rem] border border-[var(--border)] bg-white/4 p-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-xl font-semibold tracking-[-0.03em] text-[var(--text)]">{service.title}</p>
                            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{service.summary}</p>
                          </div>
                          <Badge>{service.shortLabel}</Badge>
                        </div>

                        <div className="mt-5 grid gap-3">
                          {service.scopes.map((scope) => (
                            <button
                              key={scope.id}
                              type="button"
                              onClick={() => setSelectedScopes((current) => ({ ...current, [service.slug]: scope.id }))}
                              className={cn(
                                "rounded-[1.25rem] border p-4 text-left transition",
                                selectedScopes[service.slug] === scope.id
                                  ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)]"
                                  : "border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--border-strong)]"
                              )}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-base font-semibold text-[var(--text)]">{scope.label}</p>
                                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{scope.description}</p>
                                </div>
                                <span className="text-sm text-[var(--text-soft)]">
                                  {formatMoney(service.baseRangePhp[0] * scope.multiplier, selectedCurrency.code)}+
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>

                        {service.addons.length > 0 ? (
                          <div className="mt-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">Optional add-ons</p>
                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                              {service.addons.map((addon) => {
                                const active = (selectedAddons[service.slug] ?? []).includes(addon.id);

                                return (
                                  <button
                                    key={addon.id}
                                    type="button"
                                    onClick={() => toggleAddon(service.slug, addon.id)}
                                    className={cn(
                                      "rounded-[1.25rem] border p-4 text-left transition",
                                      active
                                        ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)]"
                                        : "border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--border-strong)]"
                                    )}
                                  >
                                    <p className="text-sm font-semibold text-[var(--text)]">{addon.label}</p>
                                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{addon.description}</p>
                                    <p className="mt-3 text-sm text-[var(--primary-strong)]">
                                      + {formatMoney(addon.pricePhp, selectedCurrency.code)}
                                    </p>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-between gap-3">
                  <Button type="button" variant="ghost" onClick={() => setStep(3)}>
                    Back
                  </Button>
                  <Button type="button" onClick={() => canContinueScope && setStep(5)} disabled={!canContinueScope}>
                    See My Estimate
                  </Button>
                </div>
              </div>
            ) : null}

            {step === 5 ? (
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                  {name.trim() ? `${name.trim()}, here is your working estimate.` : "Here is your working estimate."}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
                  Use this as a practical budget direction. If the mix looks right, the next step is turning it into a tailored quote with your real project details.
                </p>

                <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/4 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary-strong)]">Project pace</p>
                      <div className="mt-4 grid gap-3">
                        {calculatorTimelineOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setTimeline(option.id)}
                            className={cn(
                              "rounded-[1.2rem] border p-4 text-left transition",
                              timeline === option.id
                                ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)]"
                                : "border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--border-strong)]"
                            )}
                          >
                            <p className="text-sm font-semibold text-[var(--text)]">{option.label}</p>
                            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{option.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/4 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary-strong)]">Support level</p>
                      <div className="mt-4 grid gap-3">
                        {calculatorSupportOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setSupportMode(option.id)}
                            className={cn(
                              "rounded-[1.2rem] border p-4 text-left transition",
                              supportMode === option.id
                                ? "border-[var(--primary)] bg-[rgba(86,168,255,0.12)]"
                                : "border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--border-strong)]"
                            )}
                          >
                            <p className="text-sm font-semibold text-[var(--text)]">{option.label}</p>
                            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{option.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Estimated budget</p>
                        <p className="mt-2 text-sm text-[var(--text-muted)]">
                          Currency selected: <span className="text-[var(--text)]">{selectedCurrency.code}</span>
                        </p>
                      </div>
                      <Badge>{selectedServices.length} service{selectedServices.length > 1 ? "s" : ""}</Badge>
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-white/5 p-5">
                      <p className="text-sm text-[var(--text-soft)]">Working budget range</p>
                      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--text)] sm:text-4xl">
                        {formatMoney(estimate.totalMin, selectedCurrency.code)} to {formatMoney(estimate.totalMax, selectedCurrency.code)}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                        This includes the selected services, chosen scope levels, optional add-ons, your current timeline, and the support level you picked.
                      </p>
                    </div>

                    <div className="mt-6 space-y-3">
                      {serviceSelections.map((item) => (
                        <div key={item.service.slug} className="rounded-[1.2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-4">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <p className="font-semibold text-[var(--text)]">{item.service.title}</p>
                              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.scope.label}</p>
                            </div>
                            <p className="text-sm text-[var(--primary-strong)]">
                              {formatMoney(item.subtotalMin, selectedCurrency.code)} to {formatMoney(item.subtotalMax, selectedCurrency.code)}
                            </p>
                          </div>
                          {item.addons.length > 0 ? (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.addons.map((addon) => (
                                <Badge key={addon.id} className="bg-[rgba(255,255,255,0.04)]">
                                  {addon.label}
                                </Badge>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 text-sm text-[var(--text-muted)]">
                      <div className="flex items-center justify-between gap-3">
                        <span>Timeline</span>
                        <span className="text-[var(--text)]">{selectedTimeline.label}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span>Support</span>
                        <span className="text-[var(--text)]">{selectedSupport.label}</span>
                      </div>
                      {estimate.bundleDiscount > 0 ? (
                        <div className="flex items-center justify-between gap-3">
                          <span>Bundled project adjustment</span>
                          <span className="text-[var(--primary-strong)]">-6%</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href={quoteHref} className="sm:flex-1">
                        Turn This Into a Custom Quote
                      </ButtonLink>
                      <Button type="button" variant="secondary" className="sm:flex-1" onClick={() => setStep(3)}>
                        Adjust Services
                      </Button>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                      Want to go forward, {name.trim() || "there"}? Bring this estimate into the quote flow and I’ll shape it into a more exact proposal.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-between gap-3">
                  <Button type="button" variant="ghost" onClick={() => setStep(4)}>
                    Back
                  </Button>
                  <Link href="/services" className="inline-flex items-center text-sm font-semibold text-[var(--primary-strong)] transition hover:text-[var(--text)]">
                    Explore service details
                  </Link>
                </div>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </Card>

      <Card blur className="relative overflow-hidden">
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(155,201,255,0.84),transparent)]" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-strong)]">Estimator Experience</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--text)] sm:text-4xl">
              A warmer way to talk budget
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
              This calculator is built to feel more like a guided conversation than a pricing table. It gives a working estimate, not a rigid quote, so the next conversation starts from a smarter place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>Multi-service friendly</Badge>
              <Badge>Philippines + abroad</Badge>
              <Badge>Premium guided experience</Badge>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-[var(--border)] bg-white/4 p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-soft)]">How it works</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                <p>1. Start with your name so the flow feels more personal.</p>
                <p>2. Choose one or more services instead of forcing one generic path.</p>
                <p>3. Shape the scope and get a working estimate in your preferred currency.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/4 p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-soft)]">A note on the estimate</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                This gives you a realistic budget direction based on common service combinations. Final pricing still depends on scope, complexity, and the exact launch needs.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
