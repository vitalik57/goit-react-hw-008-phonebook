import { lazy } from "react";
export const mainRoutes = [
  {
    name: "",
    path: "/",
    private: false,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "Clients",
    path: "/clients",
    private: true,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/ClientsPage" /*webpackChunkName:'PhoneBookPage'*/)
    ),
  },
  {
    name: "Registration",
    path: "/registration",
    private: false,
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'AuthPage'*/)
    ),
  },
  {
    name: "Login",
    path: "/login",
    private: false,
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'AuthPage'*/)
    ),
  },
];
