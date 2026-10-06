import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { SocialAccounts } from './components/SocialAccounts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <SocialAccounts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}