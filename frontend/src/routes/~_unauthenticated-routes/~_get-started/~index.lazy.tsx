import { Button } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_unauthenticated-routes/_get-started/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen w-full flex justify-between bg-red-300">
      <div className="w-full bg-[url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_690,w_552/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png')] h-full bg-cover bg-center">
        <p className="text-4xl font-bold ml-5 mt-5 shadow-lg bg-white p-2 w-fit rounded-sm">
          Uber
        </p>
      </div>
      <div className="w-full bg-white p-5 flex flex-col justify-center gap-2">
        <p className="text-2xl font-medium">Get Started With Uber</p>
        <Link to="/user-login">
          <Button variant="default" className="w-fit">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}
