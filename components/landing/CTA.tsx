import React from "react";
import Container from "@/components/ui/Container";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-journal-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-journal-200 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-journal-300 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance animate-fade-in">
                What are you waiting for?
                <span className="text-gradient block mt-2">Begin your journey today</span>
              </h2>

              <p className="text-lg text-journal-700 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Join thousands of people who have transformed their lives through thoughtful journaling and AI-powered insights.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link href="/app">
                  <CustomButton variant="primary" size="lg" className="rounded-full px-8 py-6 text-md">
                    Start writing down
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </CustomButton>
                </Link>
                {/* <CustomButton variant="minimal" size="lg" className="rounded-full px-8 py-6 text-md">
                  See pricing
                </CustomButton> */}
              </div>

              {/* <div className="mt-10 flex items-center justify-center text-journal-600 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <svg width="100" height="36" viewBox="0 0 900 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-8 mr-6">
                  <path d="M270.3 97.4c-7.7-8.3-18.3-12.5-31.7-12.5H153c-13.4 0-24 4.2-31.7 12.5-7.8 8.3-11.7 19-11.7 32v11.3c0 13 3.9 23.6 11.7 31.9 7.7 8.3 18.3 12.5 31.7 12.5h85.6c13.4 0 24-4.2 31.7-12.5 7.8-8.3 11.7-19 11.7-31.9v-11.3c0-13-3.9-23.7-11.7-32zm-11.6 43.3c0 17.5-12.9 26.3-38.8 26.3h-67.3c-25.9 0-38.8-8.8-38.8-26.3v-11.3c0-17.5 13-26.3 38.8-26.3h67.3c25.9 0 38.8 8.8 38.8 26.3v11.3z" fill="#5C68D2"/>
                  <path d="M301 96h18.8v88.2H301V96zm93.8-.2c-10.6 0-20.4 2.3-29.1 6.8-1.4.8-2.1 2.2-2.1 4.3V184h18.8v-61.7c3.2-2 7.1-3 11.6-3 9.6 0 14.5 5 14.5 15V184h18.7v-49.8c0-25.6-10.8-38.4-32.4-38.4zm119.7 31.6v-1.5c0-9.6-3-17.4-9.1-23.1-6-5.8-14.4-8.7-25-8.7-11.2 0-20.3 3.2-27.3 9.5-7 6.4-10.5 14.5-10.5 24.5v23.6c0 10 3.5 18.2 10.5 24.5 7 6.3 16.1 9.5 27.3 9.5 8.3 0 15.7-1.8 22-5.3 6.4-3.6 11-8.5 14-14.8.9-1.9.6-3.9-.9-6l-9.8-9.8c-1-1-2-1.5-3.2-1.5-.9 0-1.6.3-2.1 1-1.5 3.3-3.6 5.8-6.3 7.5-2.7 1.6-5.7 2.5-9.1 2.5-5 0-9-1.2-11.9-3.7a12.5 12.5 0 0 1-4.3-10v-3.3h47.4c2.3 0 4.2-.7 5.6-2.2 1.4-1.4 2.2-3.3 2.2-5.6v-8.2h.5zm-19.3 5.9h-32.3v-3.3c0-8.8 5.2-13.1 15.5-13.1 10.3 0 15.4 4.4 15.4 13.1v3.3h1.4zm114.1-37.3h-17.8l-18.3 30.4-18.4-30.4h-17.8l28.1 46.5v41.7h18.8v-42.5l25.4-45.7zm88.8 0h-17.9l-18.2 30.4-18.4-30.4h-17.9l28.2 46.5v41.7h18.8v-42.5l25.4-45.7z" fill="#5C68D2"/>
                </svg>
                <span className="text-sm">Rated 4.8/5 from over 500 reviews</span>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
