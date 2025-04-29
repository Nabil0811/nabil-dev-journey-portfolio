
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const projectsData = [
    {
      id: "score-resto",
      title: "Score-Resto",
      description: "Développement d'un site web pour un restaurant en PHP avec une architecture MVC. L'application permet de gérer les menus, les réservations et les avis des clients.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
      tags: ["PHP", "MVC", "MySQL", "HTML/CSS"],
      type: "dev" as const,
      teamwork: false
    },
    {
      id: "roulette",
      title: "Roulette",
      description: "Application web permettant de tirer au sort des élèves dans une classe et de les noter. Utile pour les enseignants souhaitant interroger les élèves de façon aléatoire.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop",
      tags: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
      type: "dev" as const,
      teamwork: false
    },
    {
      id: "success",
      title: "Success",
      description: "Application web développée avec Vue.js permettant de créer ou de passer des QCM selon le rôle de l'utilisateur. Elle inclut une gestion des utilisateurs et des statistiques sur les résultats.",
      image: "/lovable-uploads/759cf663-20c7-4797-9fb8-98ba5829fe2d.png",
      tags: ["Vue.js", "JavaScript", "API", "HTML/CSS"],
      type: "dev" as const,
      teamwork: true
    },
    {
      id: "cantineo",
      title: "Cantineo",
      description: "Application mobile développée en React Native permettant de gérer les transactions d'une cantine. Elle facilite le paiement des repas et la gestion des soldes des utilisateurs.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop",
      tags: ["React Native", "JavaScript", "API", "Mobile"],
      type: "dev" as const,
      teamwork: false
    },
    {
      id: "docker",
      title: "Docker",
      description: "Utilisation de Docker pour créer, déployer et exécuter des applications dans des conteneurs. Ce projet démontre la mise en place d'environnements de développement isolés et reproductibles.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop",
      tags: ["Docker", "DevOps", "Containerisation", "Linux"],
      type: "cyber" as const,
      teamwork: false
    },
    {
      id: "ubuntu-server",
      title: "Ubuntu Server",
      description: "Configuration d'une machine virtuelle sous VirtualBox avec Ubuntu Server pour utiliser le terminal de commande Linux. Ce projet comprend l'installation et la configuration de services réseau.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop",
      tags: ["Ubuntu", "Linux", "VirtualBox", "Terminal"],
      type: "cyber" as const,
      teamwork: false
    }
  ];
  
  const filteredProjects = projectsData.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });
  
  const devProjects = filteredProjects.filter((project) => project.type === 'dev');
  const cyberProjects = filteredProjects.filter((project) => project.type === 'cyber');

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-800 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">Mes projets</h1>
          <p className="text-xl text-violet-100">
            Découvrez les projets sur lesquels j'ai travaillé pendant ma formation.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Rechercher par titre, description ou technologie..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full mb-8 bg-violet-100">
              <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                Tous les projets
              </TabsTrigger>
              <TabsTrigger value="dev" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                Développement
              </TabsTrigger>
              <TabsTrigger value="cyber" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                Cybersécurité
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
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
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun projet trouvé</h3>
                  <p className="text-gray-500">Aucun projet ne correspond à votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="dev" className="animate-fade-in">
              {devProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {devProjects.map((project) => (
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
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun projet de développement trouvé</h3>
                  <p className="text-gray-500">Aucun projet de développement ne correspond à votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="cyber" className="animate-fade-in">
              {cyberProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cyberProjects.map((project) => (
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
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun projet de cybersécurité trouvé</h3>
                  <p className="text-gray-500">Aucun projet de cybersécurité ne correspond à votre recherche.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Technologies utilisées</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'React Native', 'Vue.js', 'MVC', 'API', 'Linux', 'Docker', 'Ubuntu', 'VirtualBox'].map((tech) => (
              <div 
                key={tech} 
                className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <span className="text-violet-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
