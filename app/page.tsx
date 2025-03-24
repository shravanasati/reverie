import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </main>
  );
}
