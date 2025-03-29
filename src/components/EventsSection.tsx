
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Workshop de React",
    date: "15 Agosto, 2023",
    time: "18:00 - 20:00",
    location: "Centro de Innovación",
    description: "Aprende a construir aplicaciones modernas con React y las últimas tecnologías."
  },
  {
    id: 2,
    title: "Meetup de Desarrollo Web",
    date: "22 Agosto, 2023",
    time: "19:00 - 21:00",
    location: "Coworking Central",
    description: "Discusiones sobre las tendencias actuales en desarrollo web y networking."
  },
  {
    id: 3,
    title: "Hackathon BucaraTec",
    date: "10-12 Septiembre, 2023",
    time: "Todo el día",
    location: "Universidad Industrial de Santander",
    description: "48 horas para desarrollar soluciones innovadoras a problemas reales."
  }
];

const EventsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Próximos Eventos</h2>
            <p className="text-muted-foreground mt-2">Únete a nuestras actividades y conecta con la comunidad</p>
          </div>
          <Button className="bg-bucaratec-600 hover:bg-bucaratec-700">Ver todos</Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="p-2 bg-bucaratec-100 rounded-full">
                    <Calendar className="h-5 w-5 text-bucaratec-600" />
                  </div>
                </div>
                <CardDescription className="flex flex-col gap-1 mt-2">
                  <span>{event.date} · {event.time}</span>
                  <span className="font-medium text-gray-700">{event.location}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-bucaratec-600 border-bucaratec-200 hover:bg-bucaratec-50 hover:text-bucaratec-700">
                  Inscribirse
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
