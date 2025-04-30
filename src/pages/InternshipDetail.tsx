
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Briefcase, User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InternshipDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const internships = {
    electrosphere: {
      title: "Développement d'une application web",
      company: "Electro Sphère",
      location: "Revin",
      period: "Juin 2024",
      duration: "5 semaines",
      description: "Durant ce stage chez Electro Sphère, entreprise spécialisée dans l'électroménager, j'ai développé une application web pour la gestion du reconditionnement des appareils électroménagers. Ce projet m'a permis d'appliquer mes connaissances en développement web dans un contexte professionnel et de développer des compétences en gestion de projet.",
      longDescription: "L'application développée permet de suivre le processus complet de reconditionnement des appareils électroménagers, depuis leur réception jusqu'à leur revente. Elle inclut un système d'inventaire, une gestion des réparations et un suivi des ventes. Le projet a été réalisé en collaboration avec l'équipe technique de l'entreprise, ce qui m'a permis de développer mes compétences en travail d'équipe et en communication professionnelle.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      tasks: [
        "Analyse des besoins avec les responsables de l'entreprise",
        "Conception de la base de données pour le suivi des appareils",
        "Développement du backend en PHP avec une architecture MVC",
        "Création des interfaces utilisateur pour les différentes fonctionnalités",
        "Implémentation du système de gestion de stock",
        "Tests d'intégration et correction des bugs",
        "Documentation du projet et formation des utilisateurs"
      ],
      skills: [
        "Développement web (PHP, MySQL, JavaScript)",
        "Analyse de besoins clients",
        "Conception de base de données",
        "Travail en équipe",
        "Communication professionnelle",
        "Tests et débogage",
        "Documentation technique"
      ],
      teamwork: true,
      teamSize: 3,
      images: [
        "/lovable-uploads/eea7a23b-0799-460a-9ebc-f8ebaf814b1b.png",
        "/lovable-uploads/466dd738-928a-4df6-82be-9152e5ecdb96.png",
        "/lovable-uploads/91ea0985-02b4-488d-b750-26a72595bc59.png"
      ]
    },
    fumay: {
      title: "Développement d'un site web",
      company: "Centre social Fumay Charnois Animation",
      location: "Fumay",
      period: "Janvier 2025",
      duration: "7 semaines",
      description: "Pendant ce stage au centre social Fumay Charnois Animation, j'ai conçu et développé un site web de présentation pour l'établissement. Ce site permet de présenter les activités, les services et les événements du centre social à la communauté.",
      longDescription: "Le site web développé pour le Centre social Fumay Charnois Animation met en avant les différentes activités et services proposés par le centre. Il comprend plusieurs sections : présentation du centre, agenda des événements, galerie photos, informations pratiques et formulaire de contact. Le design est responsive pour s'adapter à tous les appareils et respecte la charte graphique du centre social. J'ai travaillé de manière autonome sur ce projet, en collaboration étroite avec la direction du centre pour valider les différentes étapes.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap"],
      tasks: [
        "Analyse des besoins et spécifications du site",
        "Conception de l'architecture et du design du site",
        "Développement des pages principales avec HTML/CSS et JavaScript",
        "Intégration de contenu multimédia (images, vidéos)",
        "Mise en place d'un système de gestion des événements",
        "Tests sur différents appareils pour garantir la compatibilité",
        "Formation du personnel à la mise à jour du contenu"
      ],
      skills: [
        "Conception de sites web",
        "Développement front-end (HTML, CSS, JavaScript)",
        "Utilisation de frameworks CSS (Bootstrap)",
        "Design responsive",
        "Gestion de projet",
        "Autonomie",
        "Communication avec les parties prenantes"
      ],
      teamwork: false,
      teamSize: 1,
      images: [
        "/lovable-uploads/cf51b039-bee7-4abe-80b1-09893f2e29f9.png",
        "/lovable-uploads/333b508c-92ac-4195-9d6c-a371d41cf1db.png",
        "/lovable-uploads/c7c160e6-ab53-4d10-b06d-89abffc61f0a.png"
      ]
    }
  };
  
  const internship = id === 'electrosphere' ? internships.electrosphere : 
                     id === 'fumay' ? internships.fumay : null;
  
  if (!internship) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Stage non trouvé</h2>
        <p className="mb-6">Le stage que vous recherchez n'existe pas.</p>
        <Link to="/internships">
          <Button variant="default" className="bg-violet-600 hover:bg-violet-700">
            <ChevronLeft className="mr-2 h-4 w-4" /> Retour aux stages
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-800 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Link to="/internships" className="inline-flex items-center text-white/80 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" /> 
              Retour aux stages
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{internship.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-white/80">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{internship.company}, {internship.location}</span>
            </div>
            <div className="flex items-center text-white/80">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{internship.period} ({internship.duration})</span>
            </div>
            <div className="flex items-center text-white/80">
              {internship.teamwork ? (
                <>
                  <Users className="w-4 h-4 mr-2" />
                  <span>Projet d'équipe ({internship.teamSize} personnes)</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4 mr-2" />
                  <span>Projet individuel</span>
                </>
              )}
            </div>
          </div>
          
          <p className="text-xl text-white/90">
            {internship.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="details">
            <TabsList className="w-full mb-8 bg-violet-100">
              <TabsTrigger value="details" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                Détails du stage
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                Compétences
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                Galerie
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-violet-700 mb-4">Description du projet</h2>
                <p className="text-gray-700 mb-6">
                  {internship.longDescription}
                </p>
                
                <h3 className="text-xl font-semibold text-violet-700 mb-4">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {internship.technologies.map((tech) => (
                    <Badge key={tech} className="bg-violet-100 text-violet-800 hover:bg-violet-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-violet-700 mb-4">Tâches réalisées</h3>
                <ul className="space-y-2 mb-6 list-disc pl-5 text-gray-700">
                  {internship.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-violet-700 mb-4">Compétences acquises</h2>
                <p className="text-gray-700 mb-6">
                  Ce stage m'a permis de développer et renforcer les compétences suivantes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {internship.skills.map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-violet-100 p-2 rounded-full">
                        <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-violet-700 mb-4">Galerie du projet</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {internship.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                      <img 
                        src={image} 
                        alt={`Image ${index + 1} du stage ${internship.company}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center">
            <Link to="/internships">
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" /> 
                Tous les stages
              </Button>
            </Link>
            
            <Link to="/projects">
              <Button className="bg-violet-600 hover:bg-violet-700">
                Voir mes projets
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipDetail;
