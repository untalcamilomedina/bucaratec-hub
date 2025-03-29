
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "María Rodríguez",
    role: "Desarrolladora Frontend",
    avatar: "MR",
    testimonial: "BucaraTec ha sido fundamental en mi crecimiento profesional. Los eventos y la comunidad me han ayudado a mantenerme actualizada con las tendencias del desarrollo web."
  },
  {
    id: 2,
    name: "Carlos Gómez",
    role: "Data Scientist",
    avatar: "CG",
    testimonial: "Gracias a las conexiones que hice en los meetups de BucaraTec, conseguí mi actual empleo. La comunidad es increíblemente acogedora y siempre dispuesta a ayudar."
  },
  {
    id: 3,
    name: "Laura Sánchez",
    role: "UX Designer",
    avatar: "LS",
    testimonial: "Los workshops de BucaraTec me han permitido aprender nuevas herramientas y metodologías que aplico directamente en mi trabajo diario. Es un espacio valioso para cualquier profesional tech."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Lo que dice nuestra comunidad</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conoce las experiencias de quienes forman parte de BucaraTec y cómo la comunidad ha impactado en su desarrollo profesional
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover bg-gradient-to-br from-white to-bucaratec-50/50">
              <CardHeader className="pb-2 flex items-center">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="" alt={testimonial.name} />
                  <AvatarFallback className="bg-bucaratec-200 text-bucaratec-700">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="ml-4 text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
