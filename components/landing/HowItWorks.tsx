import Container from "@/components/ui/Container";
import { BookText, Brain, Calendar, Edit3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Edit3 className="h-10 w-10 text-journal-500" />,
      title: "Write Your Thoughts",
      description: "Start by writing your thoughts, feelings, or experiences in the journal. No rules, just write what comes to mind."
    },
    {
      icon: <Brain className="h-10 w-10 text-journal-500" />,
      title: "AI Analysis",
      description: "Our AI analyzes your entries to identify patterns, emotions, and insights that might not be immediately obvious to you."
    },
    {
      icon: <BookText className="h-10 w-10 text-journal-500" />,
      title: "Get Personalized Insights",
      description: "Receive thoughtful reflections and observations about your journal entries, helping you gain deeper self-awareness."
    },
    {
      icon: <Calendar className="h-10 w-10 text-journal-500" />,
      title: "Track Progress Over Time",
      description: "Watch your emotional and personal growth over time with visual charts and progress reports based on your entries."
    }
  ];

  return (
    <section id="how-it-works" className="pt-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How reverie works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered journaling process is designed to be simple yet powerful, helping you gain insights while maintaining your privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default HowItWorks;
