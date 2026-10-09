// Shared TypeScript types go here
// Example: Event, User, Category types

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url: string;
  categoryId: string;
  organizerId: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
}
