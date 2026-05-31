import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import globalCss from "../styles.css?url";
import { Navbar } from "#/components/navbar";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marquez Portfolio" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { queryClient } = Route.useRouteContext();

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className="root-body relative flex flex-col items-center min-h-screen">
          <header>
            <HeadContent />
            <div className="root-header flex items-center justify-between gap-4">
              <h1>Marquez Portfolio</h1>
              <Navbar />
            </div>
          </header>
          <main className="root-main flex-grow">{children}</main>
          <footer className="root-footer mt-auto text-center">
            <p>&copy; 2026 Marquez. All rights reserved.</p>
          </footer>
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </body>
      </QueryClientProvider>
    </html>
  );
}
