import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import fetchGalleryContents from "@/api/gallery.api";

const categories = ["All", "Projects", "Meetings", "Events", "Construction"];

const images = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
    category: "Projects",
    alt: "Dam construction",
  },
  {
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&auto=format&fit=crop",
    category: "Projects",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&auto=format&fit=crop",
    category: "Projects",
    alt: "River flow",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=800&auto=format&fit=crop",
    category: "Meetings",
    alt: "Business meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop",
    category: "Meetings",
    alt: "Team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop",
    category: "Events",
    alt: "Event venue",
  },
  {
    src: "https://images.unsplash.com/photo-1518173946687-a4c036bc1c9a?w=800&auto=format&fit=crop",
    category: "Construction",
    alt: "Construction site",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    category: "Construction",
    alt: "Infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop",
    category: "Projects",
    alt: "Green valley",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const { data } = useQuery({
    queryKey: ["Fetch Images"],
    queryFn: fetchGalleryContents,
  });

  console.log(data);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Visual Journey
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our project sites, team activities, and milestones through
              our photo gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(image.src)}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 text-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
