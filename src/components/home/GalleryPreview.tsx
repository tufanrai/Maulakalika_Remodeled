import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&auto=format&fit=crop",
    alt: "Mountain river landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&auto=format&fit=crop",
    alt: "Water flowing through mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop",
    alt: "Misty mountain peaks",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop",
    alt: "Green mountain valley",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Images from Our Field & Office
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our project sites, team meetings, and engineering
            achievements across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                idx === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  idx === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
