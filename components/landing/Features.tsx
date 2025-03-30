import React from "react";
import Container from "@/components/ui/Container";
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

      </Container>
    </section>
  );
};

export default Features;
