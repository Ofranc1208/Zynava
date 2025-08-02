"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const questions: QuestionData[] = [
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize with first AI message
    const initialMessage: Message = {
      id: 1,
      sender: 'ai',
      text: questions[0].question,
      timestamp: new Date()
    };
    
    setMessages([initialMessage]);
    
    // Show buttons after a brief delay
    setTimeout(() => {
      setShowButtons(true);
    }, 1000);
  }, []);

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
          addMessage('ai', questions[1].question);
          
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

  const currentQuestionData = questions[currentQuestion - 1];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Top Section: Self-Guided Questions */}
        <div className={styles.selfGuidedSection}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.mainTitle}>Find Your Perfect Supplement</h1>
          </div>
          
          <div className={styles.questionCard}>
            <h3 className={styles.questionTitle}>Question 1: What is your primary wellness goal?</h3>
            <div className={styles.optionsGrid}>
              {questions[0].options.map((option) => (
                <Button
                  key={option.id}
                  size="lg"
                  variant="outline"
                  className={`${styles.optionButton} ${styles[option.color]}`}
                >
                  <span className={styles.optionIcon}>{option.icon}</span>
                  <span className={styles.optionText}>{option.text}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: AI Matchmaker Header (Compact) */}
        <div className={styles.aiSectionDivider}>
          <div className={styles.dividerLine}></div>
          <span className={styles.dividerText}>OR</span>
          <div className={styles.dividerLine}></div>
        </div>

        <div className={styles.aiHeaderCompact}>
          <h2 className={styles.aiTitle}>🤖 AI Supplement Matchmaker</h2>
        </div>

        {/* Bottom Section: Integrated Chat Interface */}
        <div className={styles.chatSection}>
          <div className={styles.chatContainerIntegrated}>
            
            {/* Chat Messages Area */}
            <div className={styles.messagesContainer}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${
                    message.sender === 'ai' ? styles.aiMessage : styles.userMessage
                  }`}
                >
                  <div className={styles.messageContent}>
                    <div className={styles.messageText}>{message.text}</div>
                    <div className={styles.messageTime}>
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
                <div className={`${styles.message} ${styles.aiMessage}`}>
                  <div className={styles.messageContent}>
                    <div className={styles.typingIndicator}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Integrated Input Area */}
            <div className={styles.chatInputIntegrated}>
              <div className={styles.chatInputWrapper}>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className={styles.voiceButton}
                >
                  🎤
                </Button>
                <input
                  type="text"
                  placeholder="Ask me anything about supplements..."
                  className={styles.chatInput}
                />
                <Button 
                  size="sm" 
                  className={styles.sendButton}
                >
                  📤
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}