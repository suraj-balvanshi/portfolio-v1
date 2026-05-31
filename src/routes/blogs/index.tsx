import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/blogs/"!</div>
      <Link to="/blogs/rendering">Go to "/blogs/rendering"</Link>
    </>
  );
}
