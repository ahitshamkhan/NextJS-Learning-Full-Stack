// App-wide constants go here

export const APP_NAME = "Event Platform";

export const DEFAULT_PAGE_SIZE = 6;

export const EVENT_CATEGORIES = [
  "Conference",
  "Workshop",
  "Meetup",
  "Webinar",
  "Hackathon",
  "Concert",
  "Festival",
  "Sports",
  "Other",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Create Event", href: "/events/create" },
  { label: "Profile", href: "/profile" },
] as const;
