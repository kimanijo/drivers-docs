export const CATEGORIES = {
    "adaptive-optics": "Adaptive Optics",
    "auxiliaries": "Auxiliaries",
    "cameras": "Cameras",
    "domes": "Domes",
    "dustcaps": "Dust Caps",
    "filter-wheels": "Filter Wheels",
    "focusers": "Focusers",
    "lightboxes": "Light Boxes",
    "mounts": "Mounts",
    "observatory-controllers": "Observatory Controllers",
    "rotators": "Rotators",
    "weather-stations": "Weather Stations",
} as const;

export type CategorySlug = keyof typeof CATEGORIES;
