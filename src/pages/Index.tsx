import { useState, lazy, Suspense } from "react";
import { WeddingDataProvider } from "@/hooks/useWeddingData";
import WelcomeScreen from "@/components/wedding/WelcomeScreen";
import HeroSection from "@/components/wedding/HeroSection";
import InvitationVideo from "@/components/wedding/InvitationVideo";
import FloralDivider from "@/components/wedding/FloralDivider";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import ScrollToTop from "@/components/wedding/ScrollToTop";

const MantraSection = lazy(() => import("@/components/wedding/MantraSection"));
const EventsTimeline = lazy(() => import("@/components/wedding/EventsTimeline"));
const CountdownTimer = lazy(() => import("@/components/wedding/CountdownTimer"));
const InvitationMessage = lazy(() => import("@/components/wedding/InvitationMessage"));
const QuoteSlider = lazy(() => import("@/components/wedding/QuoteSlider"));
const BlessingsSection = lazy(() => import("@/components/wedding/BlessingsSection"));
const LocationSection = lazy(() => import("@/components/wedding/LocationSection"));
const Gallery = lazy(() => import("@/components/wedding/Gallery"));
const Footer = lazy(() => import("@/components/wedding/Footer"));

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowContent(true);
  };

  return (
    <WeddingDataProvider>
      <div className="min-h-screen overflow-x-hidden">
        {!showContent && <WelcomeScreen onComplete={handleWelcomeComplete} />}

        {showContent && (
          <>
            <HeroSection />
            <InvitationVideo />
            <FloralDivider />
            <Suspense fallback={<div className="h-32" />}>
              <MantraSection />
              <FloralDivider />
              <EventsTimeline />
              <FloralDivider />
              <CountdownTimer />
              <FloralDivider />
              <InvitationMessage />
              <FloralDivider />
              <QuoteSlider />
              <FloralDivider />
              <BlessingsSection />
              <FloralDivider />
              <LocationSection />
              <FloralDivider />
              <Gallery />
              <FloralDivider />
              <Footer />
            </Suspense>
            <ScrollToTop />
          </>
        )}
        <MusicPlayer />
      </div>
    </WeddingDataProvider>
  );
};

export default Index;
