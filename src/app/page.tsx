import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  const faqData = [
    {
      id: "item-1",
      question: "What makes Zynava different from other supplements?",
      answer: "Zynava is formulated with clinically-studied ingredients in optimal doses. Our comprehensive approach targets multiple health aspects in one convenient daily scoop, backed by third-party testing and NSF certification."
    },
    {
      id: "item-2", 
      question: "How long does it take to see results?",
      answer: "Many users report increased energy within the first week. Our clinical studies show significant improvements in key nutrient levels within 3 months of consistent use."
    },
    {
      id: "item-3",
      question: "Is Zynava safe for daily use?",
      answer: "Yes, Zynava is designed for daily use and is NSF Certified for Sport®. All ingredients are carefully selected for safety and efficacy. However, consult your healthcare provider if you have specific health conditions."
    },
    {
      id: "item-4",
      question: "Can I take Zynava with other supplements?",
      answer: "Zynava is formulated to be comprehensive, potentially reducing the need for multiple supplements. Consult your healthcare provider about your specific supplement regimen."
    },
    {
      id: "item-5",
      question: "What is your return policy?",
      answer: "We offer a 90-day money-back guarantee. If you're not completely satisfied with Zynava, return it within 90 days for a full refund."
    },
    {
      id: "item-6",
      question: "How should I take Zynava?",
      answer: "Mix one scoop of Zynava with 8-12 oz of cold water, preferably in the morning. The formula mixes easily and has a pleasant taste that most users enjoy."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Video - Modern 2025 Solution */}
      <section className="relative min-h-[45vh] bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            poster="/assest/video/hero1-poster.jpg"
          >
            <source src="/assest/video/hero1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Enhanced overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>

        {/* Content Overlay - Modern 2025 Layout */}
        <div className="relative z-10 flex flex-col justify-center min-h-[45vh] px-6 py-8">
          {/* Top Badge - Positioned in video's natural black area */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg text-white py-3 px-6 rounded-full text-base font-bold border border-white/30 shadow-xl">
              ⭐ 50,000+ verified 5-star reviews for Zynava products
            </div>
          </div>

          {/* Main Content - Centered and optimized */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              It all starts with a daily
              <span className="block text-orange-300 mt-2 drop-shadow-2xl font-black">scoop.</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-semibold mb-8 max-w-xl mx-auto leading-relaxed drop-shadow-lg">
              Zynava is the nutritional foundation of millions of mornings – a powerfully simple ritual for energy, resilience, and gut health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trier">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 text-base font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black py-3 px-6 text-base font-bold rounded-lg transition-all duration-300 bg-transparent backdrop-blur-lg"
              >
                What is Zynava?
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Discover Your Perfect Health Match
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-800 mb-16 max-w-3xl mx-auto">
            Tell us your priority and we'll recommend the ideal Zynava blend for you
          </p>

          {/* Quiz Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Gut Health Card */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200/50 transition-all duration-300 cursor-pointer hover:border-orange-400 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Improve Gut Health</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Support digestive wellness and microbiome balance for better nutrient absorption</p>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Immunity Card */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200/50 transition-all duration-300 cursor-pointer hover:border-orange-400 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Boost Immunity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Strengthen your body's natural defenses with powerful antioxidants and vitamins</p>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Energy Card */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200/50 transition-all duration-300 cursor-pointer hover:border-orange-400 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Enhance Focus & Energy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Sustain mental clarity and physical energy throughout your busy day</p>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Recovery Card */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200/50 transition-all duration-300 cursor-pointer hover:border-orange-400 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">🏃‍♂️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Support Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Accelerate muscle recovery and reduce inflammation after workouts</p>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-pink-700/10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Sleep Card */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200/50 transition-all duration-300 cursor-pointer hover:border-orange-400 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">😴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Promote Better Sleep</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Improve sleep quality and support your body's natural recovery cycles</p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-200 py-4 px-8 rounded-full text-sm font-medium text-orange-600">
              <span>✓ 90-day money back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Clinically-studied formulas</h3>
              <p className="text-white/80 text-sm">+ ingredients backed by research</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">NSF Certified</h3>
              <p className="text-white/80 text-sm">for Sport® quality assurance</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Trusted by experts</h3>
              <p className="text-white/80 text-sm">Leading doctors, scientists & athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Studies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Formulated for your body.
              <span className="block text-orange-500">Clinically backed.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our doctors, scientists, and researchers worked with third-party experts to study the Zynava Next Gen formula. Here is what they found:
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200/50">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-6">
                Improves Key Nutrient Levels Within 3 Months†
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Statistic 1 */}
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-800 mb-4">70%</div>
                <p className="text-gray-600 text-sm">
                  of subjects had an increase in RBC folate level†
                </p>
              </div>

              {/* Statistic 2 */}
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-800 mb-4">73%</div>
                <p className="text-gray-600 text-sm">
                  of subjects saw an increase in vitamin C levels†
                </p>
              </div>

              {/* Statistic 3 */}
              <div className="text-center md:col-span-3">
                <p className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-6">
                  Clinically Shown to Enrich the Gut Microbiome†
                </p>
                <div className="text-6xl font-bold text-gray-800 mb-4">10x</div>
                <p className="text-gray-600 text-sm">
                  increase in healthy bacteria in the gut†
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button 
                variant="outline" 
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                See Our Studies
              </Button>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
                †Based on clinical studies in healthy adults ages 18–59, evaluating nutrient biomarkers, microbiome shifts, and bioavailability. Study designs and durations varied. Please see zynava.com/science for additional information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/30 to-orange-100/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="flex gap-1 text-orange-500 text-3xl mb-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-sm text-gray-600">
                50,000+ verified 5-star reviews for Zynava products
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              See what members are saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏃‍♂️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Vegan Athlete</p>
                  <p className="text-sm text-gray-600">ERIC B.</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">I feel great!</h3>
              <p className="text-gray-600 leading-relaxed">
                "The energy, the gut, and overall health is making me feel 80% better than I was. I love taking it every day and it's become an essential part of my training routine."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🌟</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Foundational Nutrition</p>
                  <p className="text-sm text-gray-600">STEPHANIE C.</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Easy & convenient</h3>
              <p className="text-gray-600 leading-relaxed">
                "I love the new formula! The texture is smoother, mixes better, no grit remaining. The additional vitamins and probiotics are great improvements to my daily routine."
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6 max-w-2xl mx-auto">
              Zynava underwent a research-backed update in January of 2025. Reviews prior to that month reflect an earlier formulation.
            </p>
            <Button 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              See All Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Health Benefits Categories Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Comprehensive Health Solutions
              <span className="block text-orange-500">for Every Aspect of Wellness</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From cardiovascular support to cognitive enhancement, our scientifically-formulated supplements target your specific health goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cardiovascular Health */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Cardiovascular Health</h3>
              <p className="text-gray-600 text-sm mb-4 text-center">Support healthy blood flow, cholesterol levels, and heart function</p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Nattokinase Plus - Blood flow support</li>
                <li>• Cholesterol maintenance</li>
                <li>• Ubiquinol CoQ10</li>
                <li>• Heart rhythm support</li>
              </ul>
            </div>

            {/* Digestive & Gut Health */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Digestive Health</h3>
              <p className="text-gray-600 text-sm mb-4 text-center">Promote gut balance, digestive comfort, and microbiome health</p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• GI Benefits powder</li>
                <li>• 52.5 billion CFU probiotics</li>
                <li>• Digestive lining support</li>
                <li>• Immune function boost</li>
              </ul>
            </div>

            {/* Bone, Joint & Beauty */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Joint & Beauty</h3>
              <p className="text-gray-600 text-sm mb-4 text-center">Maintain healthy joints, bones, skin, and hair</p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Collagen Flex for joints</li>
                <li>• Hair Effects formula</li>
                <li>• Bone health support</li>
                <li>• Skin radiance complex</li>
              </ul>
            </div>

            {/* Sleep & Stress */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">😴</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Sleep & Stress</h3>
              <p className="text-gray-600 text-sm mb-4 text-center">Relax deeply and restore your body's natural rhythms</p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Magnesium complex</li>
                <li>• Adaptogenic herbs</li>
                <li>• Sleep cycle support</li>
                <li>• Stress hormone balance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-50/30 to-orange-100/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Zynava
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white rounded-2xl border border-orange-100 px-6 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-orange-600 py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 pt-0 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}