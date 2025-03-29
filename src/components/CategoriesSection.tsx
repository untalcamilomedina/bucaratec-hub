
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    title: "Desarrollo Web",
    icon: "💻",
    description: "Frontend, Backend, Fullstack, y todo lo relacionado con desarrollo de aplicaciones web.",
    topics: ["React", "Node.js", "Angular", "Vue"]
  },
  {
    id: 2,
    title: "Inteligencia Artificial",
    icon: "🤖",
    description: "Machine Learning, Deep Learning, procesamiento de lenguaje natural y visión por computadora.",
    topics: ["TensorFlow", "PyTorch", "NLP", "Visión"]
  },
  {
    id: 3,
    title: "Diseño UX/UI",
    icon: "🎨",
    description: "Diseño de interfaces, experiencia de usuario, prototipado y diseño de producto.",
    topics: ["Figma", "Sketch", "Research", "Wireframes"]
  },
  {
    id: 4,
    title: "DevOps",
    icon: "⚙️",
    description: "CI/CD, automatización, cloud computing y todo lo relacionado con operaciones de desarrollo.",
    topics: ["Docker", "Kubernetes", "AWS", "CI/CD"]
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Categorías de Contenido</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explora nuestras diferentes áreas de conocimiento y encuentra contenido relevante para tu especialidad o intereses
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.id} className="text-center card-hover">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.topics.map((topic, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2.5 py-1 bg-bucaratec-100 text-bucaratec-700 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="text-bucaratec-600 border-bucaratec-200 hover:bg-bucaratec-50 hover:text-bucaratec-700">
                  Explorar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
