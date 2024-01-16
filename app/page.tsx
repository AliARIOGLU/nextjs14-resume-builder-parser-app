import { HeroSection } from "./home/hero-section";
import { Steps } from "./home/steps";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <HeroSection />
      <Steps />
    </main>
  );
}
