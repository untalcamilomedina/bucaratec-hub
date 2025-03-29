
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const events = [
  {
    id: 1,
    title: "Workshop de React",
    date: "15 Agosto, 2023",
    time: "18:00 - 20:00",
    location: "Centro de Innovación",
    description: "Aprende a construir aplicaciones modernas con React y las últimas tecnologías.",
    category: "Workshop"
  },
  {
    id: 2,
    title: "Meetup de Desarrollo Web",
    date: "22 Agosto, 2023",
    time: "19:00 - 21:00",
    location: "Coworking Central",
    description: "Discusiones sobre las tendencias actuales en desarrollo web y networking.",
    category: "Meetup"
  },
  {
    id: 3,
    title: "Hackathon BucaraTec",
    date: "10-12 Septiembre, 2023",
    time: "Todo el día",
    location: "Universidad Industrial de Santander",
    description: "48 horas para desarrollar soluciones innovadoras a problemas reales.",
    category: "Hackathon"
  },
  {
    id: 4,
    title: "Conferencia Tech Trends 2023",
    date: "5 Octubre, 2023",
    time: "10:00 - 18:00",
    location: "Centro de Convenciones Neomundo",
    description: "Expertos internacionales comparten las últimas tendencias tecnológicas.",
    category: "Conferencia"
  },
  {
    id: 5,
    title: "Taller de Data Science",
    date: "20 Octubre, 2023",
    time: "17:00 - 20:00",
    location: "Campus UPB",
    description: "Introducción práctica al análisis de datos y machine learning.",
    category: "Workshop"
  },
  {
    id: 6,
    title: "Networking Tech & Business",
    date: "3 Noviembre, 2023",
    time: "19:00 - 22:00",
    location: "Terraza Central",
    description: "Espacio para conectar profesionales tech con emprendedores y empresarios.",
    category: "Networking"
  }
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-bucaratec-600 text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Eventos</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Participa en nuestros workshops, meetups, hackathons y más. Conoce a otros profesionales y aprende nuevas habilidades.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="workshop">Workshops</TabsTrigger>
              <TabsTrigger value="meetup">Meetups</TabsTrigger>
              <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
              <TabsTrigger value="conference">Conferencias</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>
            
            <TabsContent value="workshop" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.filter(event => event.category.toLowerCase() === "workshop").map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>
            
            <TabsContent value="meetup" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.filter(event => event.category.toLowerCase() === "meetup").map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>
            
            <TabsContent value="hackathon" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.filter(event => event.category.toLowerCase() === "hackathon").map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>
            
            <TabsContent value="conference" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.filter(event => event.category.toLowerCase() === "conferencia").map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">¿Quieres proponer un evento para la comunidad?</p>
            <Button className="bg-bucaratec-600 hover:bg-bucaratec-700">Proponer evento</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Componente para la tarjeta de evento
const EventCard = ({ event }: { event: typeof events[0] }) => (
  <Card className="card-hover">
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
      <div className="mt-3">
        <span className="text-xs font-medium px-2.5 py-1 bg-bucaratec-100 text-bucaratec-700 rounded-full">
          {event.category}
        </span>
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full text-bucaratec-600 border-bucaratec-200 hover:bg-bucaratec-50 hover:text-bucaratec-700">
        Inscribirse
      </Button>
    </CardFooter>
  </Card>
);

export default Events;
