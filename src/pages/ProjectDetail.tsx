
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, User, Users, Code, Database } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const projects = {
    "score-resto": {
      title: "Score-Resto",
      description: "Développement d'un site web pour un restaurant en utilisant PHP avec une architecture MVC.",
      longDescription: "Score-Resto est une application web développée en PHP qui permet à un restaurant de gérer ses menus, ses réservations et les avis des clients. L'application a été conçue selon le modèle MVC (Modèle-Vue-Contrôleur) pour assurer une bonne organisation du code et une maintenance facile. Elle comprend une interface d'administration pour le restaurant et une interface utilisateur pour les clients.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
      tags: ["PHP", "MVC", "MySQL", "HTML/CSS"],
      type: "dev",
      teamwork: false,
      features: [
        "Gestion des menus et des plats",
        "Système de réservation de tables",
        "Collecte et affichage des avis clients",
        "Interface d'administration sécurisée",
        "Système de recherche par type de plat ou prix"
      ],
      technologies: [
        { name: "PHP", description: "Langage de programmation côté serveur utilisé pour la logique métier." },
        { name: "MySQL", description: "Système de gestion de base de données relationnelle pour stocker les informations." },
        { name: "HTML/CSS", description: "Langages de balisage et de style pour la structure et l'apparence du site." },
        { name: "JavaScript", description: "Pour les interactions côté client et la validation des formulaires." },
        { name: "Architecture MVC", description: "Organisation du code en Modèle-Vue-Contrôleur pour une meilleure maintenabilité." }
      ],
      skills: [
        "Conception d'architecture MVC",
        "Développement backend en PHP",
        "Modélisation et gestion de bases de données SQL",
        "Création d'interfaces utilisateur intuitives",
        "Sécurisation des données utilisateur",
        "Documentation du code"
      ],
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop"
      ]
    },
    "roulette": {
      title: "Roulette",
      description: "Application web permettant de tirer au sort des élèves dans une classe et de les noter.",
      longDescription: "Roulette est une application web conçue pour les enseignants qui souhaitent interroger leurs élèves de manière aléatoire et équitable. L'application permet de créer des classes, d'y ajouter des élèves, puis de tirer au sort un élève pour l'interroger. Une fois l'élève interrogé, l'enseignant peut lui attribuer une note qui est enregistrée dans la base de données. L'application offre également des statistiques sur les performances des élèves et la fréquence à laquelle ils ont été interrogés.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop",
      tags: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
      type: "dev",
      teamwork: false,
      features: [
        "Création et gestion de classes et d'élèves",
        "Tirage au sort aléatoire d'élèves",
        "Attribution et enregistrement des notes",
        "Statistiques sur les performances et la participation des élèves",
        "Interface simple et intuitive pour une utilisation rapide en classe"
      ],
      technologies: [
        { name: "PHP", description: "Utilisé pour la logique métier côté serveur." },
        { name: "JavaScript", description: "Pour l'animation de la roulette et les interactions dynamiques." },
        { name: "MySQL", description: "Pour stocker les informations sur les classes, les élèves et leurs notes." },
        { name: "HTML/CSS", description: "Pour la structure et le style de l'application." },
        { name: "AJAX", description: "Pour les mises à jour en temps réel sans rechargement de page." }
      ],
      skills: [
        "Programmation orientée objet en PHP",
        "Manipulation du DOM avec JavaScript",
        "Conception d'interfaces utilisateur interactives",
        "Gestion des sessions et de l'authentification",
        "Optimisation des requêtes de base de données",
        "Implémentation d'animations fluides"
      ],
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop"
      ]
    },
    "success": {
      title: "Success",
      description: "Application web Vue.js pour créer ou passer des QCM selon le rôle de l'utilisateur.",
      longDescription: "Success est une application web développée avec Vue.js qui permet de créer et de passer des QCM (Questionnaires à Choix Multiples) en ligne. Les utilisateurs avec un rôle d'administrateur peuvent créer des questionnaires, ajouter des questions à choix multiples et définir les réponses correctes. Les utilisateurs standard peuvent passer ces QCM, voir leurs résultats immédiatement et consulter leur historique de performances. Ce projet a été développé en équipe, ce qui a permis d'explorer les pratiques de développement collaboratif.",
      image: "/lovable-uploads/759cf663-20c7-4797-9fb8-98ba5829fe2d.png",
      tags: ["Vue.js", "JavaScript", "API", "HTML/CSS"],
      type: "dev",
      teamwork: true,
      teamSize: 3,
      features: [
        "Création et édition de QCM",
        "Passage de tests avec chronomètre",
        "Résultats immédiats et détaillés",
        "Tableau de bord avec statistiques",
        "Gestion des utilisateurs et des rôles",
        "Interface responsive adaptée aux mobiles"
      ],
      technologies: [
        { name: "Vue.js", description: "Framework JavaScript progressif pour la construction d'interfaces utilisateur." },
        { name: "Axios", description: "Client HTTP pour les requêtes à l'API." },
        { name: "Vuex", description: "Gestionnaire d'état centralisé pour Vue.js." },
        { name: "Vue Router", description: "Routeur officiel pour les applications Vue.js." },
        { name: "API REST", description: "Interface de programmation pour la communication avec le backend." },
        { name: "CSS Grid/Flexbox", description: "Pour une mise en page responsive et moderne." }
      ],
      skills: [
        "Développement d'applications avec Vue.js",
        "Gestion d'état avec Vuex",
        "Routage côté client avec Vue Router",
        "Communication avec des API REST",
        "Travail en équipe avec Git",
        "Conception d'interfaces utilisateur modernes",
        "Tests unitaires avec Jest"
      ],
      images: [
        "/lovable-uploads/759cf663-20c7-4797-9fb8-98ba5829fe2d.png",
        "/lovable-uploads/1f926fe5-8d14-40d3-8a28-8a7a87fa4dea.png", 
        "/lovable-uploads/e3a5dc30-a428-452c-bdb9-b428a71d324b.png"
      ]
    },
    "cantineo": {
      title: "Cantineo",
      description: "Application mobile React Native pour gérer les transactions d'une cantine.",
      longDescription: "Cantineo est une application mobile développée avec React Native qui permet de gérer les transactions d'une cantine scolaire ou d'entreprise. Elle offre aux utilisateurs la possibilité de consulter les menus, de précommander leurs repas, de payer via l'application et de suivre leur solde. Pour le personnel de la cantine, elle fournit un système de gestion des stocks, des commandes et des paiements. Cette application vise à simplifier le fonctionnement quotidien des cantines et à réduire les files d'attente.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop",
      tags: ["React Native", "JavaScript", "API", "Mobile"],
      type: "dev",
      teamwork: false,
      features: [
        "Consultation des menus quotidiens",
        "Précommande et paiement de repas",
        "Suivi du solde du compte",
        "Historique des transactions",
        "Notifications pour rappels de précommande",
        "Mode hors connexion pour les fonctionnalités de base"
      ],
      technologies: [
        { name: "React Native", description: "Framework pour le développement d'applications mobiles multiplateformes." },
        { name: "Redux", description: "Bibliothèque de gestion d'état pour JavaScript." },
        { name: "API RESTful", description: "Pour la communication avec le serveur backend." },
        { name: "AsyncStorage", description: "Pour le stockage local des données." },
        { name: "React Navigation", description: "Pour la navigation entre les écrans de l'application." },
        { name: "Expo", description: "Plateforme pour le développement et le déploiement d'applications React Native." }
      ],
      skills: [
        "Développement d'applications mobiles avec React Native",
        "Gestion d'état avec Redux",
        "Conception d'interfaces utilisateur mobiles",
        "Intégration d'API RESTful",
        "Gestion du stockage local et de la synchronisation des données",
        "Tests sur différents appareils mobiles"
      ],
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop"
      ]
    },
    "docker": {
      title: "Docker",
      description: "Utilisation de Docker pour créer, déployer et exécuter des applications dans des conteneurs.",
      longDescription: "Ce projet démontre l'utilisation de Docker pour la création, le déploiement et l'exécution d'applications dans des conteneurs. Docker permet de standardiser les environnements de développement, de test et de production, garantissant ainsi que les applications fonctionnent de manière cohérente quel que soit l'environnement. Dans ce projet, j'ai mis en place plusieurs conteneurs pour différents services (web, base de données, cache) et orchestré leur communication pour créer une infrastructure complète.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop",
      tags: ["Docker", "DevOps", "Containerisation", "Linux"],
      type: "cyber",
      teamwork: false,
      features: [
        "Création de conteneurs pour différents services",
        "Configuration de réseaux Docker",
        "Utilisation de volumes pour la persistance des données",
        "Écriture de fichiers docker-compose.yml",
        "Déploiement d'applications multi-conteneurs",
        "Optimisation des images Docker"
      ],
      technologies: [
        { name: "Docker", description: "Plateforme de conteneurisation pour le développement et le déploiement d'applications." },
        { name: "docker-compose", description: "Outil pour la définition et l'exécution d'applications Docker multi-conteneurs." },
        { name: "Linux", description: "Système d'exploitation pour les conteneurs Docker." },
        { name: "Shell scripting", description: "Pour l'automatisation des tâches de déploiement." },
        { name: "YAML", description: "Format de fichier pour la configuration Docker Compose." }
      ],
      skills: [
        "Configuration et utilisation de conteneurs Docker",
        "Orchestration de services avec Docker Compose",
        "Administration système Linux",
        "Sécurisation de conteneurs Docker",
        "Optimisation de la taille et des performances des images",
        "Débogage de problèmes de conteneurisation"
      ],
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop"
      ]
    },
    "ubuntu-server": {
      title: "Ubuntu Server",
      description: "Configuration d'une machine virtuelle sous VirtualBox avec Ubuntu Server pour utiliser le terminal de commande Linux.",
      longDescription: "Ce projet consistait à configurer une machine virtuelle sur VirtualBox avec Ubuntu Server pour approfondir ma connaissance du terminal de commande Linux et des services réseau. J'ai installé et configuré divers services comme SSH, Apache, MySQL et PHP pour créer un environnement LAMP complet. J'ai également mis en place des outils de surveillance et de sécurité pour protéger le serveur. Ce projet m'a permis de développer mes compétences en administration système Linux, essentielles pour la cybersécurité.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop",
      tags: ["Ubuntu", "Linux", "VirtualBox", "Terminal"],
      type: "cyber",
      teamwork: false,
      features: [
        "Installation d'Ubuntu Server sur VirtualBox",
        "Configuration du réseau et des services",
        "Installation et configuration de serveurs web et de bases de données",
        "Mise en place de pare-feu et de mesures de sécurité",
        "Automatisation avec des scripts shell",
        "Surveillance et journalisation des activités"
      ],
      technologies: [
        { name: "VirtualBox", description: "Logiciel de virtualisation pour exécuter plusieurs systèmes d'exploitation." },
        { name: "Ubuntu Server", description: "Distribution Linux optimisée pour les serveurs." },
        { name: "Bash", description: "Shell Unix pour l'exécution de commandes et de scripts." },
        { name: "SSH", description: "Protocole pour l'accès sécurisé à distance." },
        { name: "Apache", description: "Serveur web HTTP open-source." },
        { name: "MySQL", description: "Système de gestion de base de données relationnel." },
        { name: "UFW", description: "Pare-feu simplifié pour Ubuntu." }
      ],
      skills: [
        "Administration système Linux",
        "Configuration et gestion de machines virtuelles",
        "Utilisation avancée du terminal Linux",
        "Installation et configuration de services réseau",
        "Mise en place de mesures de sécurité",
        "Résolution de problèmes système et réseau",
        "Automatisation avec des scripts shell"
      ],
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop"
      ]
    }
  };
  
  const project = projects[id as keyof typeof projects];
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Projet non trouvé</h2>
        <p className="mb-6">Le projet que vous recherchez n'existe pas.</p>
        <Link to="/projects">
          <Button variant="default" className="bg-violet-600 hover:bg-violet-700">
            <ChevronLeft className="mr-2 h-4 w-4" /> Retour aux projets
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-800 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" /> 
              Retour aux projets
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <Badge className={project.type === 'dev' ? 'bg-violet-400 text-white' : 'bg-blue-400 text-white'}>
              {project.type === 'dev' ? 'Développement' : 'Cybersécurité'}
            </Badge>
            <Badge className="bg-white/20">
              {project.teamwork ? (
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3 mr-1" />
                  Projet d'équipe
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3 mr-1" />
                  Projet individuel
                </div>
              )}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-white/10 hover:bg-white/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="w-full mb-8 bg-violet-100">
                  <TabsTrigger value="overview" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                    Aperçu
                  </TabsTrigger>
                  <TabsTrigger value="tech" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                    Technologies
                  </TabsTrigger>
                  <TabsTrigger value="gallery" className="flex-1 data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                    Galerie
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="animate-fade-in">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-violet-700 mb-4">Description du projet</h2>
                    <p className="text-gray-700 mb-8">
                      {project.longDescription}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-violet-700 mb-4">Fonctionnalités principales</h3>
                    <ul className="space-y-2 mb-6 list-disc pl-5 text-gray-700">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-violet-700 mb-4">Compétences développées</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-violet-200 text-violet-700 bg-violet-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tech" className="animate-fade-in">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-violet-700 mb-6">Technologies utilisées</h2>
                    
                    <div className="space-y-6">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <h3 className="text-lg font-medium text-violet-700 mb-1">{tech.name}</h3>
                          <p className="text-gray-700">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="gallery" className="animate-fade-in">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-violet-700 mb-6">Galerie du projet</h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {project.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                          <img 
                            src={image} 
                            alt={`Capture d'écran ${index + 1} du projet ${project.title}`} 
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h2 className="text-xl font-semibold text-violet-700 mb-4">Informations</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Type de projet</h3>
                    <div className="flex items-center mt-1">
                      {project.type === 'dev' ? (
                        <>
                          <Code className="h-5 w-5 text-violet-600 mr-2" />
                          <span className="font-medium">Développement</span>
                        </>
                      ) : (
                        <>
                          <Database className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium">Cybersécurité</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Réalisation</h3>
                    <div className="flex items-center mt-1">
                      {project.teamwork ? (
                        <>
                          <Users className="h-5 w-5 text-violet-600 mr-2" />
                          <span className="font-medium">
                            Projet d'équipe ({project.teamSize || 'N/A'} personnes)
                          </span>
                        </>
                      ) : (
                        <>
                          <User className="h-5 w-5 text-violet-600 mr-2" />
                          <span className="font-medium">Projet individuel</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Technologies principales</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="bg-violet-100 text-violet-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/projects">
                    <Button variant="outline" className="w-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
                      <ChevronLeft className="mr-2 h-4 w-4" /> 
                      Tous les projets
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
