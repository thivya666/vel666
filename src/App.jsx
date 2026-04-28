import Header from './components/Header';
import Hero from './components/Hero';
import VideoCenterpiece from './components/VideoCenterpiece';
import Projects from './components/Projects';
import CareerTransition from './components/CareerTransition';
import About from './components/About';
import PassionTabs from './components/PassionTabs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Butterflies from './components/Butterflies';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-primary/20 selection:text-foreground font-body">
      {/* Base global background gradients configured in App */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-accent/15 rounded-full blur-[120px] -z-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-primary/10 rounded-full blur-[150px] -z-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      <Butterflies />
      
      <Header />
      
      <main className="flex flex-col min-h-screen">
        <Hero />
        <VideoCenterpiece />
        <Projects />
        <CareerTransition />
        <About />
        <PassionTabs />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
