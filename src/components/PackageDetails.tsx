import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { Check, ArrowLeft } from 'lucide-react';

export function PackageDetails() {
  const { id } = useParams();
  const pkg = packages.find(p => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Package Not Found</h2>
          <Link to="/" className="text-dark-900 hover:text-dark-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-dark-900 hover:text-dark-700 mb-12">
          <ArrowLeft className="h-5 w-5" />
          Back to Packages
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src={pkg.image} 
              alt={pkg.title} 
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-light mb-4">{pkg.title}</h1>
            <p className="text-3xl font-light mb-6">{pkg.price}</p>
            <p className="text-dark-700 mb-8">{pkg.description}</p>
            
            <h3 className="text-xl font-medium mb-4">Package Includes:</h3>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-dark-900" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors"
            >
              Book This Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}