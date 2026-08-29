import { apiFetch, buildQueryString } from "./httpClient";
import type {
  BookingRequestPayload,
  BookingRequestResponse,
  CamperDetails,
  CampersFilters,
  CampersListResponse,
  CampersQueryParams,
  CamperReview,
} from "@/types/camper";

export function getCampers(
  params: CampersQueryParams = {},
): Promise<CampersListResponse> {
  const query = buildQueryString({
    page: params.page,
    perPage: params.perPage,
    location: params.location,
    form: params.form,
    transmission: params.transmission,
    engine: params.engine,
  });

  return apiFetch<CampersListResponse>(`/campers${query}`);
}

export function getCampersFilters(): Promise<CampersFilters> {
  return apiFetch<CampersFilters>("/campers/filters");
}

export function getCamperById(camperId: string): Promise<CamperDetails> {
  return apiFetch<CamperDetails>(`/campers/${camperId}`);
}

export function getCamperReviews(camperId: string): Promise<CamperReview[]> {
  return apiFetch<CamperReview[]>(`/campers/${camperId}/reviews`);
}

export function createBookingRequest(
  camperId: string,
  payload: BookingRequestPayload,
): Promise<BookingRequestResponse> {
  return apiFetch<BookingRequestResponse>(
    `/campers/${camperId}/booking-requests`,
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}
