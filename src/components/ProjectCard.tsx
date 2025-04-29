
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: 'dev' | 'cyber';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  type
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute top-2 right-2 z-10">
          <Badge className={type === 'dev' ? 'bg-violet-600' : 'bg-blue-600'}>
            {type === 'dev' ? 'Développement' : 'Cybersécurité'}
          </Badge>
        </div>
        <img 
          src={image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop'} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-violet-700">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-violet-100 text-violet-800">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/projects/${id}`}>
          <Button variant="default" className="w-full bg-violet-600 hover:bg-violet-700">
            Voir le projet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
