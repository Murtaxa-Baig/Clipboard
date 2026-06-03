import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import AboutSection from "@/components/AboutSection";
import ClipboardDemo from "@/components/ClipboardDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <ClipboardDemo />
      <Download />
      <AboutSection />

      <Footer />
    </main>
  );
}
