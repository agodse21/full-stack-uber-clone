import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_unauthenticated-routes/_user-login/user-login"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_unauthenticated-routes/_user-login/user-login"!</div>;
}
