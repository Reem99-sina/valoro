export interface IResponse<T> {
  data: T;
  meta: Record<string, any>;
}

export interface ValoroData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  kpi: Industry;
}

export interface Industry {
  id: number;
  cards: KpiCard[];
}

export interface KpiCard {
  id: number;
  heading: string;
  text: string;
  icon: Media;
}

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any; // يمكنك تخصيصه إذا لزم
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface KpiCard {
  id: number;
  heading: string; // مثل: "10+"
  text: string; // مثل: "Countries"
  icon: Media;
}

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any; // يمكنك تخصيصه إذا كانت الصور لها فورمات متعددة (مثلاً thumbnails)
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AboutUsSection {
  id: number;
  heading: string; // "About us"
  partner: Partner[];
}

export interface Partner {
  id: number;

  title: string;
  logo: { id: number; image: ImageData[] };
}
export interface AboutUs {
  id: number;
  heading: string;
  text: string;
  image: ImageData;
  partner: Partner;
}

export interface ImageData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface AboutUsData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  about_us: AboutUs;
}

export interface ProjectsData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  projects: Projects;
}
export interface Projects {
  id: number;
  heading: string;
  text: string;
  icons: { id: number; image: Media[] };
}

interface IndustryCard {
  id: number;
  heading: string;
}

interface IndustrySection {
  cards: IndustryCard[];
  heading: string;
  id: number;
  text: string;
}

export interface IndustryData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  industry: IndustrySection;
}

export interface FeaturesData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  features: { logos: Media[]; title: string };
}

export interface FeaturesRes {
  data: FeaturesData;
  meta: Record<string, any>;
}

export interface PartnersData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  partner: Partner;
}

export interface BulletItem {
  id: number;
  title: string;
  description?: { desc: string; id: number }[]; // optional, if exists
  points?: string[]; // optional array of bullet points if present
}

export interface ServicesSection {
  id: number;
  title: string;
  bullets: BulletItem[];
}

export interface ServicesData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  Services: ServicesSection;
}

export interface Description {
  id: number;
  desc: string;
}

export interface AboutUs {
  id: number;
  title: string;
  description: Description[]; // قائمة من الفقرات
}

export interface Transformation {
  id: number;
  title: string;
  description: string; // هذا نص فقط، مش كائن
  about_us: AboutUs[];
}
//
export interface TransformationRes {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  transformation: Transformation;
}

export interface blockchain_projects {
  id: number;
  projects: { id: number; name: string }[];
  title: string;
}
export interface blockchainRes {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  blockchain_projects: blockchain_projects;
}

export interface blockchain_service {
  id: number;
  services: BulletItem[];
  title: string;
}
export interface blockchainServiceRes {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  blockchain_service: blockchain_service;
}