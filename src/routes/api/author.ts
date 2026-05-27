import { getAuthor } from "#/api-supabase/author";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/author")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const validatedData = await getAuthor();

          return new Response(JSON.stringify(validatedData), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (_e) {
          return new Response(
            JSON.stringify({ error: "Internal server error" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      },
    },
  },
});
