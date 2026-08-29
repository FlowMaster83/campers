export function humanizeLabel(value: string): string {
  return value
    .split("_")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatLocation(location: string): string {
  const parts = location
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  return parts.length > 1 ? [...parts].reverse().join(", ") : location;
}

const AMENITY_LABELS: Record<string, string> = {
  ac: "AC",
  tv: "TV",
};

export function humanizeAmenity(amenity: string): string {
  return AMENITY_LABELS[amenity] ?? humanizeLabel(amenity);
}

export function getCamperBadges(camper: {
  transmission: string;
  engine: string;
  form: string;
  amenities: string[];
}): string[] {
  return [
    humanizeLabel(camper.transmission),
    ...camper.amenities.map(humanizeAmenity),
    humanizeLabel(camper.engine),
    humanizeLabel(camper.form),
  ];
}
