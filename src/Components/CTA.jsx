import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

function CTA() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 text-white"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />

      {/* Main CTA */}
      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center justify-between gap-8 px-6 py-12 text-center sm:px-8 md:py-14 lg:flex-row lg:items-center lg:gap-12 lg:px-10 lg:text-left">
        {/* Content */}
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <Sparkles size={13} className="text-orange-300" />

            <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-blue-100">
              Begin Your Bhutan Story
            </span>
          </div>

          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            Your Bhutan Journey{" "}
            <span className="text-orange-300">Starts Here</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Ready to experience Bhutan your way? Tell us your travel plans and
            our Bhutan specialists will help you create a personalised journey
            with the right destinations, stays, experiences, and support.
          </p>

          {/* Trust points */}
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-blue-100 lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-300" />
              Personalised planning
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-300" />
              Local expertise
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-300" />
              No obligation
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full shrink-0 flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Zinigo on WhatsApp"
            className="group flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md border border-white/70 bg-transparent px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:w-auto"
          >
            <MessageCircle
              size={15}
              className="transition-transform group-hover:scale-110"
            />
            WhatsApp Us
          </a>

          <a
            href="#customize-your-trip"
            className="group flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-orange-900/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-blue-600 sm:w-auto"
          >
            Get Free Quote
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-blue-400/40">
        <div className="mx-auto max-w-[1180px] px-6 py-4 text-center text-xs text-blue-100 sm:px-8">
          © 2026 Zinigo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default CTA;