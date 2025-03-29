
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, News, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-bucaratec-400 to-bucaratec-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">BT</span>
            </div>
            <span className="font-bold text-xl text-bucaratec-600">BucaraTec</span>
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/eventos" className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-bucaratec-600">
                <Calendar className="h-4 w-4" />
                <span>Eventos</span>
              </Link>
            </li>
            <li>
              <Link to="/noticias" className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-bucaratec-600">
                <News className="h-4 w-4" />
                <span>Noticias</span>
              </Link>
            </li>
            <li>
              <Link to="/categorias" className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-bucaratec-600">
                <MessageSquare className="h-4 w-4" />
                <span>Categorías</span>
              </Link>
            </li>
            <li>
              <Link to="/testimonios" className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-bucaratec-600">
                <Users className="h-4 w-4" />
                <span>Testimonios</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button className="bg-bucaratec-600 hover:bg-bucaratec-700 text-white">Unirse</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
