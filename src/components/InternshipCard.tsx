
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Briefcase } from 'lucide-react';

interface InternshipCardProps {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  id,
  title,
  company,
  period,
  description,
  image
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={company} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-violet-700">{title}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>{company}</span>
        </div>
        <div className="flex items-center mt-1 text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{period}</span>
        </div>
        <p className="mt-4 text-gray-700 line-clamp-3">{description}</p>
        <div className="mt-6">
          <Link to={`/internships/${id}`}>
            <Button variant="default" className="w-full bg-violet-600 hover:bg-violet-700">
              Voir les détails
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
