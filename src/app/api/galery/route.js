import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const folder = path.join(process.cwd(), "public", "TESTIMONI");
    const files = fs.readdirSync(folder);
    const images = files
      .filter((f) => /\.(webp|jpg|jpeg|png|gif)$/i.test(f))
      .map((f) => `/TESTIMONI/${f}`);

    return new Response(JSON.stringify(images), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API error:", err);
    return new Response(JSON.stringify({ error: "Failed to load images" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
