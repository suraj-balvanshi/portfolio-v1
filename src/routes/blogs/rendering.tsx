import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/rendering')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blogs/rendering"!</div>
}
