
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
                      <a href="mailto:nabil.bennadi@example.com" className="text-violet-600 hover:underline">
                        nabil.bennadi@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-violet-100 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
                      <a href="tel:+33600000000" className="text-violet-600 hover:underline">
                        +33 6 00 00 00 00
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-violet-100 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Localisation</h3>
                      <p className="text-gray-600">
                        Charleville-Mézières, Ardennes, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-violet-700">Disponibilité</h3>
              <p className="text-gray-700 mb-6">
                Je suis actuellement en formation mais disponible pour des stages, projets ou opportunités professionnelles. N'hésitez pas à me contacter pour discuter de votre projet.
              </p>
              
              <div className="bg-violet-50 border border-violet-100 rounded-lg p-4">
                <p className="text-violet-700 font-medium">
                  Réponse généralement dans les 24-48 heures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6 text-violet-700 text-center">Localisation</h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41381.662851905025!2d4.6971711865966715!3d49.76258979933147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0e195c34ad19%3A0x40a5fb99a3b45c0!2sCharleville-M%C3%A9zi%C3%A8res%2C%20France!5e0!3m2!1sfr!2sus!4v1713978705051!5m2!1sfr!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Charleville-Mézières map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
