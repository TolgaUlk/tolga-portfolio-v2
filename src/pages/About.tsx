import { useNavigate } from 'react-router-dom';
import selfportrait from '@/assets/selfportrait.jpg';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between py-6 md:py-8 px-4 md:px-6">
        <div>
          <button
            onClick={() => navigate('/')}
            className="text-xl md:text-2xl font-display font-medium tracking-tight text-foreground hover:text-foreground/80 transition-colors duration-200"
          >
            tolga ulkumen
          </button>
        </div>
      </header>

      <div className="pt-24 md:pt-32 px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left - Image */}
          <div className="lg:w-1/2">
            <img
              src={selfportrait}
              alt="Tolga Ülkümen"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right - Text */}
          <div className="lg:w-1/2 font-sans text-foreground">
            <p className="text-sm md:text-base leading-relaxed mb-6">
              Berlin-based Senior Art Director and Concept Developer with over 17 years of experience in international network agencies.
            </p>

            <p className="text-sm md:text-base leading-relaxed mb-6">
              After graduating from California State University, Los Angeles, Tolga Ülkümen began his career at TBWA\Istanbul, continued at DDB\Istanbul, M&C Saatchi Berlin and now working in DOJO Berlin as a concept finder and Senior Art Director. Throughout his career, he has developed integrated campaigns across film, print, outdoor and digital.
            </p>

            <p className="text-sm md:text-base leading-relaxed mb-10">
              In addition to his advertising work, he works as an AI film director, illustrator, 2D animator, creating visual concepts, animatics and narrative-driven content.
            </p>

            <h3 className="text-sm md:text-base font-medium tracking-wider mb-3">SELECTED CLIENTS:</h3>
            <p className="text-sm md:text-base leading-relaxed mb-10">
              Apple - HBO Max - Disney+ - Prime Video - IKEA - McDonald's - Spotify - Edeka - Berlin - Wolt - Tinder - BMW - Klarna - Fotografiska - Ferrero - Efes Pilsen - KoRo
            </p>

            <h3 className="text-sm md:text-base font-medium tracking-wider mb-3">AWARD LIST:</h3>
            <div className="text-[10px] md:text-xs leading-relaxed space-y-0.5 text-muted-foreground">
              <p>OMNI AI Film Festival - Silver <span className="italic">*The Beef*</span></p>
              <p>GEMA - Gold <span className="italic">*HBO Max*</span></p>
              <p>GEMA - Gold <span className="italic">*HBO Max*</span></p>
              <p>GEMA - Gold <span className="italic">*HBO Max*</span></p>
              <p>GEMA - Gold <span className="italic">*HBO Max*</span></p>
              <p>Cannes Lions - Print - Bronze <span className="italic">*IKEA*</span></p>
              <p>Cannes Lions - Film - Shortlist <span className="italic">*Mobotix*</span></p>
              <p>Cannes Lions - Print - Shortlist <span className="italic">*IKEA*</span></p>
              <p>Golden Drum - Film - Gold <span className="italic">*Mobotix*</span></p>
              <p>Golden Drum - Film - Silver <span className="italic">*Mobotix*</span></p>
              <p>Golden Drum - Outdoor - Gold <span className="italic">*IKEA*</span></p>
              <p>New York Festival - Film - 3rd Prize <span className="italic">*Mobotix*</span></p>
              <p>New York Festival - Print <span className="italic">*IKEA*</span></p>
              <p>One Show - Merit Award - IKEA</p>
              <p>Crystal Apple - Print - Grand Prix <span className="italic">*Tivibu*</span></p>
              <p>Crystal Apple - Film - Gold <span className="italic">*McDonald's*</span></p>
              <p>Crystal Apple - Film - Gold <span className="italic">*Mobotix*</span></p>
              <p>Crystal Apple - Film - Gold <span className="italic">*Mobotix*</span></p>
              <p>Crystal Apple - Print - Gold <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Print - Gold <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Print - Gold <span className="italic">*Tivibu*</span></p>
              <p>Crystal Apple - Print - Gold <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Outdoor - Gold <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Outdoor - Gold <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Design - Gold <span className="italic">*Akbank*</span></p>
              <p>Crystal Apple - Ambient - Gold <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Print - Silver <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Print - Silver <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Print - Silver <span className="italic">*Marshall*</span></p>
              <p>Crystal Apple - Outdoor - Silver <span className="italic">*IKEA*</span></p>
              <p>Crystal Apple - Print - Bronze <span className="italic">*Kanukte Flowers*</span></p>
              <p>Effie - Bronze <span className="italic">*McDonald's*</span></p>
              <p>Felis - Film <span className="italic">*Mobotix*</span></p>
              <p>Kirmizi - Print <span className="italic">*IKEA*</span></p>
              <p>Kirmizi - Outdoor <span className="italic">*IKEA*</span></p>
              <p>Canli Kirmizi - Outdoor <span className="italic">*IKEA*</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
