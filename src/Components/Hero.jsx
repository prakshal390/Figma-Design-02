import { ChevronDown, Users, ShieldCheck, Star, MapPin, Calendar, Clock } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-pulse-slow"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-0">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20">
              <MapPin size={14} className="text-orange-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                Discover Bhutan
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-[650px] text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Your Bhutan.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Your Way.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[580px] text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
              Experience the beauty, culture and peaceful landscapes of
              Bhutan with a journey designed around you.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 sm:gap-12">
              
              <div className="group">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">10+</span>
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                  Years Experience
                </p>
              </div>

              <div className="group">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">5K+</span>
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                  Happy Travellers
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">4.9</span>
                  <Star size={18} className="fill-amber-400 text-amber-400" />
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                  Traveller Rating
                </p>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/70">
                <ShieldCheck size={18} className="text-green-400" />
                <span className="text-sm">Verified Partner</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Users size={18} className="text-blue-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>

          </div>

          {/* FORM CARD */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-[520px] rounded-2xl bg-white/95 backdrop-blur-xl p-6 shadow-2xl ring-1 ring-white/20 sm:p-8 lg:p-9">
              
              {/* Form Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                  Plan Your Bhutan Trip
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Get a personalised quote from our Bhutan travel specialists.
                </p>
              </div>

              <form className="space-y-5">
                
                {/* NAME + PHONE */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  <FormField label="Your Name" icon={Users}>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input-style"
                      required
                    />
                  </FormField>

                  <FormField label="WhatsApp / Phone" icon={ShieldCheck}>
                    <input
                      type="tel"
                      placeholder="+91 98765 00000"
                      className="input-style"
                      required
                    />
                  </FormField>

                </div>

                {/* CITY + MONTH */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  <FormField label="Departure City" icon={MapPin}>
                    <SelectInput>
                      <option value="">Select City</option>
                      <option value="delhi">Delhi</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="chandigarh">Chandigarh</option>
                      <option value="pune">Pune</option>
                      <option value="gurugram">Gurugram</option>
                    </SelectInput>
                  </FormField>

                  <FormField label="Travel Month" icon={Calendar}>
                    <SelectInput>
                      <option value="">Select Month</option>
                      <option value="apr-may">Apr - May</option>
                      <option value="jun-jul">Jun - Jul</option>
                      <option value="aug-sep">Aug - Sep</option>
                      <option value="oct-nov">Oct - Nov</option>
                      <option value="dec-jan">Dec - Jan</option>
                    </SelectInput>
                  </FormField>

                </div>

                {/* DURATION + TRAVELLERS */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  <FormField label="Duration" icon={Clock}>
                    <SelectInput>
                      <option value="">Select Duration</option>
                      <option value="4n-5d">4N / 5D</option>
                      <option value="5n-6d">5N / 6D</option>
                      <option value="6n-7d">6N / 7D</option>
                      <option value="7n-8d">7N / 8D</option>
                    </SelectInput>
                  </FormField>

                  <FormField label="Travellers" icon={Users}>
                    <div className="relative">
                      <select className="input-style appearance-none pr-10" required>
                        <option value="">Select</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5">5 Adults</option>
                        <option value="6">6 Adults</option>
                        <option value="7+">7+ Adults</option>
                      </select>
                      <Users
                        size={16}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </FormField>

                </div>

                {/* TRAVEL STYLE */}
                <FormField label="Travel Style" icon={ChevronDown}>
                  <div className="relative">
                    <select className="input-style appearance-none pr-10" required>
                      <option value="">Select Travel Style</option>
                      <option value="honeymoon">Honeymoon</option>
                      <option value="family">Family</option>
                      <option value="women">Women</option>
                      <option value="senior">Senior</option>
                      <option value="budget">Budget</option>
                      <option value="group">Group</option>
                      <option value="bike">Bike</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </FormField>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="
                    group
                    mt-2
                    h-[52px]
                    w-full
                    rounded-xl
                    bg-gradient-to-r from-orange-500 to-amber-500
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg shadow-orange-500/30
                    transition-all
                    duration-300
                    hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02]
                    active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-orange-500/50
                  "
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Free Quote
                    <ChevronDown 
                      size={16} 
                      className="transition-transform group-hover:translate-y-1" 
                    />
                  </span>
                </button>

                {/* Trust Text */}
                <p className="text-center text-xs text-slate-500">
                  🔒 Your information is secure and never shared
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .input-style {
          @apply w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200;
          @apply focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20;
          @apply hover:border-slate-300;
        }
        
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
        }
      `}</style>
      
    </section>
  );
}

/* FORM FIELD COMPONENT */

function FormField({ label, icon: Icon, children }) {
  return (
    <div className="w-full">
      <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
        {Icon && <Icon size={14} className="text-orange-500" />}
        {label}
      </label>
      {children}
    </div>
  );
}

/* SELECT INPUT COMPONENT */

function SelectInput({ children }) {
  return (
    <div className="relative">
      <select className="input-style appearance-none pr-10" required>
        {children}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

export default Hero;