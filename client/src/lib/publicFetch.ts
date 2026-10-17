export async function publicFetch<T>(
  path: string,
  revalidate?: number,
): Promise<T | null> {
  try {
    const response = await fetch(`${process.env.API_URL}${path}`, {
      next: { revalidate },
    });

    if (!response.ok) {
      return null;
    }
    const body = (await response.json()) as { data: T };
    return body.data;
  } catch {
    return null;
  }
}
