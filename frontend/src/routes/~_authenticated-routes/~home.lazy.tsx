import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "./components/home";

export const Route = createLazyFileRoute("/_authenticated-routes/home")({
  component: Home,
});
