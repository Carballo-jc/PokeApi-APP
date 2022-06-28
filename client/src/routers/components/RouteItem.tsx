import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType<any>;
  redirectTo?: string;
}

function RouteItem({ redirectTo, ...config }: Props) {
  return redirectTo ? <Navigate to={redirectTo} /> : <Route {...config} />;
}

export default RouteItem;
