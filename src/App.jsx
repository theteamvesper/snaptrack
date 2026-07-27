import Aurora from './components/ui/Aurora';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SnapTrack from './components/SnapTrack';
import BirdClash from './components/BirdClash';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-black">
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SnapTrack />
        <BirdClash />
        <About />
      </main>
      <Footer />
    </div>
  );
}
