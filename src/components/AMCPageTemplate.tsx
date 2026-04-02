import { useState } from "react";
import type { ElementType } from "react";
import {
  CheckCircle,
  ArrowLeft,
  Phone,
  ChevronDown,
  ChevronUp,
  X,
  Star,
  MapPin,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";
import logoImg from "figma:asset/eb512c399380dc0d7f2c91ba581d523880a08201.png";

export interface AMCPlan {
  name: string;
  price: string;
  monthlyEquiv?: string;
  period: string;
  description: string;
  bestFor?: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  badge?: string;
}

export interface ServiceCategory {
  icon: ElementType;
  title: string;
  items: string[];
}

export interface AMCBenefit {
  icon: ElementType;
  title: string;
  description: string;
  stat?: string;
}

export interface AMCFAQ {
  question: string;
  answer: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

interface AMCPageTemplateProps {
  onBack: () => void;
  onBookNow: () => void;
  pageIcon: ElementType;
  badge: string;
  title: string;
  subtitle: string;
  heroStats?: HeroStat[];
  plans: AMCPlan[];
  servicesIncluded: ServiceCategory[];
  benefits: AMCBenefit[];
  faqs: AMCFAQ[];
  processSteps?: ProcessStep[];
  ctaTitle: string;
  ctaSubtitle: string;
  primaryCta: string;
  footerNote?: string;
}

export function AMCPageTemplate({
  onBack,
  onBookNow,
  pageIcon: PageIcon,
  badge,
  title,
  subtitle,
  heroStats,
  plans,
  servicesIncluded,
  benefits,
  faqs,
  processSteps,
  ctaTitle,
  ctaSubtitle,
  primaryCta,
  footerNote,
}: AMCPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const defaultStats: HeroStat[] = heroStats || [
    { value: "10,000+", label: "Active Contracts" },
    { value: "4.8/5", label: "Customer Rating" },
    { value: "20+", label: "Cities Served" },
    { value: "48hr", label: "Avg. Response Time" },
  ];

  const defaultSteps: ProcessStep[] = processSteps || [
    {
      title: "Request Assessment",
      description:
        "Share your facility details. Our team schedules a free on-site inspection at a convenient time.",
    },
    {
      title: "Get a Tailored Quote",
      description:
        "We present a clear, itemized plan with defined scope, schedules, and transparent pricing—no surprises.",
    },
    {
      title: "Sign & Activate",
      description:
        "Sign the agreement and your dedicated service coordinator takes over immediately.",
    },
    {
      title: "Ongoing Maintenance",
      description:
        "Scheduled visits, digital service logs, and priority support—all year long.",
    },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "inherit" }}>
      {/* ── Sticky Header ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-base">Back</span>
            </button>
            <img
              src={logoImg}
              alt="VisvasaHome"
              className="h-9 w-auto"
              style={{ maxWidth: "180px" }}
            />
            <a
              href="tel:+919057567160"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-base">Call Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto pb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <PageIcon className="w-5 h-5 text-white" />
              <span className="text-white text-base">{badge}</span>
            </div>
            <h1 className="text-white mb-5" style={{ lineHeight: 1.2 }}>
              {title}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookNow}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-base"
                style={{ fontWeight: 600 }}
              >
                {primaryCta}
              </button>
              <a
                href="tel:+919057567160"
                className="px-8 py-3 border-2 border-white/60 text-white rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                Speak with Expert
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white border-t border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {defaultStats.map((stat, i) => (
                <div key={i} className="py-5 text-center">
                  <div
                    className="text-blue-600 mb-1"
                    style={{ fontSize: "1.5rem", fontWeight: 700 }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-gray-600 text-sm">
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-blue-600" />
              Background-verified professionals
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-blue-600" />
              Rated 4.8/5 by 5,000+ clients
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-600" />
              Serving 20+ cities across India
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Transparent pricing, no hidden charges
            </span>
          </div>
        </div>
      </section>

      {/* ── Pricing Plans ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent, all-inclusive pricing with clearly defined scope. No surprise charges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden flex flex-col ${
                  plan.popular
                    ? "shadow-2xl ring-2 ring-blue-600 relative"
                    : "border border-gray-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2.5 text-sm" style={{ fontWeight: 600 }}>
                    ★ {plan.badge || "Most Popular"}
                  </div>
                )}
                {!plan.popular && plan.badge && (
                  <div className="bg-gray-100 text-gray-600 text-center py-2.5 text-sm" style={{ fontWeight: 600 }}>
                    {plan.badge}
                  </div>
                )}

                <div
                  className={`flex-1 flex flex-col p-7 ${
                    plan.popular ? "bg-blue-600 text-white" : "bg-white"
                  }`}
                >
                  {/* Plan name */}
                  <div className="mb-5">
                    <h3 className={`mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        plan.popular ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-1 flex items-end gap-2">
                    <span
                      className={plan.popular ? "text-white" : "text-gray-900"}
                      style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`mb-0.5 text-sm ${
                        plan.popular ? "text-blue-200" : "text-gray-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  {plan.monthlyEquiv && (
                    <p
                      className={`text-sm mb-1 ${
                        plan.popular ? "text-blue-200" : "text-gray-400"
                      }`}
                    >
                      ≈ {plan.monthlyEquiv} / month
                    </p>
                  )}
                  {plan.bestFor && (
                    <div
                      className={`inline-block text-xs px-2 py-1 rounded-full mb-5 mt-2 ${
                        plan.popular
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      Best for: {plan.bestFor}
                    </div>
                  )}

                  <div className={`border-t mb-5 ${plan.popular ? "border-blue-500" : "border-gray-100"}`} />

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-green-300" : "text-green-500"
                          }`}
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            plan.popular ? "text-blue-50" : "text-gray-700"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded?.map((f, i) => (
                      <li key={`ni-${i}`} className="flex items-start gap-2.5 opacity-50">
                        <X
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-blue-300" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`text-sm leading-relaxed line-through ${
                            plan.popular ? "text-blue-200" : "text-gray-400"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={onBookNow}
                    className={`w-full py-3 rounded-xl transition-all text-base ${
                      plan.popular
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {plan.price === "Custom" ? "Get Custom Quote" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            All plans include a service agreement, digital maintenance logs, and escalation support.
          </p>
        </div>
      </section>

      {/* ── What We Maintain ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4">What's Covered</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive maintenance across every critical system, performed by trained and verified technicians.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesIncluded.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-3" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  {service.title}
                </h3>
                <ul className="space-y-1.5">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">›</span>
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4">Why Choose an AMC?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              A structured maintenance contract prevents costly emergencies and ensures consistent quality all year.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <b.icon className="w-7 h-7 text-blue-600" />
                </div>
                {b.stat && (
                  <div
                    className="text-blue-600 mb-1"
                    style={{ fontSize: "1.5rem", fontWeight: 700 }}
                  >
                    {b.stat}
                  </div>
                )}
                <h3
                  className="text-gray-900 mb-2"
                  style={{ fontSize: "0.95rem", fontWeight: 600 }}
                >
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Getting started is straightforward. Four simple steps to reliable annual maintenance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {defaultSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < defaultSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-blue-200 z-0" style={{ width: "calc(100% - 2.5rem)", left: "calc(50% + 1.5rem)" }} />
                )}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center relative z-10">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4"
                    style={{ fontSize: "1.1rem", fontWeight: 700 }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{ fontSize: "0.95rem", fontWeight: 600 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Clear answers about how the AMC works, what's covered, and what to expect.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    className="text-gray-800 pr-4"
                    style={{ fontSize: "0.95rem", fontWeight: 600 }}
                  >
                    {faq.question}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 bg-gray-50">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">{ctaTitle}</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">{ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookNow}
              className="px-8 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors text-base"
              style={{ fontWeight: 600 }}
            >
              {primaryCta}
            </button>
            <a
              href="tel:+919057567160"
              className="px-8 py-3 border-2 border-white/60 text-white rounded-xl hover:bg-white/10 transition-colors text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +91 905 7567 160
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer Note ── */}
      <div className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm leading-relaxed">
            {footerNote ||
              "All services performed by background-verified professionals. Contracts include detailed service schedules and accountability measures. Terms apply."}
          </p>
        </div>
      </div>
    </div>
  );
}