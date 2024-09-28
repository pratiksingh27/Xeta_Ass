// import logo from './logo.svg';
import './App.css';
import ChooseSection from './components/ChooseSection';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import ThingsYouNeed from './components/ThingsYouNeed';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="App font-sans">
      <HeroSection />
      <ChooseSection/>
      <VideoSection/>
      <TestimonialsSection/>
      <ThingsYouNeed/>
     
      <ContactForm/>
    </div>
  );
}

export default App;
