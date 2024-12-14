export interface CompanyInfo {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  founded: string;
  location: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
}

export interface ContactInfo {
  email: string;
  ccEmail: string;
  phone: string;
  location: {
    street: string;
    city: string;
    zipCode: string;
  };
  socialMedia: {
    github: string;
    linkedin: string;
  };
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}