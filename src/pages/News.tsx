
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const news = [
  {
    id: 1,
    title: "BucaraTec recibe reconocimiento como comunidad innovadora",
    date: "2 Agosto, 2023",
    category: "Noticias",
    description: "La comunidad fue reconocida por su labor en la promoción del desarrollo tecnológico en la región. Este reconocimiento fue otorgado por la Cámara de Comercio y destaca los esfuerzos por conectar el talento local con oportunidades globales.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: 2,
    title: "Nuevo programa de mentoría para desarrolladores junior",
    date: "28 Julio, 2023",
    category: "Anuncios",
    description: "Lanzamos un programa para conectar desarrolladores experimentados con nuevos talentos de la región. El programa tendrá una duración de 3 meses y contará con la participación de mentores de empresas reconocidas del sector tecnológico.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: 3,
    title: "Alianza con empresas tecnológicas para crear oportunidades laborales",
    date: "15 Julio, 2023",
    category: "Alianzas",
    description: "BucaraTec firma convenio con importantes empresas para facilitar la contratación de talento local. Este acuerdo permitirá a los miembros de la comunidad acceder a oportunidades laborales exclusivas y programas de formación especializados.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: 4,
    title: "Primera edición del concurso de proyectos tecnológicos",
    date: "5 Julio, 2023",
    category: "Eventos",
    description: "Anunciamos el primer concurso de proyectos tecnológicos de BucaraTec con importantes premios para los ganadores. Las inscripciones estarán abiertas hasta el 30 de julio y la presentación de proyectos se realizará en septiembre.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: 5,
    title: "BucaraTec lanza programa de capacitación gratuita en desarrollo web",
    date: "20 Junio, 2023",
    category: "Formación",
    description: "En colaboración con patrocinadores locales, BucaraTec ofrecerá formación gratuita en desarrollo web para 50 personas seleccionadas. El programa incluirá clases presenciales y virtuales, con mentorías personalizadas.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: 6,
    title: "Resumen del primer semestre: actividades y logros de la comunidad",
    date: "10 Junio, 2023",
    category: "Noticias",
    description: "Compartimos un balance de los principales hitos alcanzados por nuestra comunidad durante los primeros seis meses del año. Destacamos el crecimiento en número de miembros y la calidad de los eventos realizados.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=350"
  }
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-bucaratec-600 text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Noticias</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Mantente al día con lo último de BucaraTec: anuncios, alianzas, eventos y logros de nuestra comunidad.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input placeholder="Buscar noticias..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="text-bucaratec-600">Más recientes</Button>
              <Button variant="ghost">Anuncios</Button>
              <Button variant="ghost">Eventos</Button>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <p className="text-muted-foreground line-clamp-3">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-bucaratec-600 hover:text-bucaratec-700 hover:bg-bucaratec-50 p-0">
                    Leer más →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="text-bucaratec-600 border-bucaratec-200 hover:bg-bucaratec-50 hover:text-bucaratec-700">
              Cargar más noticias
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
