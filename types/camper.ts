export type CamperForm = "alcove" | "panel_van" | "integrated" | "semi_integrated";

export type CamperTransmission = "automatic" | "manual";

export type CamperEngine = "diesel" | "petrol" | "hybrid" | "electric";

export type CamperAmenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

export interface CamperBase {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CamperTransmission;
  engine: CamperEngine;
  amenities: CamperAmenity[];
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface CamperListItem extends CamperBase {
  coverImage: string;
}

export interface CamperGalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperDetails extends CamperBase {
  gallery: CamperGalleryImage[];
}

export interface CamperReview {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface CampersListResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItem[];
}

export interface CampersFilters {
  forms: CamperForm[];
  transmissions: CamperTransmission[];
  engines: CamperEngine[];
}

export interface CampersFilterParams {
  location?: string;
  form?: CamperForm;
  transmission?: CamperTransmission;
  engine?: CamperEngine;
}

export interface CampersQueryParams extends CampersFilterParams {
  page?: number;
  perPage?: number;
}

export interface BookingRequestPayload {
  name: string;
  email: string;
  bookingDate?: string;
  comment?: string;
}

export interface BookingRequestResponse {
  message: string;
}
