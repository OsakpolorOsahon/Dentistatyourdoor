import { useState } from "react";
import { GalleryItem } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface SmileGalleryProps {
  items: GalleryItem[];
  isPreview?: boolean;
}

export default function SmileGallery({ items, isPreview = false }: SmileGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <i className="fas fa-images text-gray-300 text-6xl mb-4"></i>
        <h3 className="text-xl font-montserrat font-semibold text-gray-500 mb-2">
          No gallery items available
        </h3>
        <p className="text-gray-400">
          Check back soon for amazing smile transformations.
        </p>
      </div>
    );
  }

  return (
    <section className={`${isPreview ? 'py-16 bg-gray-50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isPreview && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
              Smile Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the amazing results we've achieved for our patients. Every smile tells a story of confidence restored.
            </p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-48 overflow-hidden">
                {item.beforeImage ? (
                  <img 
                    src={item.beforeImage} 
                    alt={`${item.title} before dental treatment transformation`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    data-testid={`img-gallery-before-${item.id}`}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center">
                    <i className="fas fa-tooth text-white text-6xl"></i>
                  </div>
                )}
                
                {/* Overlay with view button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-medical-blue hover:bg-gray-100">
                    <i className="fas fa-eye mr-2"></i>
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getCategoryColor(item.category)}`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  {item.duration && (
                    <span className="text-medical-blue font-semibold text-sm">{item.duration}</span>
                  )}
                </div>
                <h3 className="font-montserrat font-semibold text-medical-blue mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button className="bg-medical-blue text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                View Full Gallery
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onClick={(e) => e.target === e.currentTarget && setSelectedItem(null)}
        >
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 
                  id="modal-title"
                  className="text-2xl font-montserrat font-bold text-medical-blue"
                >
                  {selectedItem.title}
                </h2>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close modal"
                  data-testid="button-close-modal"
                >
                  <i className="fas fa-times text-xl" aria-hidden="true"></i>
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {selectedItem.beforeImage && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Before</h3>
                    <img 
                      src={selectedItem.beforeImage} 
                      alt={`${selectedItem.title} before dental treatment`}
                      className="w-full h-64 object-cover rounded-lg"
                      loading="lazy"
                      decoding="async"
                      data-testid="img-modal-before"
                    />
                  </div>
                )}
                {selectedItem.afterImage && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">After</h3>
                    <img 
                      src={selectedItem.afterImage} 
                      alt={`${selectedItem.title} after dental treatment - completed transformation`}
                      className="w-full h-64 object-cover rounded-lg"
                      loading="lazy"
                      decoding="async" 
                      data-testid="img-modal-after"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getCategoryColor(selectedItem.category)}`}>
                    {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                  </span>
                  {selectedItem.treatmentType && (
                    <span className="text-medical-blue font-semibold">{selectedItem.treatmentType}</span>
                  )}
                  {selectedItem.duration && (
                    <span className="text-gray-600">{selectedItem.duration}</span>
                  )}
                </div>
                
                {selectedItem.description && (
                  <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                )}
                
                <div className="pt-4 border-t">
                  <Link href="/booking">
                    <Button 
                      className="bg-medical-blue text-white hover:bg-opacity-90"
                      onClick={() => setSelectedItem(null)}
                    >
                      Book Similar Treatment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function getCategoryColor(category: string): string {
  switch (category) {
    case 'whitening': return 'bg-medical-teal';
    case 'veneers': return 'bg-medical-blue';
    case 'restoration': return 'bg-medical-gray';
    case 'orthodontic': return 'bg-purple-500';
    case 'preventive': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
}
