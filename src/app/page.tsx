import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className="mb-8">
            <div className={styles.trustBadge}>
              ⭐ 50,000+ verified 5-star reviews for Zynava products
            </div>
          </div>
          <h1 className={styles.heroTitle}>
            It all starts with a daily
            <span className={styles.heroTitleAccent}>scoop.</span>
          </h1>
          <p className={styles.heroDescription}>
            Zynava is the nutritional foundation of millions of mornings – a powerfully simple ritual for energy, resilience, and gut health that all starts with a simple, daily scoop.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/trier">
              <Button 
                size="lg" 
                className={styles.heroPrimaryButton}
              >
                Start Your Journey
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className={styles.heroSecondaryButton}
            >
              What is Zynava?
            </Button>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className={styles.quizSection}>
        <div className={styles.quizContainer}>
          <h2 className={styles.quizTitle}>
            Discover Your Perfect Health Match
          </h2>
          
          <p className={styles.quizSubtitle}>
            Tell us your priority and we'll recommend the ideal Zynava blend for you
          </p>

          {/* Quiz Options Grid */}
          <div className={styles.quizGrid}>
            {/* Gut Health Card */}
            <div className={`${styles.quizCard} group`}>
              <div className={`${styles.quizCardIcon} ${styles.iconGreen}`}>
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className={styles.quizCardTitle}>Improve Gut Health</h3>
              <p className={styles.quizCardDescription}>Support digestive wellness and microbiome balance for better nutrient absorption</p>
              <div className={`${styles.quizCardOverlay} ${styles.overlayGreen}`}></div>
            </div>

            {/* Immunity Card */}
            <div className={`${styles.quizCard} group`}>
              <div className={`${styles.quizCardIcon} ${styles.iconRed}`}>
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className={styles.quizCardTitle}>Boost Immunity</h3>
              <p className={styles.quizCardDescription}>Strengthen your body's natural defenses with powerful antioxidants and vitamins</p>
              <div className={`${styles.quizCardOverlay} ${styles.overlayRed}`}></div>
            </div>

            {/* Energy Card */}
            <div className={`${styles.quizCard} group`}>
              <div className={`${styles.quizCardIcon} ${styles.iconOrange}`}>
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className={styles.quizCardTitle}>Enhance Focus & Energy</h3>
              <p className={styles.quizCardDescription}>Sustain mental clarity and physical energy throughout your busy day</p>
              <div className={`${styles.quizCardOverlay} ${styles.overlayOrange}`}></div>
            </div>

            {/* Recovery Card */}
            <div className={`${styles.quizCard} group`}>
              <div className={`${styles.quizCardIcon} ${styles.iconPink}`}>
                <span className="text-white text-2xl">🏃‍♂️</span>
              </div>
              <h3 className={styles.quizCardTitle}>Support Recovery</h3>
              <p className={styles.quizCardDescription}>Accelerate muscle recovery and reduce inflammation after workouts</p>
              <div className={`${styles.quizCardOverlay} ${styles.overlayPink}`}></div>
            </div>

            {/* Sleep Card */}
            <div className={`${styles.quizCard} group`}>
              <div className={`${styles.quizCardIcon} ${styles.iconPurple}`}>
                <span className="text-white text-2xl">😴</span>
              </div>
              <h3 className={styles.quizCardTitle}>Promote Better Sleep</h3>
              <p className={styles.quizCardDescription}>Improve sleep quality and support your body's natural recovery cycles</p>
              <div className={`${styles.quizCardOverlay} ${styles.overlayPurple}`}></div>
            </div>
          </div>

          {/* Additional Content */}
          <div className={styles.quizGuarantee}>
            <div className={styles.quizGuaranteeBadge}>
              <span>✓ 90-day money back guarantee</span>
            </div>
          </div>
        </div>
      </section>

            {/* Trust Indicators */}
      <section className={styles.trustSection}>
        <div className={styles.trustContainer}>
          <div className={styles.trustGrid}>
            <div className={`${styles.trustItem} group`}>
              <div className={`${styles.trustIcon} ${styles.iconPrimary}`}>
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className={styles.trustTitle}>Clinically-studied formulas</h3>
              <p className={styles.trustDescription}>+ ingredients backed by research</p>
            </div>
            
            <div className={`${styles.trustItem} group`}>
              <div className={`${styles.trustIcon} ${styles.iconSecondary}`}>
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className={styles.trustTitle}>NSF Certified</h3>
              <p className={styles.trustDescription}>for Sport® quality assurance</p>
            </div>
            
            <div className={`${styles.trustItem} group`}>
              <div className={`${styles.trustIcon} ${styles.iconQuaternary}`}>
                <span className="text-white text-2xl">👨‍⚕️</span>
              </div>
              <h3 className={styles.trustTitle}>Trusted by experts</h3>
              <p className={styles.trustDescription}>Leading doctors, scientists & athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Studies Section */}
      <section className={styles.clinicalSection}>
        <div className={styles.clinicalContainer}>
          <div className={styles.clinicalHeader}>
            <h2 className={styles.clinicalTitle}>
              Formulated for your body.
              <span className={styles.clinicalTitleAccent}>Clinically backed.</span>
            </h2>
            <p className={styles.clinicalDescription}>
              Our doctors, scientists, and researchers worked with third-party experts to study the Zynava Next Gen formula. Here is what they found:
            </p>
          </div>

          <div className={styles.clinicalCard}>
            <div className={styles.clinicalLabel}>
              <p className={styles.clinicalLabelText}>
                Improves Key Nutrient Levels Within 3 Months†
              </p>
            </div>

            <div className={styles.clinicalStats}>
              {/* Statistic 1 */}
              <div className={styles.clinicalStat}>
                <div className={styles.clinicalStatNumber}>70%</div>
                <p className={styles.clinicalStatDescription}>
                  of subjects had an increase in RBC folate level†
                </p>
              </div>

              {/* Statistic 2 */}
              <div className={styles.clinicalStat}>
                <div className={styles.clinicalStatNumber}>73%</div>
                <p className={styles.clinicalStatDescription}>
                  of subjects saw an increase in vitamin C levels†
                </p>
              </div>

              {/* Statistic 3 */}
              <div className={styles.clinicalStat}>
                <p className={styles.clinicalLabelText}>
                  Clinically Shown to Enrich the Gut Microbiome†
                </p>
                <div className={styles.clinicalStatNumber}>10x</div>
                <p className={styles.clinicalStatDescription}>
                  increase in healthy bacteria in the gut†
                </p>
              </div>
            </div>

            <div className={styles.clinicalButton}>
              <Button 
                variant="outline" 
                className={styles.clinicalStudyButton}
              >
                See Our Studies
              </Button>
            </div>

            <div className={styles.clinicalDisclaimer}>
              <p className={styles.clinicalDisclaimerText}>
                †Based on clinical studies in healthy adults ages 18–59, evaluating nutrient biomarkers, microbiome shifts, and bioavailability. Study designs and durations varied. Please see zynava.com/science for additional information.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Customer Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsHeader}>
            <div className={styles.testimonialsStars}>
              <div className={styles.testimonialsStarRating}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className={styles.testimonialsReviewCount}>
                50,000+ verified 5-star reviews for Zynava products
              </p>
            </div>
            <h2 className={styles.testimonialsTitle}>
              See what members are saying
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {/* Testimonial 1 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialProfile}>
                <div className={`${styles.testimonialAvatar} ${styles.iconPrimary}`}>
                  <span className="text-white text-2xl">🏃‍♂️</span>
                </div>
                <div>
                  <p className={styles.testimonialAuthor}>Vegan Athlete</p>
                  <p className={styles.testimonialRole}>ERIC B.</p>
                </div>
              </div>
              <h3 className={styles.testimonialHeading}>I feel great!</h3>
              <p className={styles.testimonialContent}>
                "The energy, the gut, and overall health is making me feel 80% better than I was. I love taking it every day and it's become an essential part of my training routine."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialProfile}>
                <div className={`${styles.testimonialAvatar} ${styles.iconSecondary}`}>
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <div>
                  <p className={styles.testimonialAuthor}>Foundational Nutrition</p>
                  <p className={styles.testimonialRole}>STEPHANIE C.</p>
                </div>
              </div>
              <h3 className={styles.testimonialHeading}>Easy & convenient</h3>
              <p className={styles.testimonialContent}>
                "I love the new formula! The texture is smoother, mixes better, no grit remaining. The additional vitamins and probiotics are great improvements to my daily routine."
              </p>
            </div>
          </div>

          <div className={styles.testimonialsFooter}>
            <p className={styles.testimonialsDisclaimer}>
              Zynava underwent a research-backed update in January of 2025. Reviews prior to that month reflect an earlier formulation.
            </p>
            <Button 
              variant="outline" 
              className={styles.testimonialsButton}
            >
              See All Reviews
            </Button>
          </div>
        </div>
      </section>

            {/* Health Benefits Categories Section */}
      <section className={styles.healthBenefitsSection}>
        <div className={styles.healthBenefitsContainer}>
          <div className={styles.healthBenefitsHeader}>
            <h2 className={styles.healthBenefitsTitle}>
              Comprehensive Health Solutions
              <span className={styles.healthBenefitsTitleAccent}>for Every Aspect of Wellness</span>
            </h2>
            <p className={styles.healthBenefitsDescription}>
              From cardiovascular support to cognitive enhancement, our scientifically-formulated supplements target your specific health goals.
            </p>
          </div>

          <div className={styles.healthBenefitsGrid}>
            {/* Cardiovascular Health */}
            <div className={`${styles.healthBenefitCard} group`}>
              <div className={`${styles.healthBenefitIcon} ${styles.iconPink}`}>
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className={styles.healthBenefitTitle}>Cardiovascular Health</h3>
              <p className={styles.healthBenefitDescription}>Support healthy blood flow, cholesterol levels, and heart function</p>
              <ul className={styles.healthBenefitList}>
                <li>• Nattokinase Plus - Blood flow support</li>
                <li>• Cholesterol maintenance</li>
                <li>• Ubiquinol CoQ10</li>
                <li>• Heart rhythm support</li>
              </ul>
            </div>

            {/* Digestive & Gut Health */}
            <div className={`${styles.healthBenefitCard} group`}>
              <div className={`${styles.healthBenefitIcon} ${styles.iconGreen}`}>
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className={styles.healthBenefitTitle}>Digestive Health</h3>
              <p className={styles.healthBenefitDescription}>Promote gut balance, digestive comfort, and microbiome health</p>
              <ul className={styles.healthBenefitList}>
                <li>• GI Benefits powder</li>
                <li>• 52.5 billion CFU probiotics</li>
                <li>• Digestive lining support</li>
                <li>• Immune function boost</li>
              </ul>
            </div>

            {/* Bone, Joint & Beauty */}
            <div className={`${styles.healthBenefitCard} group`}>
              <div className={`${styles.healthBenefitIcon} ${styles.iconOrange}`}>
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className={styles.healthBenefitTitle}>Joint & Beauty</h3>
              <p className={styles.healthBenefitDescription}>Maintain healthy joints, bones, skin, and hair</p>
              <ul className={styles.healthBenefitList}>
                <li>• Collagen Flex for joints</li>
                <li>• Hair Effects formula</li>
                <li>• Bone health support</li>
                <li>• Skin radiance complex</li>
              </ul>
            </div>

            {/* Sleep & Stress */}
            <div className={`${styles.healthBenefitCard} group`}>
              <div className={`${styles.healthBenefitIcon} ${styles.iconPurple}`}>
                <span className="text-white text-2xl">😴</span>
              </div>
              <h3 className={styles.healthBenefitTitle}>Sleep & Stress</h3>
              <p className={styles.healthBenefitDescription}>Promote restful sleep and stress management</p>
              <ul className={styles.healthBenefitList}>
                <li>• Melatonin-free sleep support</li>
                <li>• Ashwagandha for calm</li>
                <li>• Magnesium for relaxation</li>
                <li>• Mood balance support</li>
              </ul>
            </div>
          </div>

          <div className={styles.healthBenefitsFooter}>
            <Button 
              className={styles.healthBenefitsButton}
            >
              Explore All Supplements
            </Button>
          </div>
        </div>
      </section>

      {/* Energy & Cognitive Support */}
      <section className={styles.peakPerformanceSection}>
        <div className={styles.peakPerformanceContainer}>
          <div className={styles.peakPerformanceHeader}>
            <h2 className={styles.peakPerformanceTitle}>
              Peak Performance &
              <span className={styles.peakPerformanceTitleAccent}> Mental Clarity</span>
            </h2>
            <p className={styles.peakPerformanceDescription}>
              Advanced formulations for energy, cognitive function, and healthy aging.
            </p>
          </div>

          <div className={styles.peakPerformanceGrid}>
            {/* Energy & Antioxidants */}
            <div className={`${styles.peakPerformanceCard} group`}>
              <div className={styles.peakPerformanceCardHeader}>
                <div className={`${styles.peakPerformanceIconContainer} ${styles.bgLightOrange} animate-pulse-gentle`}>
                  <span className={`${styles.peakPerformanceIcon} animate-float`}>⚡</span>
                </div>
                <h3 className={styles.peakPerformanceCardTitle}>Energy & Vitality</h3>
                <p className={styles.peakPerformanceCardDescription}>Boost your daily energy and support cellular health</p>
              </div>
              <div className={styles.peakPerformanceFeatures}>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>NAD+ Activate</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Supports healthy aging and energy production</p>
                  </div>
                </div>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>Liposomal Vitamin C</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Enhanced bioavailability for immune support</p>
                  </div>
                </div>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>Glutathione</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Master antioxidant for cellular health</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cognitive Support */}
            <div className={`${styles.peakPerformanceCard} group`}>
              <div className={styles.peakPerformanceCardHeader}>
                <div className={`${styles.peakPerformanceIconContainer} ${styles.bgLightBlue} animate-pulse-delayed`}>
                  <span className={`${styles.peakPerformanceIcon} animate-float-delayed`}>🧠</span>
                </div>
                <h3 className={styles.peakPerformanceCardTitle}>Brain Health</h3>
                <p className={styles.peakPerformanceCardDescription}>Enhance focus, memory, and cognitive performance</p>
              </div>
              <div className={styles.peakPerformanceFeatures}>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>Neuro Benefits</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Focus, concentration, and memory support</p>
                  </div>
                </div>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>Ubiquinol CoQ10</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Brain energy and cognitive function</p>
                  </div>
                </div>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>Tri-Mag</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Mood support and stress management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Nutrition */}
            <div className={`${styles.peakPerformanceCard} group`}>
              <div className={styles.peakPerformanceCardHeader}>
                <div className={`${styles.peakPerformanceIconContainer} ${styles.bgLightGreen} animate-pulse-delayed-2`}>
                  <span className={`${styles.peakPerformanceIcon} animate-float-delayed-2`}>🎯</span>
                </div>
                <h3 className={styles.peakPerformanceCardTitle}>Complete Wellness</h3>
                <p className={styles.peakPerformanceCardDescription}>Comprehensive nutrition for total body support</p>
              </div>
              <div className={styles.peakPerformanceFeatures}>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>Daily Best Ultra</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Comprehensive multivitamin complex</p>
                  </div>
                </div>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>ADK Formula</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Vitamins A, D3, and K2 for bone health</p>
                  </div>
                </div>
                <div className={styles.peakPerformanceFeature}>
                  <div className={styles.peakPerformanceFeatureBullet}></div>
                  <div>
                    <h4 className={styles.peakPerformanceFeatureTitle}>Multimineral Complex</h4>
                    <p className={styles.peakPerformanceFeatureDescription}>Essential minerals with Vitamin D</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className={styles.qualitySection}>
        <div className={styles.qualityContainer}>
          <h2 className={styles.qualityTitle}>
            Premium Quality
            <span className={styles.qualityTitleAccent}> You Can Trust</span>
          </h2>
          <p className={styles.qualityDescription}>
            Every Zynava supplement meets the highest standards for purity, potency, and bioavailability.
          </p>
          
          <div className={styles.qualityGrid}>
            <div className={`${styles.qualityItem} group`}>
              <div className={`${styles.qualityIcon} ${styles.iconGreen}`}>
                <span className="text-white text-2xl font-bold">🌱</span>
              </div>
              <h4 className={styles.qualityLabel}>VEGETARIAN FRIENDLY</h4>
            </div>
            <div className={`${styles.qualityItem} group`}>
              <div className={`${styles.qualityIcon} ${styles.iconOrange}`}>
                <span className="text-white text-2xl font-bold">🚫</span>
              </div>
              <h4 className={styles.qualityLabel}>GLUTEN-FREE</h4>
            </div>
            <div className={`${styles.qualityItem} group`}>
              <div className={`${styles.qualityIcon} ${styles.iconBlue}`}>
                <span className="text-white text-2xl font-bold">💧</span>
              </div>
              <h4 className={styles.qualityLabel}>LIPOSOMAL DELIVERY</h4>
            </div>
            <div className={`${styles.qualityItem} group`}>
              <div className={`${styles.qualityIcon} ${styles.iconPurple}`}>
                <span className="text-white text-2xl font-bold">🧬</span>
              </div>
              <h4 className={styles.qualityLabel}>NON-GMO</h4>
            </div>
            <div className={`${styles.qualityItem} group`}>
              <div className={`${styles.qualityIcon} ${styles.iconPink}`}>
                <span className="text-white text-2xl font-bold">🔬</span>
              </div>
              <h4 className={styles.qualityLabel}>THIRD-PARTY TESTED</h4>
            </div>
            <div className={`${styles.qualityItem} group`}>
              <div className={`${styles.qualityIcon} ${styles.iconGray}`}>
                <span className="text-white text-2xl font-bold">⚗️</span>
              </div>
              <h4 className={styles.qualityLabel}>CLINICALLY RESEARCHED</h4>
            </div>
          </div>
        </div>
      </section>

            {/* FAQs Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 className={styles.faqTitle}>
              Frequently Asked Questions
            </h2>
            <p className={styles.faqSubtitle}>
              Everything you need to know about Zynava supplements
            </p>
          </div>

          <div className={styles.faqList}>
            {/* FAQ Item 1 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3 className={styles.faqQuestionText}>How do I know if Zynava supplements are right for me?</h3>
                <span className={styles.faqToggle}>−</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>Zynava supplements are designed as foundational nutrition support for a wide range of people. Our formulas are studied across multiple clinical trials, consistently showing benefits for various lifestyles and health goals.</p>
                <p>If you have specific health concerns or take medications, please consult your healthcare practitioner to determine which supplements are right for you.</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3 className={styles.faqQuestionText}>When should I expect to see benefits?</h3>
                <span className={styles.faqToggle}>+</span>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3 className={styles.faqQuestionText}>What makes Zynava different from other supplement brands?</h3>
                <span className={styles.faqToggle}>+</span>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3 className={styles.faqQuestionText}>What quality measures do you take to ensure supplement purity?</h3>
                <span className={styles.faqToggle}>+</span>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3 className={styles.faqQuestionText}>Can I take multiple Zynava supplements together?</h3>
                <span className={styles.faqToggle}>+</span>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3 className={styles.faqQuestionText}>Are Zynava supplements safe for long-term use?</h3>
                <span className={styles.faqToggle}>+</span>
              </div>
            </div>
          </div>

          <div className={styles.faqFooter}>
            <Button 
              variant="outline" 
              className={styles.faqButton}
            >
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
      </div>
  );
}
