
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title: "BucaraTec recibe reconocimiento como comunidad innovadora",
    date: "2 Agosto, 2023",
    category: "Noticias",
    description: "La comunidad fue reconocida por su labor en la promoción del desarrollo tecnológico en la región.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: 2,
    title: "Nuevo programa de mentoría para desarrolladores junior",
    date: "28 Julio, 2023",
    category: "Anuncios",
    description: "Lanzamos un programa para conectar desarrolladores experimentados con nuevos talentos de la región.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: 3,
    title: "Alianza con empresas tecnológicas para crear oportunidades laborales",
    date: "15 Julio, 2023",
    category: "Alianzas",
    description: "BucaraTec firma convenio con importantes empresas para facilitar la contratación de talento local.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350"
  },
];

const NewsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Noticias Recientes</h2>
            <p className="text-muted-foreground mt-2">Mantente al día con las últimas novedades de nuestra comunidad</p>
          </div>
          <Button className="bg-bucaratec-600 hover:bg-bucaratec-700">Ver todas</Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 bg-bucaratec-100 text-bucaratec-700 rounded-full">
                    {item.category}
                  </span>
                  <CardDescription>{item.date}</CardDescription>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-bucaratec-600 hover:text-bucaratec-700 hover:bg-bucaratec-50 p-0">
                  Leer más →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
