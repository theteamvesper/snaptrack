import { useEffect, useState } from 'react';
import { BIRD_CLASH_LAUNCH } from './data/site';
import Aurora from './components/ui/Aurora';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SnapTrack from './components/SnapTrack';
import BirdClash from './components/BirdClash';
import About from './components/About';
import Footer from './components/Footer';

const pad = (n) => String(n).padStart(2, '0');

function readCountdown() {
  const left = Math.max(0, new Date(BIRD_CLASH_LAUNCH).getTime() - Date.now());
  return {
    days: pad(Math.floor(left / 86400000)),
    hours: pad(Math.floor(left / 3600000) % 24),
    mins: pad(Math.floor(left / 60000) % 60),
    secs: pad(Math.floor(left / 1000) % 60),
  };
}

export default function App() {
  const [countdown, setCountdown] = useState(readCountdown);

  useEffect(() => {
    const id = setInterval(() => setCountdown(readCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative isolate min-h-screen bg-black">
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SnapTrack />
        <BirdClash countdown={countdown} />
        <About />
      </main>
      <Footer />
    </div>
  );
}
