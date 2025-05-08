import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import { ThemeProvider } from '@/hooks/use-theme';
import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:type" element={<CategoryPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <footer className="bg-muted py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Translate Lux Taxi</h3>
                  <p className="text-muted-foreground text-sm">
                    Providing premium transportation services in Luxembourg and beyond since 2018.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Airport Transfers</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Business Travel</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">City Tours</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Long Distance</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Contact</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground">10 Boulevard Royal</li>
                    <li className="text-muted-foreground">L-2449 Luxembourg</li>
                    <li className="text-muted-foreground">+352 123 456 789</li>
                    <li className="text-muted-foreground">info@translatelux.com</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Translate Lux Taxi. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;