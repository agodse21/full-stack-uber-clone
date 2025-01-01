import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_unauthenticated-routes/_captain-login/captain-login"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_unauthenticated-routes/_captain-login/"!</div>;
}
