import { Link, Outlet, RootRoute } from "@tanstack/react-router";

const rootRoute = new RootRoute({
  component: Root,
});

function Root() {
  return (
    <div className="Root">
      <div className="m-auto flex items-center justify-center gap-10 p-10 shadow-2xl">
        <Link to="/" className="bold text-6xl">
          LOGO
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default rootRoute;
