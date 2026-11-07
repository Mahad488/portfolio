import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { SocialAccounts } from './components/SocialAccounts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { TechMarquee } from './components/TechMarquee';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen overflow-x-clip text-slate-100">
        <Background />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <SocialAccounts />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}
