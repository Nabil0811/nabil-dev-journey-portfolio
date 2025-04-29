import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InternshipCard from '@/components/InternshipCard';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const featuredInternships = [
    {
      id: "electrosphere",
      title: "Développement d'une application web",
      company: "Electro Sphère",
      period: "Juin 2024",
      description: "Développement d'une application web pour la gestion du reconditionnement d'électroménagers.",
      image: "/lovable-uploads/eea7a23b-0799-460a-9ebc-f8ebaf814b1b.png"
    },
    {
      id: "fumay",
      title: "Développement d'un site web",
      company: "Centre social Fumay Charnois Animation",
      period: "Janvier 2025",
      description: "Conception et développement d'un site web de présentation pour le centre social.",
      image: "/lovable-uploads/cf51b039-bee7-4abe-80b1-09893f2e29f9.png"
    }
  ];

  const featuredProjects = [
    {
      id: "score-resto",
      title: "Score-Resto",
      description: "Site web d'un restaurant en MVC développé en PHP.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
      tags: ["PHP", "MVC", "MySQL", "HTML/CSS"],
      type: "dev" as const
    },
    {
      id: "success",
      title: "Success",
      description: "Application web avec Vue.js pour créer ou passer des QCM selon le rôle de l'utilisateur.",
      image: "/lovable-uploads/759cf663-20c7-4797-9fb8-98ba5829fe2d.png",
      tags: ["Vue.js", "JavaScript", "API", "Frontend"],
      type: "dev" as const
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-800 to-violet-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nabil Bennadi
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-violet-100">
              Développeur web en BTS SIO 2ème année
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-white text-violet-800 hover:bg-violet-100">
                  Voir mes projets
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Me contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title">À propos de moi</h2>
              <p className="text-gray-700 mb-6">
                Je suis étudiant en BTS SIO (Services Informatiques aux Organisations) option SLAM 
                au lycée Gaspard Monges à Charleville Mezières. Passionné par le développement informatique, 
                je souhaite concevoir des applications performantes et ergonomiques en alliant technique et créativité.
              </p>
              <p className="text-gray-700 mb-6">
                J'ai une formation technique solide et une expérience pratique acquise lors de mes stages 
                en entreprise. Je maîtrise plusieurs langages de programmation et technologies web, 
                et je continue à développer mes compétences à travers divers projets personnels et académiques.
              </p>
              <Link to="/about">
                <Button className="bg-violet-600 hover:bg-violet-700">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-gradient-purple p-1 rounded-lg shadow-lg">
                <div className="bg-white p-3 rounded-md">
                  <img 
                    src="/lovable-uploads/3375445a-4978-4d46-b281-fd34fd1aa07d.png" 
                    alt="CV Nabil Bennadi" 
                    className="rounded max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Mes stages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Découvrez les stages professionnels que j'ai effectués au cours de ma formation, 
              qui m'ont permis d'acquérir une expérience concrète en développement web.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredInternships.map((internship) => (
              <InternshipCard 
                key={internship.id}
                id={internship.id}
                title={internship.title}
                company={internship.company}
                period={internship.period}
                description={internship.description}
                image={internship.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/internships">
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
                Voir tous mes stages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Mes projets</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Explorez les projets que j'ai développés pendant ma formation, 
              qui démontrent mes compétences techniques et ma capacité à résoudre des problèmes.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="bg-violet-100 p-3 rounded-full mr-4">
                <Code className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Développement</h3>
                <p className="text-gray-600">Applications web & mobile</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Cybersécurité</h3>
                <p className="text-gray-600">Docker & Linux</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                type={project.type}
              />
            ))}
            <div className="bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl shadow-md flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-violet-700">
                Plus de projets
              </h3>
              <p className="text-gray-700 mb-6">
                Découvrez tous mes projets de développement et de cybersécurité
              </p>
              <Link to="/projects">
                <Button variant="default" className="bg-violet-600 hover:bg-violet-700">
                  Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-violet-800 to-violet-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Intéressé par mon profil?</h2>
          <p className="text-xl mb-8 text-violet-100">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-violet-800 hover:bg-violet-100">
                Me contacter
              </Button>
            </Link>
            <a href="/cv-nabil-bennadi.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Télécharger mon CV
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
