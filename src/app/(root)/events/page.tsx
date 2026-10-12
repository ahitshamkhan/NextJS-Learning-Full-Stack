import { getEvents } from "@/lib/events";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Upcoming Events</h1>
        <p className="text-gray-500 mt-1">
          Cached server component using modern Next.js Cache Components (<code>use cache</code>).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <article
            key={event.id}
            className="p-5 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
          >
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {event.city}
            </span>
            <h2 className="text-xl font-semibold mt-3 text-gray-900 dark:text-gray-100">
              {event.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Event ID: {event.id}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
