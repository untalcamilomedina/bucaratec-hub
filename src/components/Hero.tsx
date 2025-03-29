
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-90"></div>
      <div className="container relative z-10 py-20 md:py-32 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comunidad tecnológica de Bucaramanga
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Un espacio para conectar, aprender y crecer con otros apasionados por la tecnología en nuestra región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-bucaratec-600 hover:bg-gray-100">
              Próximos eventos
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
