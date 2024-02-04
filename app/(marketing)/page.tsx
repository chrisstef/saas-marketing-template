import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import About from "@/components/About";
import HowWorks from "@/components/HowWorks";
import Features from "@/components/Features";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Sponsors />
            <About />
            <HowWorks />
            <Features />
            <Services />
            <CTA />
            <Testimonials />
            <Team />
            <Pricing />
            <Newsletter />
            <FAQ />
            <OpenSource />
            <Footer />
            <ScrollToTop />
        </>
    );
}
