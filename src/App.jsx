import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TravelStyles from "./components/TravelStyles";
import Packages from "./components/Packages";
import PackageIncludes from "./components/PackageIncludes";
import WhyZinigo from "./components/WhyZinigo";
import CustomizeJourney from "./components/CustomizeJourney";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen  bg-white">

      <Navbar />

      <main className="flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
        <Hero />
        <TravelStyles />

        <Packages />

        <PackageIncludes />

        <WhyZinigo />

        <CustomizeJourney />

        <Testimonials />

        <FAQ />

        <CTA />
        <Footer/>
      </main >

    </div>
  );
}

export default App;