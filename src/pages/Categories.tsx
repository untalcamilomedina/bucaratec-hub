
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  {
    id: 1,
    title: "Desarrollo Web",
    icon: "💻",
    description: "Frontend, Backend, Fullstack, y todo lo relacionado con desarrollo de aplicaciones web.",
    topics: ["React", "Node.js", "Angular", "Vue", "Django", "Ruby on Rails", "PHP", "Laravel"],
    articles: [
      { id: 1, title: "Introducción a React Hooks", views: 1205 },
      { id: 2, title: "Optimización de rendimiento en aplicaciones web", views: 943 },
      { id: 3, title: "Mejores prácticas en APIs RESTful", views: 875 }
    ]
  },
  {
    id: 2,
    title: "Inteligencia Artificial",
    icon: "🤖",
    description: "Machine Learning, Deep Learning, procesamiento de lenguaje natural y visión por computadora.",
    topics: ["TensorFlow", "PyTorch", "NLP", "Visión", "Redes Neuronales", "GPT", "Reinforcement Learning"],
    articles: [
      { id: 1, title: "Fundamentos de redes neuronales", views: 890 },
      { id: 2, title: "Implementando ChatGPT en aplicaciones", views: 1320 },
      { id: 3, title: "Clasificación de imágenes con TensorFlow", views: 705 }
    ]
  },
  {
    id: 3,
    title: "Diseño UX/UI",
    icon: "🎨",
    description: "Diseño de interfaces, experiencia de usuario, prototipado y diseño de producto.",
    topics: ["Figma", "Sketch", "Research", "Wireframes", "Design Systems", "Accesibilidad", "User Testing"],
    articles: [
      { id: 1, title: "Principios de diseño centrado en el usuario", views: 768 },
      { id: 2, title: "Sistemas de diseño efectivos", views: 682 },
      { id: 3, title: "Pruebas de usabilidad con presupuesto limitado", views: 594 }
    ]
  },
  {
    id: 4,
    title: "DevOps",
    icon: "⚙️",
    description: "CI/CD, automatización, cloud computing y todo lo relacionado con operaciones de desarrollo.",
    topics: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "GitOps", "Monitoreo"],
    articles: [
      { id: 1, title: "Introducción a contenedores con Docker", views: 863 },
      { id: 2, title: "Deployments automatizados con GitHub Actions", views: 731 },
      { id: 3, title: "Infraestructura como código con Terraform", views: 680 }
    ]
  },
  {
    id: 5,
    title: "Desarrollo Móvil",
    icon: "📱",
    description: "Desarrollo de aplicaciones nativas e híbridas para dispositivos móviles.",
    topics: ["React Native", "Flutter", "Swift", "Kotlin", "PWA", "Firebase", "App Store"],
    articles: [
      { id: 1, title: "Comparativa: React Native vs Flutter", views: 942 },
      { id: 2, title: "Optimización de aplicaciones móviles", views: 701 },
      { id: 3, title: "Implementación de notificaciones push", views: 628 }
    ]
  },
  {
    id: 6,
    title: "Blockchain",
    icon: "🔗",
    description: "Tecnologías de cadena de bloques, contratos inteligentes y aplicaciones descentralizadas.",
    topics: ["Ethereum", "Smart Contracts", "Web3", "DApps", "NFT", "Solidity", "Criptomonedas"],
    articles: [
      { id: 1, title: "Introducción a Smart Contracts", views: 845 },
      { id: 2, title: "Desarrollo de DApps con Ethereum", views: 698 },
      { id: 3, title: "Seguridad en aplicaciones blockchain", views: 572 }
    ]
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-bucaratec-600 text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Categorías</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Explora nuestras áreas de especialización y encuentra contenido relevante para tu perfil profesional.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8">
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="design">Diseño</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="mobile">Móvil</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.filter(cat => cat.title === "Desarrollo Web").map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ai">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.filter(cat => cat.title === "Inteligencia Artificial").map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.filter(cat => cat.title === "Diseño UX/UI").map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="devops">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.filter(cat => cat.title === "DevOps").map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mobile">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.filter(cat => cat.title === "Desarrollo Móvil").map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="blockchain">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.filter(cat => cat.title === "Blockchain").map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Componente para la tarjeta de categoría
const CategoryCard = ({ category }: { category: typeof categories[0] }) => (
  <Card className="card-hover">
    <CardHeader className="pb-2">
      <div className="text-4xl mb-4">{category.icon}</div>
      <CardTitle className="text-xl">{category.title}</CardTitle>
      <CardDescription>{category.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="mb-4">
        <h4 className="font-medium text-sm mb-2">Temas populares:</h4>
        <div className="flex flex-wrap gap-2">
          {category.topics.slice(0, 4).map((topic, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-1 bg-bucaratec-100 text-bucaratec-700 rounded-full"
            >
              {topic}
            </span>
          ))}
          {category.topics.length > 4 && (
            <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full">
              +{category.topics.length - 4} más
            </span>
          )}
        </div>
      </div>
      
      <div>
        <h4 className="font-medium text-sm mb-2">Artículos destacados:</h4>
        <ul className="space-y-2">
          {category.articles.map((article) => (
            <li key={article.id} className="text-sm">
              <a href="#" className="text-bucaratec-600 hover:underline">{article.title}</a>
              <span className="text-xs text-gray-500 ml-2">({article.views} vistas)</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full text-bucaratec-600 border-bucaratec-200 hover:bg-bucaratec-50 hover:text-bucaratec-700">
        Explorar categoría
      </Button>
    </CardFooter>
  </Card>
);

export default Categories;
