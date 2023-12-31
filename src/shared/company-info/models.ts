export interface CompanyInfo {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    postCode: string;
    country: string;
    googleMapsUrl: string;
  };
  structure: string;
  registrationNumber: string;
  directors: Employee[];
  socialMedia: {
    facebook: SocialMediaDetails;
    instagram: SocialMediaDetails;
    pinterest: SocialMediaDetails;
  };
}

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface SocialMediaDetails {
  url: string;
  name: string;
}
