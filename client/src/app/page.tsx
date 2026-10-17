import { publicFetch } from "@/lib/publicFetch";

type Health = { status: string };

export default async function HomePage() {
  const health = await publicFetch<Health>("/health", 0);
  const isOnline = health?.status === "ok";

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">DropZone</h1>
      <p>{isOnline ? "API : ok" : "API injoignable"}</p>
    </main>
  );
}
