
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillCardProps {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-violet-600">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 bg-violet-100" indicatorClassName="bg-violet-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
