"use client"
import React, { useState } from "react";
import { Send,  Bot, User2 } from "lucide-react";
// import { Paperclip, Smile, MoreVertical, } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { LoadingSpinner } from "@/components/ui/spinner";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isLoading?: boolean;
}

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.sender === "user";
  
  return (
    <div className={cn(
      "flex mb-4 gap-2 max-w-[80%]",
      isUser ? "ml-auto flex-row-reverse" : ""
    )}>
      <Avatar className="size-8 bg-gradient-to-br from-blue-500 to-journal-600 border border-blue-200 flex items-center justify-center">
      {isUser ? (
        <User2 className="size-4 text-white"/>
      ) : (
          <Bot className="size-4 text-white" />
        )}
      </Avatar>
      
      <div className="flex flex-col">
        <div className={cn(
          "p-3 rounded-2xl relative",
          isUser 
            ? "bg-journal-500 text-white rounded-tr-none shadow-sm" 
            : "bg-gray-100 text-gray-800 rounded-tl-none shadow-sm"
        )}>
          {message.isLoading ? (
            <div className="px-8 py-1">
              <LoadingSpinner size="sm" />
            </div>
          ) : (
            <p className="text-sm whitespace-pre-wrap">{message.text}</p>
          )}
        </div>
        <span className={cn(
          "text-xs text-gray-500 mt-1",
          isUser ? "text-right" : ""
        )}>
          {format(message.timestamp, "h:mm a")}
        </span>
      </div>
    </div>
  );
};

const Chat: React.FC = () => {
  const { toast } = useToast();
  const [messageInput, setMessageInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  React.useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      setTimeout(() => {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }, 100);
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!messageInput.trim() || isProcessing) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageInput.trim(),
      sender: "user",
      timestamp: new Date()
    };
    
    // Add user message
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setMessageInput("");
    
    // Create loading message placeholder
    const loadingMsgId = (Date.now() + 1).toString();
    const loadingMessage: Message = {
      id: loadingMsgId,
      text: "",
      sender: "bot",
      timestamp: new Date(),
      isLoading: true
    };
    
    // Add loading message
    setMessages(prev => [...prev, loadingMessage]);
    setIsProcessing(true);
    
    try {
      // Simulate AI response with delay (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate AI response (replace with actual API integration)
      let response: string;
      
      if (userMessage.text.toLowerCase().includes("hello") || 
          userMessage.text.toLowerCase().includes("hi")) {
        response = "Hello there! How can I assist you today?";
      }
      else if (userMessage.text.toLowerCase().includes("weather")) {
        response = "I'm sorry, I don't have access to real-time weather data. Would you like to know anything else?";
      }
      else if (userMessage.text.toLowerCase().includes("joke")) {
        response = "Why did the AI go to therapy? It had too many deep issues in its neural network! 😄";
      }
      else if (userMessage.text.toLowerCase().includes("journal")) {
        response = "Journaling is a great practice for mental health and self-reflection! Would you like some journaling prompts or tips to get started?";
      }
      else {
        response = "Thank you for your message. In a fully implemented LLM chatbot, I would connect to an API to generate responses. Right now I'm simulating responses with predefined answers.";
      }
      
      // Replace loading message with actual response
      setMessages(prev => prev.map(msg => 
        msg.id === loadingMsgId 
          ? {
              id: loadingMsgId,
              text: response,
              sender: "bot",
              timestamp: new Date(),
              isLoading: false
            }
          : msg
      ));
    } catch (error) {
      console.error(error)
      // Remove loading message if error
      setMessages(prev => prev.filter(msg => msg.id !== loadingMsgId));
      
      // Show error toast
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container className="mt-10 py-8 max-w-[83vw] h-[95vh] flex flex-col">
      <Card className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden bg-white/95 backdrop-blur-sm border-journal-100 shadow-md">
        {/* Chat header */}
        {/* <div className="flex items-center justify-between border-b border-gray-200 p-4 bg-white">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </Avatar>
            <div>
              <h2 className="font-semibold">AI Assistant</h2>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div> */}
          {/* <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </Button> */}
        {/* </div> */}
        
        {/* Messages area */}
        <ScrollArea 
          className="flex-1 p-4 overflow-y-auto"
          ref={scrollAreaRef}
        >
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        </ScrollArea>
        
        {/* Input area */}
        <div className="border-t border-gray-200 p-4 bg-white/80">
          <div className="flex gap-2 items-center">
            {/* <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full h-10 w-10 flex-shrink-0"
              disabled={isProcessing}
            >
              <Paperclip className="h-5 w-5 text-gray-500" />
            </Button> */}
            
            <Input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder={isProcessing ? "AI is thinking..." : "Type a message..."}
              className="border-gray-200 focus-visible:ring-journal-400 rounded-full"
              onKeyPress={(e) => {
                if (e.key === "Enter" && !isProcessing) {
                  handleSendMessage();
                }
              }}
              disabled={isProcessing}
            />
            
            {/* <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full h-10 w-10 flex-shrink-0"
              disabled={isProcessing}
            >
              <Smile className="h-5 w-5 text-gray-500" />
            </Button> */}
            
            <Button 
              onClick={handleSendMessage}
              className={cn(
                "rounded-full h-10 w-10 flex-shrink-0",
                isProcessing 
                  ? "bg-gray-400 hover:bg-gray-500" 
                  : "bg-journal-500 hover:bg-journal-600"
              )}
              disabled={isProcessing || !messageInput.trim()}
            >
              {isProcessing ? (
                <LoadingSpinner size="sm" color="white" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Chat;