import React from "react";
import { Route, Redirect } from "react-router";
const PrivateRoutes = ({ component: Component, ...rest }) => {
  var session_token = localStorage.getItem("UserEmail");

  return (
    <Route
      {...rest}
      render={(props) =>
        session_token !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoutes;
