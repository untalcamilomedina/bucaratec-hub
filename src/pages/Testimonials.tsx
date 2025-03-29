
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "María Rodríguez",
    role: "Desarrolladora Frontend",
    avatar: "MR",
    company: "TechSolutions",
    testimonial: "BucaraTec ha sido fundamental en mi crecimiento profesional. Los eventos y la comunidad me han ayudado a mantenerme actualizada con las tendencias del desarrollo web. He conocido personas increíbles que ahora son parte de mi red profesional.",
    year: 2022
  },
  {
    id: 2,
    name: "Carlos Gómez",
    role: "Data Scientist",
    avatar: "CG",
    company: "DataInsights",
    testimonial: "Gracias a las conexiones que hice en los meetups de BucaraTec, conseguí mi actual empleo. La comunidad es increíblemente acogedora y siempre dispuesta a ayudar. Los talleres prácticos me permitieron aprender tecnologías que ahora aplico diariamente.",
    year: 2023
  },
  {
    id: 3,
    name: "Laura Sánchez",
    role: "UX Designer",
    avatar: "LS",
    company: "CreativeHub",
    testimonial: "Los workshops de BucaraTec me han permitido aprender nuevas herramientas y metodologías que aplico directamente en mi trabajo diario. Es un espacio valioso para cualquier profesional tech. La comunidad de diseñadores ha sido un gran apoyo para mi carrera.",
    year: 2022
  },
  {
    id: 4,
    name: "Javier Mendoza",
    role: "DevOps Engineer",
    avatar: "JM",
    company: "CloudTech",
    testimonial: "Encontré en BucaraTec un espacio donde compartir conocimientos y aprender de otros expertos en infraestructura y cloud. Los hackathons organizados me permitieron poner a prueba mis habilidades y trabajar en equipo con otros profesionales.",
    year: 2023
  },
  {
    id: 5,
    name: "Ana Pérez",
    role: "Mobile Developer",
    avatar: "AP",
    company: "AppFactory",
    testimonial: "Ser parte de BucaraTec me ha dado la oportunidad de crecer como desarrolladora móvil. Los eventos específicos sobre tecnologías móviles son de gran calidad y los contactos que he hecho me han abierto muchas puertas profesionales.",
    year: 2021
  },
  {
    id: 6,
    name: "Ricardo Torres",
    role: "CTO",
    avatar: "RT",
    company: "StartupLocal",
    testimonial: "Como fundador de una startup tech, BucaraTec ha sido un aliado fundamental para encontrar talento local. La comunidad tiene profesionales de alto nivel y el ambiente colaborativo es exactamente lo que necesitábamos para crecer como empresa.",
    year: 2023
  },
  {
    id: 7,
    name: "Patricia Duarte",
    role: "Product Manager",
    avatar: "PD",
    company: "ProductLab",
    testimonial: "Los eventos de gestión de producto en BucaraTec me han ayudado a mejorar mis habilidades y a conectar con otros profesionales del área. Es inspirador ver cómo crece la comunidad tech en nuestra región gracias a iniciativas como esta.",
    year: 2022
  },
  {
    id: 8,
    name: "Daniel Moreno",
    role: "Blockchain Developer",
    avatar: "DM",
    company: "BlockInnovate",
    testimonial: "Encontré en BucaraTec un grupo de entusiastas de las tecnologías blockchain con quienes compartir ideas y desarrollar proyectos. La comunidad está a la vanguardia y siempre buscando explorar nuevas tendencias tecnológicas.",
    year: 2023
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-bucaratec-600 text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Testimonios</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Conoce las experiencias de quienes forman parte de BucaraTec y cómo la comunidad ha impactado en su desarrollo profesional.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-hover bg-gradient-to-br from-white to-bucaratec-50/50">
                <CardHeader className="pb-2 flex items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-bucaratec-200 text-bucaratec-700">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 text-left">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                  <p className="text-xs text-right mt-4 text-gray-500">Miembro desde {testimonial.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">¿Quieres compartir tu experiencia?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si has sido parte de BucaraTec y quieres contar cómo la comunidad ha impactado en tu carrera, nos encantaría escucharte.
            </p>
            <Button className="bg-bucaratec-600 hover:bg-bucaratec-700">Compartir mi testimonio</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
