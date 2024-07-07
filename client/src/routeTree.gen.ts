/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TermsOfServiceLazyImport = createFileRoute('/terms-of-service')()
const PrivacyPolicyLazyImport = createFileRoute('/privacy-policy')()
const PageNotFoundLazyImport = createFileRoute('/page-not-found')()
const FaqsLazyImport = createFileRoute('/faqs')()
const ContactUsLazyImport = createFileRoute('/contact-us')()
const ContactFormSubmittedLazyImport = createFileRoute(
  '/contact-form-submitted',
)()
const AboutUsLazyImport = createFileRoute('/about-us')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TermsOfServiceLazyRoute = TermsOfServiceLazyImport.update({
  path: '/terms-of-service',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/terms-of-service.lazy').then((d) => d.Route),
)

const PrivacyPolicyLazyRoute = PrivacyPolicyLazyImport.update({
  path: '/privacy-policy',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/privacy-policy.lazy').then((d) => d.Route),
)

const PageNotFoundLazyRoute = PageNotFoundLazyImport.update({
  path: '/page-not-found',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/page-not-found.lazy').then((d) => d.Route),
)

const FaqsLazyRoute = FaqsLazyImport.update({
  path: '/faqs',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/faqs.lazy').then((d) => d.Route))

const ContactUsLazyRoute = ContactUsLazyImport.update({
  path: '/contact-us',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact-us.lazy').then((d) => d.Route))

const ContactFormSubmittedLazyRoute = ContactFormSubmittedLazyImport.update({
  path: '/contact-form-submitted',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/contact-form-submitted.lazy').then((d) => d.Route),
)

const AboutUsLazyRoute = AboutUsLazyImport.update({
  path: '/about-us',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about-us.lazy').then((d) => d.Route))

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
    '/about-us': {
      id: '/about-us'
      path: '/about-us'
      fullPath: '/about-us'
      preLoaderRoute: typeof AboutUsLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact-form-submitted': {
      id: '/contact-form-submitted'
      path: '/contact-form-submitted'
      fullPath: '/contact-form-submitted'
      preLoaderRoute: typeof ContactFormSubmittedLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact-us': {
      id: '/contact-us'
      path: '/contact-us'
      fullPath: '/contact-us'
      preLoaderRoute: typeof ContactUsLazyImport
      parentRoute: typeof rootRoute
    }
    '/faqs': {
      id: '/faqs'
      path: '/faqs'
      fullPath: '/faqs'
      preLoaderRoute: typeof FaqsLazyImport
      parentRoute: typeof rootRoute
    }
    '/page-not-found': {
      id: '/page-not-found'
      path: '/page-not-found'
      fullPath: '/page-not-found'
      preLoaderRoute: typeof PageNotFoundLazyImport
      parentRoute: typeof rootRoute
    }
    '/privacy-policy': {
      id: '/privacy-policy'
      path: '/privacy-policy'
      fullPath: '/privacy-policy'
      preLoaderRoute: typeof PrivacyPolicyLazyImport
      parentRoute: typeof rootRoute
    }
    '/terms-of-service': {
      id: '/terms-of-service'
      path: '/terms-of-service'
      fullPath: '/terms-of-service'
      preLoaderRoute: typeof TermsOfServiceLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutUsLazyRoute,
  ContactFormSubmittedLazyRoute,
  ContactUsLazyRoute,
  FaqsLazyRoute,
  PageNotFoundLazyRoute,
  PrivacyPolicyLazyRoute,
  TermsOfServiceLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about-us",
        "/contact-form-submitted",
        "/contact-us",
        "/faqs",
        "/page-not-found",
        "/privacy-policy",
        "/terms-of-service"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about-us": {
      "filePath": "about-us.lazy.tsx"
    },
    "/contact-form-submitted": {
      "filePath": "contact-form-submitted.lazy.tsx"
    },
    "/contact-us": {
      "filePath": "contact-us.lazy.tsx"
    },
    "/faqs": {
      "filePath": "faqs.lazy.tsx"
    },
    "/page-not-found": {
      "filePath": "page-not-found.lazy.tsx"
    },
    "/privacy-policy": {
      "filePath": "privacy-policy.lazy.tsx"
    },
    "/terms-of-service": {
      "filePath": "terms-of-service.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
