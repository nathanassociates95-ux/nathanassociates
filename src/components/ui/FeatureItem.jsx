import React from 'react';
import { Check } from 'lucide-react';

const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-center gap-3 group">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
      </div>
      <span className="text-gray-600 font-semibold text-base">{text}</span>
    </div>
  );
};

export default FeatureItem;
