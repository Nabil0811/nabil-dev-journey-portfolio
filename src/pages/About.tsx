
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, Book, Award, Briefcase, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillCard from '@/components/SkillCard';

const About = () => {
  const programmingSkills = [
    { name: "PHP", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "MySQL", level: 75 },
    { name: "Vue.js", level: 70 },
    { name: "React/React Native", level: 65 },
  ];
  
  const cyberSecuritySkills = [
    { name: "Administration Linux", level: 70 },
    { name: "Docker", level: 75 },
    { name: "Virtualisation", level: 80 },
    { name: "Sécurité réseau", level: 60 },
    { name: "Pare-feu", level: 65 }
  ];
  
  const softSkills = [
    { name: "Travail en équipe", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Gestion de projet", level: 75 },
    { name: "Résolution de problèmes", level: 90 },
    { name: "Autonomie", level: 85 }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-800 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
          <p className="text-xl text-violet-100">
            Découvrez mon parcours, mes compétences et ma passion pour le développement web et la cybersécurité.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-violet-700">Nabil Bennadi</h2>
              <p className="text-gray-700 mb-6">
                Étudiant en BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) au lycée Gaspard Monge à Charleville-Mézières, je me spécialise dans le développement d'applications web et mobiles, ainsi que dans la cybersécurité.
              </p>
              <p className="text-gray-700 mb-6">
                Mon parcours m'a permis d'acquérir de solides compétences techniques et une bonne compréhension des enjeux du développement logiciel et de la sécurité informatique. Je suis passionné par l'innovation technologique et je cherche constamment à améliorer mes compétences pour relever de nouveaux défis.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/cv-nabil-bennadi.pdf" download className="inline-flex items-center">
                  <Button className="bg-violet-600 hover:bg-violet-700">
                    <Download className="mr-2 h-4 w-4" /> Télécharger mon CV
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
                    Me contacter <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-violet-700">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-violet-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Formation</h4>
                    <p className="text-gray-600">BTS SIO option SLAM</p>
                    <p className="text-gray-600">Lycée Gaspard Monge, Charleville-Mézières</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Book className="h-5 w-5 text-violet-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Spécialisation</h4>
                    <p className="text-gray-600">Développement web et mobile</p>
                    <p className="text-gray-600">Cybersécurité</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-violet-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Expériences professionnelles</h4>
                    <p className="text-gray-600">Electro Sphère - Développement d'application web</p>
                    <p className="text-gray-600">Centre social Fumay Charnois Animation - Développement de site web</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-violet-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Intérêts</h4>
                    <p className="text-gray-600">Nouvelles technologies, informatique, programmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-violet-700">Mes compétences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              title="Développement" 
              skills={programmingSkills}
              icon={<Code className="h-6 w-6" />}
            />
            <SkillCard 
              title="Cybersécurité" 
              skills={cyberSecuritySkills}
              icon={<Database className="h-6 w-6" />}
            />
            <SkillCard 
              title="Soft Skills" 
              skills={softSkills}
              icon={<Users className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-violet-700">Mon parcours</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet-200"></div>
            
            <div className="relative z-10">
              <div className="timeline-item mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md ml-auto mr-auto md:ml-[55%] md:w-[45%] relative">
                  <div className="absolute top-6 -left-4 md:-left-4 w-8 h-8 bg-violet-600 rounded-full border-4 border-white"></div>
                  <h3 className="text-xl font-semibold mb-2 text-violet-700">2023 - Présent</h3>
                  <p className="text-gray-700">BTS SIO option SLAM au lycée Gaspard Monge</p>
                </div>
              </div>
              
              <div className="timeline-item mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md mr-auto md:mr-[55%] md:w-[45%] relative">
                  <div className="absolute top-6 -right-4 md:left-[calc(100%+8px)] w-8 h-8 bg-violet-600 rounded-full border-4 border-white"></div>
                  <h3 className="text-xl font-semibold mb-2 text-violet-700">Janvier 2025</h3>
                  <p className="text-gray-700">Stage au Centre social Fumay Charnois Animation - Développement d'un site web</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="bg-white p-6 rounded-lg shadow-md ml-auto mr-auto md:ml-[55%] md:w-[45%] relative">
                  <div className="absolute top-6 -left-4 md:-left-4 w-8 h-8 bg-violet-600 rounded-full border-4 border-white"></div>
                  <h3 className="text-xl font-semibold mb-2 text-violet-700">Juin 2024</h3>
                  <p className="text-gray-700">Stage chez Electro Sphère - Développement d'une application web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-violet-700 to-violet-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Envie d'en savoir plus sur mon travail ?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Découvrez mes projets et mes stages pour avoir un aperçu de mon travail et de mes compétences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-violet-700">
                Voir mes projets
              </Button>
            </Link>
            <Link to="/internships">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-violet-700">
                Voir mes stages
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white text-violet-700 hover:bg-gray-100">
                Me contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
