import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import HowItWorks from "@/components/landing/HowItWorks";

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
