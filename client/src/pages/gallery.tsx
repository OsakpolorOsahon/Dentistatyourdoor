import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GalleryItem } from "@shared/schema";
import SmileGallery from "@/components/gallery/smile-gallery";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const filteredItems = galleryItems.filter(item => 
    activeFilter === "all" || item.category === activeFilter
  );

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "whitening", name: "Whitening", count: galleryItems.filter(item => item.category === "whitening").length },
    { id: "veneers", name: "Veneers", count: galleryItems.filter(item => item.category === "veneers").length },
    { id: "restoration", name: "Restoration", count: galleryItems.filter(item => item.category === "restoration").length },
  ];

  if (isLoading) {
    return (
      <div className="pt-16 lg:pt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-80 mx-auto mb-4" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-medical-blue mb-4">
              Smile Transformations
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the amazing results we've achieved for our patients. Every smile tells a story of confidence restored.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  activeFilter === category.id
                    ? "bg-medical-blue text-white"
                    : "bg-white text-medical-blue border-medical-blue hover:bg-medical-blue hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <SmileGallery items={filteredItems} />
          ) : (
            <div className="text-center py-12">
              <i className="fas fa-search text-gray-300 text-6xl mb-4"></i>
              <h3 className="text-xl font-montserrat font-semibold text-gray-500 mb-2">
                No items found
              </h3>
              <p className="text-gray-400">
                Try selecting a different category to see more results.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with our professional dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-medical-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gray-50 transition-colors duration-200">
              Book Your Consultation
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-medical-blue transition-colors duration-200">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
