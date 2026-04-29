import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Butterflies from './components/Butterflies';

// Lazy loaded components
const VideoCenterpiece = lazy(() => import('./components/VideoCenterpiece'));
const Projects = lazy(() => import('./components/Projects'));
const CareerTransition = lazy(() => import('./components/CareerTransition'));
const About = lazy(() => import('./components/About'));
const PassionTabs = lazy(() => import('./components/PassionTabs'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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
        <Suspense fallback={<div className="h-24 w-full flex items-center justify-center">Loading...</div>}>
          <VideoCenterpiece />
          <Projects />
          <CareerTransition />
          <About />
          <PassionTabs />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;
