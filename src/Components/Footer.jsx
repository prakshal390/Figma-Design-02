import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[#262626] font-sans text-white">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-12 lg:px-8 lg:pt-14">
        {/* Main Content Row */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Left: Brand & Tagline */}
          <div className="max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              {/* Custom Target/Circle Icon */}
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white">
                zinigo<span className="text-xs font-normal">®</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#b3b3b3]">
              Thoughtfully planned Bhutan holidays with local expertise, curated
              experiences, and personalised travel support.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-col items-start md:items-start">
            <p className="text-sm font-bold text-white">Follow Us</p>

            <div className="mt-3 flex items-center gap-3">
              {/* Instagram Icon */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:opacity-80"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="#E1306C"
                  />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:opacity-80"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#1877F2"
                  />
                </svg>
              </a>

              {/* YouTube Icon */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:opacity-80"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="#FF0000"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="mt-10 border-t border-zinc-700/60 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#b3b3b3] sm:flex-row">
            {/* Copyright */}
            <p>© 2026 ZiniGo. All Rights Reserved.</p>

            {/* Policy Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </a>
              <a
                href="#cancellation"
                className="transition hover:text-white"
              >
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;