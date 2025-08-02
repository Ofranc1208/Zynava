import { Button } from "@/components/ui/button";
import styles from "./page.module.css";

export default function TrierPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Main Headlines */}
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>
            The Trier
          </h1>
          <h2 className={styles.subTitle}>
            Question 1 of 4: What is your primary wellness goal?
          </h2>
        </div>

        {/* Answer Options Grid */}
        <div className={styles.optionsGrid}>
          {/* Overall Health & Wellness - 52% */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionPrimary}`}
          >
            <span className={styles.optionIcon}>🌟</span>
            <span className={styles.optionText}>Overall Health & Wellness</span>
          </Button>

          {/* Boost Immunity - 40% */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionRed}`}
          >
            <span className={styles.optionIcon}>🛡️</span>
            <span className={styles.optionText}>Boost Immunity</span>
          </Button>

          {/* Energy & Vitality - 30% */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionOrange}`}
          >
            <span className={styles.optionIcon}>⚡</span>
            <span className={styles.optionText}>Energy & Vitality</span>
          </Button>

          {/* Bone Health - 28% */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionGreen}`}
          >
            <span className={styles.optionIcon}>🦴</span>
            <span className={styles.optionText}>Bone & Joint Health</span>
          </Button>



          {/* Heart Health - 24% */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionPink}`}
          >
            <span className={styles.optionIcon}>❤️</span>
            <span className={styles.optionText}>Heart Health</span>
          </Button>

          {/* Gut Health */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionTeal}`}
          >
            <span className={styles.optionIcon}>🌱</span>
            <span className={styles.optionText}>Gut Health</span>
          </Button>

          {/* Stress & Sleep - 17% */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionBlue}`}
          >
            <span className={styles.optionIcon}>😴</span>
            <span className={styles.optionText}>Sleep & Stress Relief</span>
          </Button>

          {/* Brain Health & Cognitive Function - 15% */}
          <Button
            size="lg"
            variant="outline"
            className={`${styles.optionButton} ${styles.optionGray}`}
          >
            <span className={styles.optionIcon}>🧠</span>
            <span className={styles.optionText}>Brain Health & Memory</span>
          </Button>
        </div>

        {/* Progress Indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progressDots}>
            <div className={`${styles.progressDot} ${styles.progressDotActive}`}></div>
            <div className={`${styles.progressDot} ${styles.progressDotInactive}`}></div>
            <div className={`${styles.progressDot} ${styles.progressDotInactive}`}></div>
            <div className={`${styles.progressDot} ${styles.progressDotInactive}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}