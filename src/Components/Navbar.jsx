




import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    {
      name: "Packages",
      link: "#packages",
    },
    {
      name: "Why Zinigo",
      link: "#why-zinigo",
    },
    {
      name: "What's Included",
      link: "#included",
    },
    {
      name: "Customize Your Trip",
      link: "#customize",
    },
    {
      name: "Reviews",
      link: "#testimonials",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-5 lg:px-0">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
        >
          <span className="text-[22px] font-medium tracking-[-1px] text-[#ff6b00]">
            ◉zinigo.
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-[30px] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="whitespace-nowrap text-[11px] font-medium text-[#222] transition hover:text-[#ff6900]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden items-center gap-[8px] lg:flex">

          <a
            href="#whatsapp"
            className="flex h-[30px] items-center gap-[5px] rounded-[4px] border border-[#18b83f] px-[13px] text-[11px] font-semibold text-[#159b35] transition hover:bg-[#effff3]"
          >
            <MessageCircle size={13} />
            WhatsApp us
          </a>

          <a
            href="#customize"
            className="flex h-[30px] items-center rounded-[4px] bg-[#ff6900] px-[17px] text-[11px] font-semibold text-white transition hover:bg-[#e85e00]"
          >
            Get free Quote
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-md p-2 lg:hidden"
        >
          {mobileMenu ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-md lg:hidden">

          <nav className="flex flex-col">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMobileMenu(false)}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-2">

              <a
                href="#whatsapp"
                className="flex items-center justify-center gap-2 rounded-md border border-green-500 py-3 text-sm font-semibold text-green-600"
              >
                <MessageCircle size={16} />
                WhatsApp us
              </a>

              <a
                href="#customize"
                className="rounded-md bg-[#ff6900] py-3 text-center text-sm font-semibold text-white"
              >
                Get free Quote
              </a>

            </div>

          </nav>

        </div>
      )}
    </header>
  );
}

export default Navbar;