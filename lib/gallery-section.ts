export interface GalleryImage {
    src: string;
    alt: string;
    category?: string;
  }
  
  export const gallerySectionImages: GalleryImage[] = [
    { src: "/house-beforeandafter.webp", alt: "Before and after of a house wash", category: "House Washing" },
    { src: "/roof-beforeandafter.webp", alt: "Before and after of roof cleaning", category: "Roof Cleaning" },
    { src: "/concrete-beforeandafter.webp", alt: "Before and after of concrete cleaning", category: "Concrete Cleaning" },
    { src: "/commercial.webp", alt: "Commercial building wash", category: "Commercial" },
    { src: "/gutter-beforeandafter.webp", alt: "Before and after of gutter cleaning", category: "Gutter Cleaning" },
    { src: "/fleet-washing.webp", alt: "Fleet washing", category: "Fleet Washing" },
  ];
  
  export interface GalleryVideo {
    src: string;
    title: string;
    category?: string;
  }
  
  export const gallerySectionVideos: GalleryVideo[] = [
    { src: "/pristinecleanvideo-resize.mp4", title: "Pristine Clean services showcase", category: "Services Overview" },
  ];