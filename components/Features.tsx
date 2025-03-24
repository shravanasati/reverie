import React from "react";
import Container from "./ui/Container";
import { Sparkles, Brain, TrendingUp, Shield, Edit3, Send } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 rounded-full bg-journal-100 flex items-center justify-center mb-5 text-journal-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-journal-800">{title}</h3>
      <p className="text-journal-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Insights",
      description: "Get personalized insights and patterns from your journal entries to help you understand yourself better.",
      delay: 0.1
    },
    {
      icon: <Edit3 className="h-6 w-6" />,
      title: "Effortless Journaling",
      description: "Write freely or use guided prompts to help you express your thoughts and feelings more effectively.",
      delay: 0.2
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Mood Tracking",
      description: "Track your emotional well-being over time with intelligent mood analysis and visualization.",
      delay: 0.3
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "See your personal growth and development through beautiful analytics and reports.",
      delay: 0.4
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Reflection Prompts",
      description: "Receive personalized prompts based on your past entries to inspire deeper self-reflection.",
      delay: 0.5
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Private & Secure",
      description: "Your journal entries are encrypted and private. Only you can access your personal thoughts.",
      delay: 0.6
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-journal-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Features designed for your mind</h2>
          <p className="text-lg text-journal-600">
            Our AI-powered journaling app provides powerful features to help you reflect, 
            grow, and understand yourself better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="aspect-w-16 aspect-h-9 bg-journal-100 rounded-xl flex items-center justify-center overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1000" height="600" fill="#f5f7fa" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M643.3 121.3c-6.1-9.2-16.5-15.2-27.9-15.2h-233c-11.4 0-21.8 6-27.9 15.2-6.1 9.3-6.9 21-2.2 31l82.3 176.4H313.8c-11.1 0-20 9-20 20v64c0 11 9 20 20 20h30v78c0 44 36 80 80 80h141.3c44 0 80-36 80-80v-78h30c11 0 20-9 20-20v-64c0-11-9-20-20-20h-121l82.4-176.4c4.7-10 3.9-21.7-2.2-31z" fill="#E6EDF2" />
                <path d="M446 450v-10.8a16 16 0 0 1 16-16h63.9a16 16 0 0 1 16 16V450" stroke="#3C4A5C" stroke-width="4" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M582.1 450v-38.5c0-2-1.6-3.5-3.5-3.5h-170c-2 0-3.5 1.6-3.5 3.5V450h177z" fill="#4A3F52" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M460.3 408h66.4c1.3 0 2.3 1 2.3 2.3 0 .9-.5 1.7-1.3 2l-33.2 15.5-33.2-15.5a2.3 2.3 0 0 1 1-4.4z" fill="#E6E6E6" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M552.5 351.7h-118a10 10 0 0 0-10 10v57h138v-57c0-5.6-4.4-10-10-10z" fill="#5C68D2" />
                <path fill="#5C68D2" d="M454.5 394.5h78v26h-78z" />
                <path d="M532.5 393.5h-78v1h78v-1z" fill="#B6C1E2" />
                <path d="M452.5 363.5h82v31h-82v-31z" fill="#ECEDF3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M500 303.7a10 10 0 0 0-10 10v38h20v-38a10 10 0 0 0-10-10z" fill="#B6C1E2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M505 303.7c2.8 0 5 2.2 5 5v38h-10v-43h5z" fill="#3C4A5C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M463.5 371.5a4 4 0 0 1 4-4h59a4 4 0 1 1 0 8h-59a4 4 0 0 1-4-4z" fill="#B6C1E2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M463.5 383.5a4 4 0 0 1 4-4h59a4 4 0 1 1 0 8h-59a4 4 0 0 1-4-4z" fill="#B6C1E2" />
                <circle cx="552.5" cy="371.5" r="4" fill="#fff" fill-opacity=".6" />
                <circle cx="552.5" cy="383.5" r="4" fill="#fff" fill-opacity=".6" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M500 154a61 61 0 1 0 0 122 61 61 0 0 0 0-122z" fill="#ECEDF3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M508.3 171.2a47.5 47.5 0 1 0-16.6 91.8V171.3c5.5-1 11-1.2 16.6-.1z" fill="#3C4A5C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M517.6 174.1a44.1 44.1 0 0 1 30.1 41.9A44.1 44.1 0 1 1 491.7 231v-55.2c8.4-3.3 17.2-3.8 26-.6z" fill="#5C68D2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M517.6 174.1a44.1 44.1 0 0 1 22.3 14.6 44.1 44.1 0 0 1-48.2 72.4V231c8.4 3.4 18 3.3 26.2-.2a35.3 35.3 0 0 0 22.3-32.8 35.3 35.3 0 0 0-24.6-33.6 35.3 35.3 0 0 0-24-1v-2c8.4-3.3 17.2-3.8 26-.6z" fill="#3C4A5C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M512.7 199.3a17.7 17.7 0 1 1-24.9 16.2c-.3-9.8 8.7-17.7 17.6-17.7 2.5 0 5 .5 7.3 1.5z" fill="#ECEDF3" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
