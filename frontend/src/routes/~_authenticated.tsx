import { createFileRoute } from "@tanstack/react-router";
import AuthenticatedLayout from "./authenticated-layout";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AuthenticatedLayout />;
}
