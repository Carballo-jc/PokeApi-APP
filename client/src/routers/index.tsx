import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Suspense from './Suspense';

import { ROUTES } from './const';
import RouteItem from './components/RouteItem';

function Routes() {
  return (
    <Router>
      <div>
        <Suspense>
            {ROUTES.map(({ path, ...config }) => (
              <RouteItem key={path} path={path} {...config} />
            ))}
        </Suspense>
      </div>
    </Router>
  );
}

export default Routes;
