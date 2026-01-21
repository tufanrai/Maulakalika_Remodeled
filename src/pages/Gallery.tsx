import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import fetchGalleryContents from "@/api/gallery.api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Receiving data's interface
interface IProps {
  url: string;
  category: string;
  alt: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [Categories, setCategories] = useState<string[] | undefined>(undefined);
  const [Images, setImages] = useState<IProps[] | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter images by category
  const filteredImages =
    activeCategory === "All"
      ? Images
      : Images.filter((img) => img.category === activeCategory);

  // Fetching the images from the backend
  const { data } = useQuery({
    queryKey: ["Fetch Images"],
    queryFn: fetchGalleryContents,
  });

  // Fetch the images from the backend
  useEffect(() => {
    const newCats = data?.files?.map((Img) => Img.category) ?? "";
    const newImgs = data?.files?.map((Img) => Img) ?? "";

    // Listing the categories of the images
    let newCategories = ["All", ...newCats];
    setCategories(newCategories);

    // Listing the images
    setImages(newImgs);
  }, [data]);

  // check for visitors from landing page.
  useEffect(() => {
    const image = sessionStorage.getItem("openImage");

    if (image) {
      setSelectedImage(image);
      setTimeout(() => {
        sessionStorage.removeItem("openImage");
      }, 1000);
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Gallery
              <hr className="max-w-50 w-full h-1 rounded-full border-accent" />
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
      {Images && Images != undefined ? (
        <>
          {/* Gallery */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {Categories.map((cat) => (
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
                    onClick={() => setSelectedImage(image.url)}
                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                  >
                    <img
                      src={image.url}
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
        </>
      ) : (
        <>
          <Layout>
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Article Not Found
              </h1>
              <Button asChild>
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to News
                </Link>
              </Button>
            </div>
          </Layout>
        </>
      )}
    </Layout>
  );
};

export default Gallery;
