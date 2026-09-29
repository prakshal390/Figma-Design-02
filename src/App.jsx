// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Packages from "./components/Packages";
// import Included from "./components/Included";
// import PackageIncludes from "./Components/Included";
// import WhyZinigo from "./components/WhyZinigo";
// import Customize from "./components/Customize";
// import Testimonials from "./components/Testimonials";
// import Gallery from "./components/Gallery";
// import FAQ from "./Components/FAQ";
// import CTA from "./Components/CTA";
// import SiteFooter from "./components/SiteFooter";



// function App() {
//   return (
//     <div className="min-h-screen  bg-white">

//       <Navbar />

//       <main className="flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
//         <Hero />
//         <Packages />
//         <WhyZinigo />

//         <Included />
//         <Customize />
//         <Testimonials />
//         <Gallery />
//         <FAQ />
//         <CTA />




//       </main >

//     </div>
//   );
// }

// export default App;







import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import WhyZinigo from "./components/WhyZinigo";
import Included from "./components/Included";
import Customize from "./components/Customize";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Packages />
        <WhyZinigo />
        <Included />
        <Customize />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTA />
      </main>

      <SiteFooter />
    </>
  );
}

export default App;