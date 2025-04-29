
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Users } from 'lucide-react';

const Skills = () => {
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
          <h1 className="text-4xl font-bold mb-4">Mes compétences</h1>
          <p className="text-xl text-violet-100">
            Découvrez mon portefeuille de compétences en développement web, cybersécurité et soft skills.
          </p>
        </div>
      </section>

      {/* Portefeuille de compétences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-violet-700">Portefeuille de compétences</h2>
              <p className="text-gray-700 mb-6">
                Mon parcours en BTS SIO option SLAM m'a permis de développer un large éventail de compétences techniques 
                et transversales. Je suis spécialisé dans le développement d'applications web et la cybersécurité.
              </p>
              <p className="text-gray-700">
                Ces compétences sont constamment mises à jour et renforcées grâce à des projets personnels, 
                des stages en entreprise et une veille technologique régulière.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/8bd65a81-dc92-4f94-9e78-8ed53b7142db.png" 
                alt="Portefeuille de compétences" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compétences détaillées */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-violet-700">Détail des compétences</h2>
          
          <Tabs defaultValue="dev" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-violet-100">
              <TabsTrigger value="dev" className="data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                <Code className="h-4 w-4 mr-2" />
                Développement
              </TabsTrigger>
              <TabsTrigger value="cyber" className="data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                <Database className="h-4 w-4 mr-2" />
                Cybersécurité
              </TabsTrigger>
              <TabsTrigger value="soft" className="data-[state=active]:bg-violet-600 data-[state=active]:text-white">
                <Users className="h-4 w-4 mr-2" />
                Soft Skills
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dev" className="mt-6 animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {programmingSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-violet-100" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cyber" className="mt-6 animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {cyberSecuritySkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-violet-100" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="soft" className="mt-6 animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {softSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-violet-100" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications et formations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-violet-700">Certifications et formations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
              <h3 className="text-xl font-semibold mb-2 text-violet-700">BTS SIO option SLAM</h3>
              <p className="text-gray-600 mb-2">Lycée Gaspard Monge, Charleville-Mézières</p>
              <p className="text-gray-700">Formation en développement d'applications web et mobiles, conception de bases de données.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
              <h3 className="text-xl font-semibold mb-2 text-violet-700">Certification SecNumedu</h3>
              <p className="text-gray-600 mb-2">En cours</p>
              <p className="text-gray-700">Certification en cybersécurité délivrée par l'ANSSI.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
              <h3 className="text-xl font-semibold mb-2 text-violet-700">Formation en développement web</h3>
              <p className="text-gray-600 mb-2">Autoformation</p>
              <p className="text-gray-700">Apprentissage continu des frameworks modernes et des bonnes pratiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Veille technologique */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-violet-700">Veille technologique</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Pour rester à jour dans un domaine en constante évolution, je maintiens une veille technologique active sur plusieurs sujets :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-violet-700">Développement web</h3>
              <p className="text-gray-700 mb-4">
                Je suis régulièrement l'évolution des frameworks JavaScript comme React et Vue.js, ainsi que les nouveautés en matière de CSS et d'architecture web.
              </p>
              <p className="text-gray-700">
                Sources : blogs spécialisés, newsletters, Twitter, GitHub, StackOverflow.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-violet-700">Cybersécurité</h3>
              <p className="text-gray-700 mb-4">
                Je me tiens informé des dernières vulnérabilités, des techniques de protection et des bonnes pratiques en matière de sécurité informatique.
              </p>
              <p className="text-gray-700">
                Sources : bulletins de l'ANSSI, forums spécialisés, webinars, podcasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
