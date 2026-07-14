"use server"

export type ReleaseInfo = {
  url: string | null;
  size: number | null;
};

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const ymlUrl = "https://cdn.rawencat.tech/releases/latest.yml";

    const response = await fetch(ymlUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Error al obtener el yml: ${response.status}`);
    }

    const text = await response.text();

    const path = text.match(/^path:\s*(.+)$/m)?.[1]?.trim() ?? null;
    const size = text.match(/^\s*size:\s*(\d+)/m)?.[1] ?? null;

    const url =
      typeof path === "string" && path.startsWith("http") ? path : null;
    const sizeNum = size ? Number(size) : null;

    return { url, size: sizeNum };
  } catch {
    return { url: null, size: null };
  }
}
