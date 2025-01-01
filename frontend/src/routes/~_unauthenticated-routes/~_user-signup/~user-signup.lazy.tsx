import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_unauthenticated-routes/_user-signup/user-signup"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div></div>;
}
