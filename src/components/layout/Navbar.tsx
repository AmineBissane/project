import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll logic can be added here if needed in the future
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <MapPin size={28} className="text-black" strokeWidth={2} />
          <span className="font-bold text-xl md:text-2xl text-black">Andalux Transfers</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-black hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-black hover:text-primary transition-colors">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
