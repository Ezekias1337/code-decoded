/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PrivacyPolicyLazyImport = createFileRoute('/privacy-policy')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PrivacyPolicyLazyRoute = PrivacyPolicyLazyImport.update({
  path: '/privacy-policy',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/privacy-policy.lazy').then((d) => d.Route),
)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/privacy-policy': {
      id: '/privacy-policy'
      path: '/privacy-policy'
      fullPath: '/privacy-policy'
      preLoaderRoute: typeof PrivacyPolicyLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  PrivacyPolicyLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/privacy-policy"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/privacy-policy": {
      "filePath": "privacy-policy.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
