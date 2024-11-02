import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Play } from "lucide-react";
import { playDemoAudio } from "@/utils/audio";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fadeIn">
            Your AI-Powered <span className="gradient-text">Front Desk</span> Assistant
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            Stop putting your customers on hold. Get an AI-powered inbound phone operator tailored for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90" 
              onClick={playDemoAudio}
            >
              Hear it in Action <Play className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open("https://calendly.com/terry-wen333/15min", "_blank")}>
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;