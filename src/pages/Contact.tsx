
import React from 'react';
import { Mail, Phone, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simuler l'envoi d'un message
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dès que possible.",
      variant: "default",
    });
    
    // Réinitialiser le formulaire
    e.currentTarget.reset();
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-800 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-violet-100">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-violet-700">Envoyez-moi un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
                  <Send className="mr-2 h-4 w-4" /> Envoyer le message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-violet-700">Mes coordonnées</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-violet-100 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Email</h3>
                      <a href="mailto:nabil.bennadi@outlook.fr" className="text-violet-600 hover:underline">
                        nabil.bennadi@outlook.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-violet-100 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
                      <a href="tel:0782906413" className="text-violet-600 hover:underline">
                        07 82 90 64 13
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-violet-700">Télécharger mon CV</h3>
              <a href="/cv-nabil-bennadi.pdf" download className="inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors">
                <Download className="mr-2 h-5 w-5" />
                Télécharger mon CV
              </a>
              
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-4 mt-6">
                <p className="text-violet-700 font-medium">
                  Réponse généralement dans les 24-48 heures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
