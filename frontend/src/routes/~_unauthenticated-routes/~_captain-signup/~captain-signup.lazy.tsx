import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_unauthenticated-routes/_captain-signup/captain-signup"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>Hello "/_unauthenticated-routes/_captain-signup/captain-signup"!</div>
  );
}
