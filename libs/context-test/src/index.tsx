import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import { TrackunitProviders } from '@trackunit/react-core-contexts';
import '@trackunit/css-core';
import { App } from './app';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { RouterRuntime } from '@trackunit/iris-app-runtime-core';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree });

const RootComponent = () => (
  <TrackunitProviders>
    <RouterProvider basepath={RouterRuntime.getBasePath()} router={router} />
  </TrackunitProviders>
);

const lifeCycle = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: RootComponent,
  errorBoundary(err, info, props) {
    return <div>An error occurred in the context-test app!</div>;
  },
});

export const bootstrap = lifeCycle.bootstrap;
export const mount = lifeCycle.mount;
export const unmount = lifeCycle.unmount;
