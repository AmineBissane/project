import { Button } from '@/components/ui/button';

const WelcomeHeader = () => {
  const scrollToFleet = () => {
    const fleetSection = document.querySelector('#luxury-fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-background border-b">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Premium Transportation <span className="text-primary">In Malaga</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Experience the perfect blend of comfort, reliability, and luxury with our premium taxi service throughout Luxembourg and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToFleet}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;