import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div>
      {!loading && (
        <Route
          {...rest}
          render={(props) => {
            if (!isAuthenticated) {
              return navigate("/login");
            }

            // if (isAdmin === true && user.role !== "admin") {
            //   return <Redirect to="/login" />;
            // }

            return <Component {...props} />;
          }}
        />
      )}
    </div>
  );
};

export default ProtectedRoute;
