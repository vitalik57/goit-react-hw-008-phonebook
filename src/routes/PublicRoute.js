import React from "react";
import { Redirect, Route } from "react-router";
const PublicRoute = ({ path, exact, component, auth, restricted }) => {
  return auth && restricted ? (
    <Redirect to="/clients" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
