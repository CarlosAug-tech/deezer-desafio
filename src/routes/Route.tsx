import React from 'react';
import {
  RouteProps as DOMRouteProps,
  Route as DOMRoute,
} from 'react-router-dom';
import DefaultLayout from '../pages/__layouts/default';

interface IRouteProps extends DOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const Layout = DefaultLayout;

  return (
    <DOMRoute
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
