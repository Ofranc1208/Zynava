"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface Message {
  id: number;
  sender: 'ai' | 'user';
  text: string;
  timestamp: Date;
}

interface QuestionData {
  question: string;
  options: Array<{
    id: string;
    text: string;
    icon: string;
    color: string;
  }>;
}

export default function TrierPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [isTyping, setIsTyping] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // AI Chat Questions (for the chat interface)
  const aiQuestions: QuestionData[] = [
    {
      question: "Hi there! I'm your AI Supplement Matchmaker. I'll help you find the perfect supplements for your wellness goals. Let's start with the most important question: What is your primary wellness goal?",
      options: [
        { id: "overall-health", text: "Overall Health & Wellness", icon: "🌟", color: "optionPrimary" },
        { id: "boost-immunity", text: "Boost Immunity", icon: "🛡️", color: "optionRed" },
        { id: "energy-vitality", text: "Energy & Vitality", icon: "⚡", color: "optionOrange" },
        { id: "bone-joint", text: "Bone & Joint Health", icon: "🦴", color: "optionGreen" },
        { id: "heart-health", text: "Heart Health", icon: "❤️", color: "optionPink" },
        { id: "gut-health", text: "Gut Health", icon: "🌱", color: "optionTeal" },
        { id: "sleep-stress", text: "Sleep & Stress Relief", icon: "😴", color: "optionBlue" },
        { id: "brain-health", text: "Brain Health & Memory", icon: "🧠", color: "optionGray" }
      ]
    },
    {
      question: "Excellent choice! Now I'd like to understand your lifestyle better. How would you describe your current activity level?",
      options: [
        { id: "very-active", text: "Very Active (Exercise 5+ times/week)", icon: "🏃‍♂️", color: "optionOrange" },
        { id: "moderately-active", text: "Moderately Active (Exercise 2-4 times/week)", icon: "🚶‍♂️", color: "optionGreen" },
        { id: "lightly-active", text: "Lightly Active (Exercise 1-2 times/week)", icon: "🧘‍♀️", color: "optionBlue" },
        { id: "sedentary", text: "Sedentary (Little to no exercise)", icon: "💺", color: "optionGray" }
      ]
    }
  ];

  // Self-Guided Quiz Questions (for the top section)
  const selfGuidedQuestions = [
    {
      step: 1,
      question: "What is your primary wellness goal?",
      options: [
        { id: "overall-health", text: "Overall Health & Wellness", icon: "🌟", color: "optionPrimary" },
        { id: "boost-immunity", text: "Boost Immunity", icon: "🛡️", color: "optionRed" },
        { id: "energy-vitality", text: "Energy & Vitality", icon: "⚡", color: "optionOrange" },
        { id: "bone-joint", text: "Bone & Joint Health", icon: "🦴", color: "optionGreen" },
        { id: "heart-health", text: "Heart Health", icon: "❤️", color: "optionPink" },
        { id: "gut-health", text: "Gut Health", icon: "🌱", color: "optionTeal" },
        { id: "sleep-stress", text: "Sleep & Stress Relief", icon: "😴", color: "optionBlue" },
        { id: "brain-health", text: "Brain Health & Memory", icon: "🧠", color: "optionGray" }
      ]
    },
    {
      step: 2,
      question: "What are your dietary preferences?",
      options: [
        { id: "no-preference", text: "No Preference", icon: "🍽️", color: "optionGray" },
        { id: "vegan", text: "Vegan", icon: "🌱", color: "optionGreen" },
        { id: "gluten-free", text: "Gluten-Free", icon: "🌾", color: "optionOrange" }
      ]
    },
    {
      step: 3,
      question: "How active is your lifestyle?",
      options: [
        { id: "very-active", text: "Very Active", icon: "🏃‍♂️", color: "optionOrange" },
        { id: "moderately-active", text: "Moderately Active", icon: "🚶‍♂️", color: "optionGreen" },
        { id: "lightly-active", text: "Lightly Active", icon: "🧘‍♀️", color: "optionBlue" },
        { id: "sedentary", text: "Sedentary", icon: "💺", color: "optionGray" }
      ]
    },
    {
      step: 4,
      question: "What's your budget range for supplements?",
      options: [
        { id: "budget-conscious", text: "Budget Conscious", icon: "💰", color: "optionGreen" },
        { id: "moderate-spending", text: "Moderate Spending", icon: "💳", color: "optionBlue" },
        { id: "premium-quality", text: "Premium Quality", icon: "💎", color: "optionPrimary" }
      ]
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handler for self-guided quiz button clicks
  const handleSelfGuidedAnswer = (optionId: string) => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz completed - could add completion logic here
      console.log('Quiz completed! Selected options can be processed here.');
      // For now, reset to step 1 for demo purposes
      setCurrentStep(1);
    }
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
    
    // Initialize chat only when opened
    if (messages.length === 0) {
      const initialMessage: Message = {
        id: 1,
        sender: 'ai',
        text: aiQuestions[0].question,
        timestamp: new Date()
      };
      
      setMessages([initialMessage]);
      
      // Show buttons after a brief delay
      setTimeout(() => {
        setShowButtons(true);
      }, 1000);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const addMessage = (sender: 'ai' | 'user', text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      sender,
      text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const handleAnswer = (optionId: string, optionText: string) => {
    // Hide buttons immediately
    setShowButtons(false);
    
    // Add user's choice to chat
    addMessage('user', optionText);
    
    // Show typing indicator
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Add AI response based on current question
      if (currentQuestion === 1) {
        addMessage('ai', "Perfect! That helps me understand your priorities. Now let's talk about your lifestyle so I can recommend the best supplements for your routine.");
        
                     // Move to next question
             setTimeout(() => {
               setCurrentQuestion(2);
               addMessage('ai', aiQuestions[1].question);
               
               setTimeout(() => {
                 setShowButtons(true);
               }, 500);
             }, 1500);
        
      } else if (currentQuestion === 2) {
        addMessage('ai', "Thanks for that information! Based on your wellness goals and activity level, I'm analyzing the best supplement recommendations for you...");
        
        setTimeout(() => {
          addMessage('ai', "I'm preparing your personalized supplement plan. This feature is coming soon! For now, you can browse our full product catalog.");
        }, 2000);
      }
    }, 1500);
  };

  const currentQuestionData = aiQuestions[currentQuestion - 1];
  const currentSelfGuidedQuestion = selfGuidedQuestions.find(q => q.step === currentStep);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 py-6">
      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* Top Section: Self-Guided Questions */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Find Your Perfect Supplement</h1>
          </div>
          
          {currentSelfGuidedQuestion && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200">
              {/* Progress Bar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-2 bg-orange-200/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-orange-600 whitespace-nowrap">Step {currentStep} of 4</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-6">
                Question {currentStep}: {currentSelfGuidedQuestion.question}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {currentSelfGuidedQuestion.options.map((option) => (
                  <Button
                    key={option.id}
                    size="lg"
                    variant="outline"
                    className="bg-white/90 border-2 border-orange-200 rounded-xl p-3 sm:p-4 lg:p-6 h-auto min-h-[110px] sm:min-h-[130px] lg:min-h-[150px] hover:border-orange-400 hover:bg-white/95 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                    onClick={() => handleSelfGuidedAnswer(option.id)}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center w-full h-full">
                      <span className="text-2xl sm:text-3xl lg:text-4xl leading-none flex-shrink-0">{option.icon}</span>
                      <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 leading-tight px-1 break-words hyphens-auto">{option.text}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Middle Section: AI Matchmaker Header (Compact) */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-orange-300"></div>
          <span className="text-sm font-medium text-orange-600 px-3">OR</span>
          <div className="flex-1 h-px bg-orange-300"></div>
        </div>

        {/* AI Matchmaker Section */}
        <div className="mb-8">
          {!isChatOpen ? (
            /* AI Button - Collapsed State */
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white border-0 py-4 px-6 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full max-w-xs mx-auto animate-breathe min-h-[100px] shadow-orange-500/25"
                onClick={handleOpenChat}
              >
                <Sparkles className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-base font-bold text-center text-white leading-tight">Supplement Matchmaker</span>
              </Button>
            </div>
          ) : (
            /* Chat Interface - Expanded State */
            <div className="mt-3">
              <div className="flex justify-between items-center p-3 bg-orange-100/50 rounded-t-xl border border-orange-200 border-b-0">
                <h3 className="text-base font-semibold text-orange-600 m-0">🤖 AI Supplement Matchmaker</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-transparent border-none text-orange-600 p-1 rounded hover:bg-orange-100/50 transition-all duration-200"
                  onClick={handleCloseChat}
                >
                  ✕
                </Button>
              </div>
              
              <div className="bg-white/95 rounded-b-xl border border-orange-200 border-t-0 backdrop-blur-sm shadow-lg flex flex-col h-80">
                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'ai' ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'ai' 
                          ? 'bg-orange-100 text-gray-800' 
                          : 'bg-orange-500 text-white'
                      }`}>
                        <div className="text-sm">{message.text}</div>
                        <div className={`text-xs mt-1 ${
                          message.sender === 'ai' ? 'text-gray-500' : 'text-orange-100'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-orange-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Integrated Input Area */}
                <div className="border-t border-orange-200 p-3 bg-white/50 rounded-b-xl">
                  <div className="flex gap-2 items-center">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-gray-500 hover:text-gray-700 p-2"
                    >
                      🎤
                    </Button>
                    <input
                      type="text"
                      placeholder="Ask me anything about supplements..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <Button 
                      size="sm" 
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center p-0"
                    >
                      📤
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}