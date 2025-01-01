import Navbar from "@/components/navbar";
import { Outlet } from "@tanstack/react-router";

export default function AuthenticatedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
