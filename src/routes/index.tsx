import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useUIStore } from "../store/ui-store";
import { apiRequest } from "#/lib/apiClient";
import type { WebsiteAuthor } from "#/types/schema";

// react query
function useAuthorProfile(isEnabled: boolean) {
  return useQuery({
    queryKey: ["author"],
    queryFn: async () =>
      await apiRequest<WebsiteAuthor>("/api/author", { method: "GET" }),
    enabled: isEnabled,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}

// tanstack route
export const Route = createFileRoute("/")({
  component: Home,
});

// UI
function Home() {
  const showProfile = useUIStore((state) => state.showProfile);
  const toggleProfile = useUIStore((state) => state.toggleProfile);
  const { data, isLoading, isFetching } = useAuthorProfile(showProfile);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "View Marquez Profile"}
      </button>

      {showProfile && (isLoading || isFetching) && <p>Fetching data...</p>}
      {showProfile && data && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "15px",
          }}
        >
          <h1>{data.info.name}</h1>
          <p>
            <strong>Username:</strong> {data.username}
          </p>
          <p>
            <strong>Email:</strong> {data.info.email}
          </p>
          <h3>Hobbies</h3>
          <ul>
            {data.info.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
