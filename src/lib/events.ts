import { cacheLife, cacheTag } from "next/cache";

export type EventItem = {
  id: string;
  title: string;
  city: string;
};

// Demo data — in-memory array for learning caching
export const events: EventItem[] = [
  { id: "1", title: "Software Engineering Meetup", city: "Islamabad" },
  { id: "2", title: "Tech Conference", city: "Lahore" },
  { id: "3", title: "AI & Cloud Summit", city: "Karachi" },
];

// Cached function for all events
export async function getEvents(): Promise<EventItem[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("events");
  return events;
}

// Cached function for a single event by ID
export async function getEvent(id: string): Promise<EventItem | undefined> {
  "use cache";
  cacheLife("hours");
  cacheTag("events", `event-${id}`);
  return events.find((e) => e.id === id);
}
