import React from "react";
import { Users, ChevronDown } from "lucide-react";

function CustomizeJourney() {
  return (
    <section
      id="customize"
      className="flex min-h-screen items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* Container centered in viewport */}
      <div className="flex w-full max-w-5xl flex-col items-center">
        {/* Left-aligned Header */}
        <div className="mb-8 w-full max-w-xl text-left">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Customize Your Bhutan Journey
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Tell us your travel dates, preferences, interests, and group details, and our Bhutan specialists will create a personalised journey designed around your needs, pace, and budget.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <form className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
            {/* Your Name */}
            <FormField label="Your Name" fullWidth>
              <input
                type="text"
                placeholder="Enter name"
                className="form-input"
                required
              />
            </FormField>

            {/* Whatsapp / Phone */}
            <FormField label="Whatsapp / Phone" fullWidth>
              <input
                type="tel"
                placeholder="+91 98765 00000"
                className="form-input"
                required
              />
            </FormField>

            {/* Departure City */}
            <FormField label="Departure City">
              <div className="relative">
                <select className="form-input appearance-none bg-white pr-10 text-slate-500">
                  <option value="">Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                <ChevronDown className="form-icon" size={16} />
              </div>
            </FormField>

            {/* Travel Month */}
            <FormField label="Travel Month">
              <div className="relative">
                <select className="form-input appearance-none pr-10 font-medium text-slate-800">
                  <option>Apr - May</option>
                  <option>Jun - Jul</option>
                  <option>Aug - Sep</option>
                  <option>Oct - Nov</option>
                  <option>Dec - Jan</option>
                </select>
                <ChevronDown className="form-icon" size={16} />
              </div>
            </FormField>

            {/* Duration */}
            <FormField label="Duration">
              <div className="relative">
                <select className="form-input appearance-none pr-10 font-medium text-slate-800">
                  <option>4N / 5D</option>
                  <option>5N / 6D</option>
                  <option>6N / 7D</option>
                  <option>7N / 8D</option>
                </select>
                <ChevronDown className="form-icon" size={16} />
              </div>
            </FormField>

            {/* Travellers */}
            <FormField label="Travellers">
              <div className="relative">
                <select className="form-input appearance-none pr-10 text-slate-600">
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                  <option>5 Adults</option>
                  <option>6 Adults</option>
                </select>
                <Users className="form-icon text-slate-400" size={16} />
              </div>
            </FormField>

            {/* Travel style */}
            <FormField label="Travel style" fullWidth>
              <div className="relative">
                <select className="form-input appearance-none bg-white pr-10 text-slate-500">
                  <option value="">Select Travel style</option>
                  <option value="Honeymoon">Honeymoon</option>
                  <option value="Family">Family</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Budget">Budget</option>
                  <option value="Group">Group</option>
                </select>
                <ChevronDown className="form-icon" size={16} />
              </div>
            </FormField>

            {/* Message */}
            <FormField label="Message" fullWidth>
              <textarea
                rows={3}
                placeholder="Your message"
                className="form-input resize-none"
              />
            </FormField>

            {/* Submit Button */}
            <div className="pt-2 sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#ff5e00] px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#e05300] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Send Query
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tailwind component styles */}
      <style jsx>{`
        .form-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgb(226, 232, 240);
          background-color: #ffffff;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: rgb(30, 41, 59);
          outline: none;
          transition: border-color 150ms ease;
        }

        .form-input::placeholder {
          color: rgb(148, 163, 184);
        }

        .form-input:focus {
          border-color: rgb(249, 115, 22);
        }

        .form-icon {
          pointer-events: none;
          position: absolute;
          right: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgb(100, 116, 139);
        }
      `}</style>
    </section>
  );
}

function FormField({ label, children, fullWidth = false }) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}
      </label>
      {children}
    </div>
  );
}

export default CustomizeJourney;