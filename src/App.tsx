import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { LanguageRibbon } from '@/components/sections/language-ribbon';
import { VisualTapCard } from '@/components/sections/visual-tap-card';
import { JamLabCard } from '@/components/sections/jam-lab-card';
import { FlameStreakCard } from '@/components/sections/flame-streak-card';
import { MasteryGuild } from '@/components/sections/mastery-guild';
import { PocketDororaAndHighFive } from '@/components/sections/pocket-dorora';
import { FinalCta } from '@/components/sections/final-cta';
import { QuestModal } from '@/components/modals/quest-modal';

export function App() {
  const [questModalOpen, setQuestModalOpen] = useState(false);

  const handleStartQuest = () => {
    setQuestModalOpen(true);
  };

  const handleMeetDorora = () => {
    const el = document.getElementById('quests');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <Header onStartQuest={handleStartQuest} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen flex-1">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <HeroSection
            onStartQuest={handleStartQuest}
            onMeetDorora={handleMeetDorora}
          />

          {/* Language Ribbon Carousel */}
          <LanguageRibbon />

          {/* Feature 1: Visual Tap & Imprint (Apple Card) */}
          <div id="method">
            <VisualTapCard />
          </div>

          {/* Feature 2: Real-Voice Jam Lab (Headphones Mascot) */}
          <JamLabCard />

          {/* Feature 3: Flame Runner Streaks (Flame Mascot) */}
          <FlameStreakCard />

          {/* Feature 4: Dorora Mastery Guild (Graduation Mascot) */}
          <MasteryGuild />

          {/* Interactive App Showcase & The High-Five Club */}
          <PocketDororaAndHighFive />

          {/* Bottom Final CTA */}
          <FinalCta onJumpIn={handleStartQuest} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quest / Onboarding Modal */}
      <QuestModal
        open={questModalOpen}
        onOpenChange={setQuestModalOpen}
      />
    </div>
  );
}

export default App;
