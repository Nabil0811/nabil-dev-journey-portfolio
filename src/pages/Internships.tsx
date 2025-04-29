
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      id: "electrosphere",
      title: "Développement d'une application web",
      company: "Electro Sphère",
      location: "Revin",
      period: "Juin 2024",
      duration: "5 semaines",
      description: "Stage chez Electro Sphère, entreprise spécialisée dans l'électroménager. Développement d'une application web pour la gestion du reconditionnement des appareils électroménagers. Cette application permet de suivre le processus de reconditionnement depuis la récupération jusqu'à la revente.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      tasks: [
        "Développement du système de gestion de stock",
        "Implémentation des interfaces utilisateurs",
        "Création de la base de données",
        "Tests et débogage de l'application"
      ],
      teamwork: true,
      images: [
        "/lovable-uploads/eea7a23b-0799-460a-9ebc-f8ebaf814b1b.png",
        "/lovable-uploads/d40e3118-a918-4ad9-b013-728140046b63.png",
        "/lovable-uploads/42b52c9a-5626-467e-b8a1-821067808f80.png"
      ]
    },
    {
      id: "fumay",
      title: "Développement d'un site web",
      company: "Centre social Fumay Charnois Animation",
      location: "Fumay",
      period: "Janvier 2025",
      duration: "7 semaines",
      description: "Stage au centre social de Fumay Charnois Animation, qui consistait à développer un site web de présentation pour le centre. Le site présente les activités, les services et les événements du centre social.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap"],
      tasks: [
        "Conception de la structure du site web",
        "Développement des pages principales",
        "Intégration de contenu multimédia",
        "Mise en place d'un système de gestion des événements"
      ],
      teamwork: false,
      images: [
        "/lovable-uploads/cf51b039-bee7-4abe-80b1-09893f2e29f9.png",
        "/lovable-uploads/91ea0985-02b4-488d-b750-26a72595bc59.png", 
        "/lovable-uploads/466dd738-928a-4df6-82be-9152e5ecdb96.png"
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-800 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Mes stages</h1>
          <p className="text-xl text-violet-100">
            Découvrez les expériences professionnelles que j'ai acquises lors de mes stages.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-violet-200"></div>

            {internships.map((internship, index) => (
              <div 
                key={internship.id} 
                className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 w-8 h-8 bg-violet-600 rounded-full shadow-md flex items-center justify-center transform translate-x-0 md:-translate-x-1/2">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-violet-700 mb-3">
                    {internship.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span>{internship.company}, {internship.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{internship.period} ({internship.duration})</span>
                    </div>
                  </div>
                  
                  <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
                    <img 
                      src={internship.images[0]} 
                      alt={internship.company} 
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {internship.description}
                  </p>
                  
                  <Link to={`/internships/${internship.id}`}>
                    <Button className="bg-violet-600 hover:bg-violet-700">
                      Voir les détails <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Acquired */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Compétences acquises en stage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-violet-700 mb-4">
                Stage chez Electro Sphère
              </h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>Développement d'applications web en PHP</li>
                <li>Conception et gestion de bases de données MySQL</li>
                <li>Travail en équipe sur un projet réel</li>
                <li>Intégration de fonctionnalités de gestion de stock</li>
                <li>Tests et débogage d'applications</li>
                <li>Communication avec les utilisateurs finaux</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-violet-700 mb-4">
                Stage au Centre social Fumay Charnois Animation
              </h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>Conception et développement de sites web dynamiques</li>
                <li>Utilisation de PHP et HTML/CSS pour la création de pages</li>
                <li>Intégration de composants Bootstrap pour un design responsive</li>
                <li>Gestion de projet indépendante</li>
                <li>Communication avec les responsables pour comprendre les besoins</li>
                <li>Déploiement et maintenance d'un site web</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-violet-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Vous souhaitez en savoir plus?</h2>
          <p className="mb-6">Découvrez mes projets de développement ou téléchargez mon CV</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="bg-white text-violet-800 hover:bg-violet-100">
                Voir mes projets
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

export default Internships;
